import slugify from "slugify";
import categoryModel from "../models/categoryModel.js";
export const createCategoryController = async(req,res) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(401).send({ message:"Name is Required"})
        }
        const existingCategory = await categoryModel.findOne({ name: name });
        if (existingCategory) {
            return res.status(200).send({
                message: "Category already exists"
            })
        }
        const category = await new categoryModel({ name, slug: slugify(name) }).save();
        res.status(201).send({
            success: true,
            message: "New Category Created",
            category
    })
        
    } catch (err) {
        console.log(err);
        res.status(500).send({
            success: false,
            err,
            message:"Error in Category"
        })
    }
}