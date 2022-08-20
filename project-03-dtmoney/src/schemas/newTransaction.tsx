import * as zod from "zod";

const newTransactionSchema = zod.object({
  type: zod.enum(["income", "outcome"]),
  description: zod.string(),
  amount: zod.number().min(1),
  category: zod.string(),
});

export type NewTransactionInput = zod.infer<typeof newTransactionSchema>;

export { newTransactionSchema };
