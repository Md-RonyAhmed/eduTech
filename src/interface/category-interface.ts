import {Model} from "mongoose";

// Interface for the Category document
export interface ICategory {
  _id?: string; // Mongoose adds an _id field by default
  title: string;
  description?: string; // Optional field
  thumbnail: string;
}

export type CategoryModel = Model<ICategory, Record<string, unknown>>;

