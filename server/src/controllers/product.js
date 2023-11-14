import dotenv from "dotenv";
import axios from "axios";
import joi from "joi"
import Product from "../models/product";
dotenv.config();
// validate
const productSchme = joi.object({
    name: joi.string().required(),
    price: joi.number().required(),
    description: joi.string(),
})

export const getAll = async (req, res) => {
    try {
        const product = await Product.find();
        if (product.length === 0) {
            return res.status(404).json({
                massage: "khong co san pham nao"
            })
        }
        return res.json({
            message: "hien thi thanh cong",
            product,
        })
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
}


export const getId = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({
                massage: "khong co san pham nao"
            })
        }
        return res.json({
            message: "hien thi id thanh cong",
            product,
        })
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
}


export const postProduct = async (req, res) => {
    try {
        //validate
        // const { error } = productSchme.validate(req.body);
        // if (error) {
        //     return res.status(404).json({
        //         message: error.details[0].message,
        //     })
        // }
        // const { data: product } = await axios.post(
        //     `${process.env.API_URL}/products`, req.body
        // )
        const product = await Product.create(req.body)
        if (!product) {
            return res.status(404).json({
                massage: "khong co san pham nao"
            })
        }
        return res.json({
            message: "them thanh cong",
            product,
        })
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
}

export const putProduct = async (req, res) => {
    try {
        const product = await Product.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
        });
        if (!product) {
            return res.status(404).json({
                message: "khong co san pham"
            })
        }
        return res.json({
            message: "sua thanh cong",
            product,
        })
    } catch (error) {
        return res.status(404).json({
            message: error
        })
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        res.json({
            message: "xoá thanh cong",
            product,
        })
    } catch (error) {
        return res.status(404).json({
            message: error
        })
    }
}