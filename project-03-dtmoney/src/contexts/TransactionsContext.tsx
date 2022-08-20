import { api } from "@services/api";
import { Transaction } from "@typings/transaction";
import { ReactElement, useCallback, useEffect, useState } from "react";
import { createContext } from "use-context-selector";

interface CreateTransactionProps {
  type: "income" | "outcome";
  description: string;
  amount: number;
  category: string;
}

interface TransactionsContextProps {
  transactions: Transaction[];
  fetchTransactions: (q?: string) => void;
  createTransaction: (data: CreateTransactionProps) => void;
}

const TransactionsContext = createContext({} as TransactionsContextProps);

function TransactionsProvider({ children }: { children: ReactElement }) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = useCallback(async (q?: string) => {
    const { data } = await api.get("/transactions", {
      params: {
        _sort: "createdAt",
        _order: "desc",
        q,
      },
    });

    setTransactions(data);
  }, []);

  const createTransaction = useCallback(async (transaction: CreateTransactionProps) => {
    const { data } = await api.post("/transactions", { ...transaction, createdAt: new Date() });
    setTransactions((state) => [data, ...state]);
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions, fetchTransactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export { TransactionsContext, TransactionsProvider };
