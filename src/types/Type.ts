export type StatusType = "inProgress" | "pending" | "rejected" | "completed";

export interface DataType {
  title: string;
  status: StatusType;
  category: string[];
  content: string;
}
