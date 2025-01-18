import { categoryName } from "../utils/SubCategoryContent";

export type StatusType = "inProgress" | "pending" | "rejected" | "completed";

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
