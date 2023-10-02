import {CreatePost} from "@/src/entities/Post";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Create New Post",
    description: "Create New Post",
};

const Create = () => {
    return (
        <CreatePost/>
    );
};

export default Create;
