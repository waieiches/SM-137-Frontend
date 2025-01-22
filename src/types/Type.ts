export type StatusTypeExample =
  | "inProgress"
  | "pending"
  | "rejected"
  | "completed";

export interface DataType {
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

//백엔드 연동
export interface ContentType {
  complaintId: number;
  category: string;
  complaintStatus: StatusType;
  complaintTitle: string;
  createdAt: Date | null;
  likeCount: number;
}

export type StatusType = "WAITING" | "IN_PROGRESS" | "RETURN" | "DONE";
