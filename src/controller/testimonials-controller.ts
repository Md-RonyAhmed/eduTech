import { Testimonial } from "@/model/testimonial-model";

export async function getTestimonialsForCourse(courseId: string) {
  const testimonials = await Testimonial.find({ courseId });
  return testimonials;
}