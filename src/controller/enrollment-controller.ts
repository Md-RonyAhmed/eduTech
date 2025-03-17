import { Enrollment } from "@/model/enrollment-model";

export async function getEnrollmentsForCourse(courseId: string) {
  const enrollments = await Enrollment.find({ course: courseId });
  return enrollments;
}
