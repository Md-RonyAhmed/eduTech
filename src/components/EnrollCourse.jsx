"use client";
import { createCheckoutSession } from "@/app/actions/stripe";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export const EnrollCourse = ({ asLink, course }) => {
  const formAction = async(formData) => {
    const {url} = await createCheckoutSession(formData);
    window.location.assign(url)
}

  return (
    <>
      <form action={formAction}>
        <input type="hidden" name="courseId" value={course?._id} />
        <input type="hidden" name="courseName" value={course?.title} />
        <input type="hidden" name="coursePrice" value={course?.price} />
        {asLink ? (
          <Button
            type="submit"
            variant="ghost"
            className="text-xs text-sky-700 h-7 gap-1 cursor-pointer"
          >
            Enroll
            <ArrowRight className="w-3" />
          </Button>
        ) : (
          <Button
            type="submit"
            className={cn(buttonVariants({ size: "lg" }), "cursor-pointer")}
          >
            Enroll Now
          </Button>
        )}
      </form>
    </>
  );
};
