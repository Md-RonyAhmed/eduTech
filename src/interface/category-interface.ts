import {Model} from "mongoose";

// Interface for the Category document
export interface ICategory {
  title: string;
  description?: string; // Optional field
  thumbnail: string;
}

export type CategoryModel = Model<ICategory, Record<string, unknown>>;

