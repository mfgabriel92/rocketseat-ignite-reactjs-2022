import * as zod from "zod";

const seachFormSchema = zod.object({
  query: zod.string(),
});

export type SearchFormInput = zod.infer<typeof seachFormSchema>;

export { seachFormSchema };
