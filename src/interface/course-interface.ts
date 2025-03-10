import { Model, Types } from "mongoose";

// Define the interface for the Course document
export interface ICourse {
  title: string;
  description: string;
  thumbnail: string;
  modules: Types.ObjectId[]; // Reference to Module model
  price: number;
  active: boolean;
  category: Types.ObjectId; // Reference to Category model
  instructor: Types.ObjectId; // Reference to User model
  quizzes?: Types.ObjectId; // Optional, reference to Quiz model
  testimonials: Types.ObjectId[]; // Array of references to Testimonial model
}

export type CourseModel = Model<ICourse, Record<string, unknown>>;
