import { CategoryModel, ICategory } from "@/interface/category-interface";
import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema<ICategory>({
  title: {
    required: true,

    type: String,
  },

  description: {
    required: false,

    type: String,
  },

  thumbnail: {
    required: true,

    type: String,
  },
});

export const Category =
  mongoose.models.Category ??
  mongoose.model<ICategory, CategoryModel>("Category", categorySchema);
