import { categoryName } from "../utils/SubCategoryContent";

export type StatusType =
  | "inProgress"
  | "pending"
  | "rejected"
  | "completed"
  | undefined;

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

