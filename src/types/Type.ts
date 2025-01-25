import { categoryName } from "../utils/SubCategoryContent";

export type StatusTypeExample = "inProgress" | "pending" | "rejected" | "completed";

export interface DataType {
  hashtag: any;
  id: number;
  title: string;
  status: StatusType;
  category: string;
  content: string;
  likes: number;
  bookmarks: number;
  date: string;
  answer: string;
}

export interface CommentType {
  content: string;
  time: string;
  likes: number;
}
export interface SortStandardProps {
  type: "latest" | "scrap" | "likes";
}
export type SortType = "latest" | "scrap" | "likes";

export type CategoryValue =
  | (typeof categoryName)[keyof typeof categoryName][number]
  | undefined;

  //백엔드 연동
export interface ContentType {
  date: string | number | Date;
  complaintId: number;
  category: string;
  complaintStatus: StatusType;
  complaintTitle: string;
  createdAt: Date | null;
  likeCount: number;
}
export type StatusType = "WAITING" | "IN_PROGRESS" | "RETURN" | "DONE";