import { Model, Types } from "mongoose";

// Interface for the Testimonial document
export interface ITestimonial{
  content: string;
  user: Types.ObjectId; // Reference to User model
  courseId: Types.ObjectId; // Reference to Course model
  rating: number;
}

export type TestimonialModel = Model<ITestimonial, Record<string, unknown>>;