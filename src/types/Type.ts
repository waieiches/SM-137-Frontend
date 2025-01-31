export type StatusTypeExample =
  | "inProgress"
  | "pending"
  | "rejected"
  | "completed";

export interface DataType {
  id: number;
  title: string;
  status: StatusType;
  hashtag: string[];
  content: string;
  likes: number;
  bookmarks: number;
  date: string;
  answer: string;
  category: string;
}
export interface CommentType {
  content: string;
  //백엔드 전달 데이터 타입에 따라 필요
  date: string;
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
