<<<<<<< HEAD
import { categoryName } from "../utils/SubCategoryContent";

=======
>>>>>>> d05d38b4a17dfdf0679ccea6af385315fbc1447a
export type StatusTypeExample =
  | "inProgress"
  | "pending"
  | "rejected"
<<<<<<< HEAD
  | "completed"
  | undefined;
=======
  | "completed";
>>>>>>> d05d38b4a17dfdf0679ccea6af385315fbc1447a

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

<<<<<<< HEAD
export interface MyPageProps {
  state: string;
  name: string;
  sid: number;
  major: string;
  email: string;
}

export interface AlarmDataProps {
  type: "info" | "message";
  title: string;
  content: string;
}

export interface SortStandardProps {
  type: "latest" | "scrap" | "likes";
}
export type SortType = "latest" | "scrap" | "likes";

export type CategoryValue =
  | (typeof categoryName)[keyof typeof categoryName][number]
  | undefined;

//백엔드 연도
export interface ApplyContentProps {
  title: string;
  contentProb: string;
  contentDir: string;
  contentExpect: string;
  categoryName: string;
  tagName: string;
  attachments: File | null;
}

export interface ContentType {
  complaintId: number;
  tag: string;
  category: string;
  complaintStatus: StatusType;
  complaintTitle: string;
  contentProb: string;
  likeCount: number;
  scrapCount: number;
  date: Date;
}

export type StatusType = "WAITING" | "IN_PROGRESS" | "RETURN" | "DONE";

export interface MyPageProps {
  state: string;
  name: string;
  sid: number;
  major: string;
  email: string;
}
=======
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
>>>>>>> d05d38b4a17dfdf0679ccea6af385315fbc1447a
