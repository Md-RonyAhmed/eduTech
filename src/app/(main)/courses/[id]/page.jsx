import CourseDetailsIntro from "./_components/CourseDetailsIntro";
import { getCourseDetails } from "@/controller/course-controller";
import Testimonials from "./_components/Testimonials";
import RelatedCourses from "./_components/RelatedCourses";
import CourseDetails from "./_components/CourseDetails";

const SingleCoursePage = async ({ params }) => {
  const { id } = await params;
  const course = await getCourseDetails(id);
  return (
    <div className="container mx-auto">
      <CourseDetailsIntro course={course} />

      <CourseDetails course={course} />

      {/* Testimonials */}
      {course?.testimonials.length > 0 && (
        <Testimonials testimonials={course?.testimonials} />
      )}
      {/* Releated Course */}
      <RelatedCourses />
    </div>
  );
};
export default SingleCoursePage;
