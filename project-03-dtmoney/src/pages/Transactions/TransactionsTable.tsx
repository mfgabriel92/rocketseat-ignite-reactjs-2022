import { VStack } from "@chakra-ui/react";
import { TransactionsContext } from "contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";
import { TransactionRow } from "./TransactionRow";

function TransactionsTable() {
  const transactions = useContextSelector(TransactionsContext, (context) => context.transactions);

  return (
    <VStack>
      {transactions?.map((transaction) => (
        <TransactionRow key={transaction.id} {...transaction} />
      ))}
    </VStack>
  );
}

export { TransactionsTable };
