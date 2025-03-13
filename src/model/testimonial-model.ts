import {
  ITestimonial,
  TestimonialModel,
} from "@/interface/tesimonial-interface";
import mongoose, { Schema } from "mongoose";

const testimonialSchema = new Schema<ITestimonial>({
  content: {
    required: true,
    type: String,
  },
  user:  {
    required: true,
    type: Schema.ObjectId,
    ref: "User",
  },
  courseId: {
    required: true,
    type: Schema.ObjectId,
  },
  rating: {
    required: true,
    type: Number,
  },
});

export const Testimonial =
  mongoose.models.Testimonial ??
  mongoose.model<ITestimonial, TestimonialModel>(
    "Testimonial",
    testimonialSchema
  );
