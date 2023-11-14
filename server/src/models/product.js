import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        img: {
            type: String,
        },
        price: {
            type: Number,
        },
        cartId: {
            type: mongoose.Types.ObjectId,
            ref: "Cart",
        },

    },
    { timestamps: true, versionKey: false }

);


export default mongoose.model("Product", productSchema);