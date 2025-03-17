import { ICourse } from "@/interface/course-interface";
import { Category } from "@/model/category-model";
import { Course } from "@/model/course-model";
import { Module } from "@/model/module-model";
import { Testimonial } from "@/model/testimonial-model";
import { User } from "@/model/user-model";
import { getEnrollmentsForCourse } from "./enrollment-controller";
import { getTestimonialsForCourse } from "./testimonials-controller";

//get all courses from db
export async function getCourses(): Promise<ICourse[]> {
  const courses = await Course.find({})
    .populate({
      path: "category",
      model: Category,
    })
    .populate({
      path: "instructor",
      model: User,
    })
    .populate({
      path: "testimonials",
      model: Testimonial,
    })
    .populate({
      path: "modules",
      model: Module,
    });
  return courses;
}

// get course details from db
export async function getCourseDetails(id: string) {
  const course = await Course.findById(id)
    .populate({
      path: "category",
      model: Category,
    })
    .populate({
      path: "testimonials",
      model: Testimonial,
      populate: {
        path: "user",
        model: User,
      },
    })
    .populate({
      path: "instructor",
      model: User,
    })
    .populate({
      path: "modules",
      model: Module,
    });
  return course;
}

export async function getCourseDetailsByInstructor(instructorId: string) {
  const courses = await Course.find({ instructor: instructorId });

  const enrollments = await Promise.all(
    courses.map(async (course) => {
      const enrollment = await getEnrollmentsForCourse(course._id.toString());
      return enrollment;
    })
  );

  const totalEnrollments = enrollments.reduce((acc, curr) => {
    return acc + curr.length;
  }, 0);

  const testimonials = await Promise.all(
    courses.map(async (course) => {
      const testimonial = await getTestimonialsForCourse(course._id.toString());
      return testimonial;
    })
  );
 
  const totalTestimonials = testimonials.flat();

  const avgRating =
    totalTestimonials.reduce(function (acc, obj) {
      return acc + obj.rating;
    }, 0) / totalTestimonials.length;

  return {
    courses: courses.length,
    enrollments: totalEnrollments,
    reviews: totalTestimonials.length,
    ratings: avgRating.toPrecision(2),
  };
}

getCourseDetailsByInstructor('66504f85171d3fa703e7e043')
