import { Model, Types } from "mongoose";
import { ICategory } from "./category-interface";
import { IUser } from "./user-interface";
import { ITestimonial } from "./tesimonial-interface";
import { IModule } from "./module-interface";

// Define the interface for the Course document
export interface ICourse {
  _id: Types.ObjectId; // Unique identifier for the course
  title: string;
  subtitle: string;
  learning: string[];
  description: string;
  thumbnail: string;
  modules: IModule[]; // Reference to Module model
  price: number;
  active: boolean;
  category: ICategory; // Reference to Category model
  instructor: IUser; // Reference to User model
  quizzes?: Types.ObjectId; // Optional, reference to Quiz model
  testimonials: ITestimonial[]; // Array of references to Testimonial model
}

export type CourseModel = Model<ICourse, Record<string, unknown>>;
