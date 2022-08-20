import { TransactionsContext } from "@contexts/TransactionsContext";
import { useMemo } from "react";
import { useContextSelector } from "use-context-selector";

function useSummary() {
  const transactions = useContextSelector(TransactionsContext, (context) => context.transactions);

  const summary = useMemo(
    () =>
      transactions.reduce(
        (acc, transaction) => {
          if (transaction.type === "income") {
            acc.income += transaction.amount;
            acc.total += transaction.amount;
          } else {
            acc.outcome += transaction.amount;
            acc.total -= transaction.amount;
          }

          return acc;
        },
        {
          income: 0,
          outcome: 0,
          total: 0,
        },
      ),
    [],
  );

  return summary;
}

export { useSummary };
