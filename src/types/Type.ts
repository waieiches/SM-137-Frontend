export type StatusType = "inProgress" | "pending" | "rejected" | "completed";

export interface DataType {
  id: number;
  title: string;
  status: StatusType;
  category: string[];
  content: string;
  likes: number;
  bookmarks: number;
  date: string;
}

export interface CommentType {
  content: string;
  time: string;
  likes: number;
}

