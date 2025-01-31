import mongoose from "mongoose";

const postSchema = new  Schema(
    {
        title: String,
        img: String,
        content: String,
    },
    {
        timestamps: true,
    }
)

//ตรวจสอบว่ามีโมเดล Post อยู่แล้วหรือไม่ ถ้าไม่มีให้สร้างโมเดลใหม่

const  Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;