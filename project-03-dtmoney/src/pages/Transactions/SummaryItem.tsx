import { As, Flex, Icon as CharkaIcon, Text } from "@chakra-ui/react";
import { formatCurrency } from "utils/formatter";

interface SummaryItemProps {
  title: string;
  amount: number;
  icon: As<any>;
  variant?: "gray" | "green";
}

const variants = {
  gray: "#323238",
  green: "#00b37e",
} as const;

function SummaryItem({ title, amount, icon: Icon, variant = "gray" }: SummaryItemProps) {
  return (
    <Flex
      flex="1"
      backgroundColor={variants[variant]}
      flexDirection="column"
      borderRadius="6px"
      padding="2rem"
      gap="1rem"
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontSize="sm" color="gray.300">
          {title}
        </Text>
        <CharkaIcon as={Icon} fontSize="1.75rem" />
      </Flex>
      <Text fontWeight="bold" fontSize="5xl">
        {formatCurrency.format(amount)}
      </Text>
    </Flex>
  );
}

export { SummaryItem };
