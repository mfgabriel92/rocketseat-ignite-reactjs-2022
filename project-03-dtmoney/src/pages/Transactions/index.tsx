import { Flex, useDisclosure } from "@chakra-ui/react";
import { Header } from "@components/Header";
import { NewTransactionModal } from "./NewTransactionModal";
import { SearchForm } from "./SearchForm";
import { Summary } from "./Summary";
import { TransactionsTable } from "./TransactionsTable";

function Transactions() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex flexDirection="column">
      <NewTransactionModal isOpen={isOpen} onClose={onClose} />
      <Header onOpen={onOpen} />
      <Flex width="full" maxWidth="1180px" marginX="auto" flexDirection="column" gap="2rem">
        <Summary />
        <SearchForm />
        <TransactionsTable />
      </Flex>
    </Flex>
  );
}

export { Transactions };
