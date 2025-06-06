import { IUser, UserModel } from "@/interface/user-interface";
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema<IUser>({
  firstName: {
    required: true,
    type: String,
  },
  lastName: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  phone: {
    required: false,
    type: String,
  },
  role: {
    required: true,
    type: String,
  },
  bio: {
    required: false,
    type: String,
  },
  socialMedia: {
    required: false,
    type: Object,
  },
  profilePicture: {
    required: false,
    type: String,
  },
});

export const User =
  mongoose.models.User ?? mongoose.model<IUser, UserModel>("User", userSchema);
