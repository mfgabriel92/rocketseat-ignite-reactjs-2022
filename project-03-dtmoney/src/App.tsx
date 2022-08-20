import { ChakraProvider } from "@chakra-ui/react";
import { Transactions } from "@pages/Transactions";
import { defaultTheme } from "@styles/themes/default";
import { TransactionsProvider } from "contexts/TransactionsContext";

function App() {
  return (
    <ChakraProvider theme={defaultTheme}>
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </ChakraProvider>
  );
}

export default App;
