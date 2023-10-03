import mongoose, { Schema, model } from "mongoose";

const schema = new Schema(
  {
    userId: String,
    // userId: { type: Schema.Types.ObjectId }, // если работать с user из БД
    userName: String,
    title: { type: String, require: true },
    description: String,
    text: String,
    image: String,
    userAvatar: String,
    // likes: [{ type: Schema.Types.ObjectId, ref: "User" }],  // если работать с likes из БД
    // dislikes: [{ type: String, ref: "User" }],
    views: { type: Number, default: 0 },
    tags: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

// export const PostModel = model("Post", schema);
export default mongoose.models.Post || mongoose.model("Post", schema);
