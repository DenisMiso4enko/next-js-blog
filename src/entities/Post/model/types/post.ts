export interface IPost {
  userId: string;
  userName: string;
  title: string;
  description: string;
  text: string;
  image: string;
  views?: number;
  tags: string[];
  _id?: string;
  createdAt?: string;
  updatedAt?: string;
}
