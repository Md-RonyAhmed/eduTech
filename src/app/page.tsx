import { Button } from "@/components/ui/button";
import { getCourses } from "@/controller/course-controller";


export default async function Home() {
  const courses = await getCourses();

  console.log(courses[0]?.instructor);
  console.log(courses[0]?.testimonials);
  console.log(courses[0]?.modules);
  return (
   <>
    <div className="font-inter text-3xl font-extrabold">
      <h1>Welcome to Next.js</h1>
      <p className="font-poppins font-bold">Get started by editing <code>pages/index.js</code>.</p>
      <Button variant={"outline"} className="hover:cursor-pointer bg-amber-200 hover:bg-amber-400 transition-all text-white">Click me</Button>
    </div>
   </>
  );
}
