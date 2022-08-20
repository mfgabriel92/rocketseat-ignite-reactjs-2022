import { Flex } from "@chakra-ui/react";
import { useSummary } from "@hooks/useSummary";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryItem } from "./SummaryItem";

function Summary() {
  const { income, outcome, total } = useSummary();

  return (
    <Flex justifyContent="space-between" marginTop="-5rem" gap="2rem">
      <SummaryItem title="Income" icon={ArrowCircleUp} amount={income} />
      <SummaryItem title="Outcome" icon={ArrowCircleDown} amount={outcome} />
      <SummaryItem title="Total" icon={CurrencyDollar} variant="green" amount={total} />
    </Flex>
  );
}

export { Summary };
