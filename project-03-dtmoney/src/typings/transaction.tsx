export interface Transaction {
  id: number;
  type: "income" | "outcome";
  description: string;
  category: string;
  amount: number;
  createdAt: string;
}
