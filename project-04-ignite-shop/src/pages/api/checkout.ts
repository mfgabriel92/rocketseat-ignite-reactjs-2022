import { stripe } from "lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { priceId } = req.body;

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!priceId) {
    return res.status(400).json({ error: "Price ID missing" });
  }

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price: req.body.priceId,
        quantity: 1,
      },
    ],
    success_url: `${process.env.URL}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.URL}`,
  });

  return res.status(201).json({ checkoutUrl: checkoutSession.url });
}

export default handler;
