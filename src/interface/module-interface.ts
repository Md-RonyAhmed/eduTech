import { Model,Types } from "mongoose";

// Interface for the Module document
export interface IModule {
  title: string;
  description: string;
  status: string;
  slug: string;
  course: Types.ObjectId; // Reference to the Course model
  lessonIds: Types.ObjectId[]; // Array of references to Lesson models
}

export type ModuleModel = Model<IModule, Record<string, unknown>>;