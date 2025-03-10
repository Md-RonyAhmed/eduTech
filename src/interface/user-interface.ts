import { Model } from "mongoose";

// Interface for the User document
export interface IUser{
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  phone: string;
  role: string;
  bio?: string; // Optional field
  socialMedia?: object; // Optional field (social media links)
  profilePicture?: string; // Optional field
}

export type UserModel = Model<IUser, Record<string, unknown>>;