import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";
import { BookOpen } from "lucide-react";
import { formatPrice } from "@/lib/formatPrice";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { getCourses } from "@/controller/course-controller";


const RelatedCourses = async () => {
    const courses = await getCourses();
    return (
        <section className="">
            <div className="container">
                <SectionTitle className="mb-6">Related Courses</SectionTitle>
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="max-2xl:w-[90%] w-full mx-auto"
                >
                    <CarouselPrevious />
                    <CarouselNext />
                    <CarouselContent>
                        {courses.map((course) => (
                            <CarouselItem
                                key={course._id}
                                className="md:basis-1/2 lg:basis-1/3"
                            >
                                <Link href={`/courses/${course._id}`}>
                                    <div className="group hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full">
                                        <div className="relative w-full aspect-video rounded-md overflow-hidden">
                                            <Image
                                                src={`/assets/images/courses/${course?.thumbnail}`}
                                                alt={"course"}
                                                className="object-cover"
                                                fill
                                            />
                                        </div>
                                        <div className="flex flex-col pt-2">
                                            <div className="text-lg md:text-base font-medium group-hover:text-sky-700 line-clamp-2">
                                                {course?.title}
                                            </div>
                                            <p className="text-xs text-muted-foreground">
                                                {course?.category.title}
                                            </p>
                                            <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
                                                <div className="flex items-center gap-x-1 text-slate-500">
                                                    <div>
                                                        <BookOpen className="w-4" />
                                                    </div>
                                                    <span>{course?.modules?.length} Chapters</span>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between mt-4">
                                                <p className="text-md md:text-sm font-medium text-slate-700">
                                                    {formatPrice(course?.price)}
                                                </p>

                                                <Button
                                                    variant="ghost"
                                                    className="text-xs text-sky-700 h-7 gap-1"
                                                >
                                                    Enroll
                                                    <ArrowRight className="w-3" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    );
};

export default RelatedCourses;