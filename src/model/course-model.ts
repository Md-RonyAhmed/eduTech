import { CourseModel, ICourse } from "@/interface/course-interface";
import mongoose, { Schema } from "mongoose";

const courseSchema = new Schema<ICourse>({
  title: {
    required: true,
    type: String,
  },
  subtitle: {
    required: true,
    type: String
  },
  description: {
    required: true,
    type: String,
  },
  thumbnail: {
    required: true,
    type: String,
  },
  learning: {
    required: true,
    type: [String]
  },
  modules: [{ required: true, type: Schema.ObjectId, ref: "Module" }],
  price: {
    required: true,
    type: Number,
  },
  active: {
    required: true,
    type: Boolean,
  },

  category: {
    required: true,
    type: Schema.ObjectId,
    ref: "Category",
  },

  instructor: {
    required: true,
    type: Schema.ObjectId,
    ref: "User",
  },

  quizzes: {
    required: false,
    type: Schema.ObjectId,
  },
  testimonials: [
    {
      required: true,
      type: Schema.ObjectId,
      ref: "Testimonial",
    },
  ],
});

export const Course =
  mongoose.models.Course ??
  mongoose.model<ICourse, CourseModel>("Course", courseSchema);
