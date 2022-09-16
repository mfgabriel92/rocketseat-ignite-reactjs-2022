import { Container, ImageContainer } from "@styles/pages/thank-you.styles";
import { stripe } from "lib/stripe";
import { GetServerSideProps } from "next";
import Image from "next/future/image";
import Head from "next/head";
import Link from "next/link";
import Stripe from "stripe";

interface PurchaseProps {
  customerName: string;
  productName: string;
  productImage: string;
}

interface ThankYouProps {
  purchase: PurchaseProps;
}

function ThankYou({ purchase }: ThankYouProps) {
  return (
    <>
      <Head>
        <title>Ignite Shop | Thank You</title>
        <meta name="robots" content="noindex" />
      </Head>
      <Container>
        <h1>
          Thank you! <br /> Purchase successful
        </h1>
        <ImageContainer>
          <Image src={purchase.productImage} width={130} height={145} alt="" />
        </ImageContainer>

        <p>
          Yes! <strong>{purchase.customerName}</strong>, your{" "}
          <strong>{purchase.productName}</strong> is on its way to your home.
        </p>

        <Link href="/">Back to home</Link>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const sessionId = String(query.session_id);
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const product = session.line_items?.data[0].price?.product as Stripe.Product;
  const purchase = {
    customerName: session.customer_details?.name,
    productName: product.name,
    productImage: product.images[0],
  };

  return {
    props: {
      purchase,
    },
  };
};

export default ThankYou;
