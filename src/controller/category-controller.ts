import { ICategory } from "@/interface/category-interface";
import { Category } from "@/model/category-model";

export async function getCategories(): Promise<ICategory[]> {
  const categories = await Category.find({});
  return categories;
}
