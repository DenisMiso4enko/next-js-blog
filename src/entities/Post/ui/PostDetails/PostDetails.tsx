import styles from "./postdetails.module.css";
import { IPost } from "@/src/entities/Post/model/types/post";

interface PostDetailsProps {
  data: IPost;
}

// TODO: Сделать верстку страницы с польной инфомацией о посте

export const PostDetails = ({ data }: PostDetailsProps) => {
  return <div></div>;
};
