import { Box } from "@chakra-ui/react";
import { Input } from "@components/Input";
import { TransactionsContext } from "@contexts/TransactionsContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { seachFormSchema, SearchFormInput } from "@schemas/searchForm";
import { useForm } from "react-hook-form";
import { useContextSelector } from "use-context-selector";

function SearchForm() {
  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (context) => context.fetchTransactions,
  );
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(seachFormSchema),
  });

  async function handleSearch(data: SearchFormInput) {
    fetchTransactions(data.query);
  }

  return (
    <Box as="form" onSubmit={handleSubmit(handleSearch)}>
      <Input placeholder="Search" marginTop="2rem" {...register("query")} />
    </Box>
  );
}

export { SearchForm };
