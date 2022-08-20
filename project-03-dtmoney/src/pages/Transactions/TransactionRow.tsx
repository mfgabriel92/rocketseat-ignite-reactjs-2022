import { Flex, Text } from "@chakra-ui/react";
import { Transaction } from "@typings/transaction";
import { formatCurrency, formatDate } from "utils/formatter";

function TransactionRow({ id, type, description, amount, category, createdAt }: Transaction) {
  return (
    <Flex
      width="full"
      backgroundColor="gray.600"
      paddingX="1.5rem"
      paddingY="1rem"
      borderRadius="6px"
      justifyContent="space-between"
    >
      <Text color="gray.300" flexBasis="60%">
        {description}
      </Text>
      <Text color={type === "income" ? "green.300" : "red.300"} fontWeight="bold" flexBasis="10%">
        {type === "income" ? "+" : "-"} {formatCurrency.format(amount)}
      </Text>
      <Text color="gray.300" flexBasis="10%">
        {category}
      </Text>
      <Text color="gray.300" flexBasis="10%">
        {formatDate.format(new Date(createdAt))}
      </Text>
    </Flex>
  );
}

export { TransactionRow };
