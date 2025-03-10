import { IModule, ModuleModel } from "@/interface/module-interface";
import mongoose, { Schema } from "mongoose";

const moduleSchema = new Schema<IModule>({
  title: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  status: {
    required: true,
    type: String,
  },
  slug: {
    required: true,
    type: String,
  },
  course: {
    required: true,
    type: Schema.ObjectId,
  },
  lessonIds: {
    required: true,
    type: [Schema.ObjectId],
  },
});

export const Module =
  mongoose.models.Module ?? mongoose.model<IModule,ModuleModel>("Module", moduleSchema);
