import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
    },
    { timestamps: true, versionKey: false }
);

export default mongoose.model("Category", categorySchema);
