import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import { Video } from "lucide-react";
import CourseLessonList from "./CourseLessonList";

const CourseModuleList = ({module}) => {
    return (
        <AccordionItem className="border-none" value="item-1">
            <AccordionTrigger>{module?.title}</AccordionTrigger>
            <AccordionContent>
                {/* header */}
                <div className="flex gap-x-5 items-center flex-wrap mt-4 mb-6 text-gray-600 text-sm">
                    <span className="flex items-center gap-1.5">
                        <Video className="w-4 h-4" />
                        {(module?.duration/60).toPrecision(2)} Hours
                    </span>
                </div>
                {/* header ends */}

                <div className="space-y-3">
                    {
                        module?.lessonIds && module?.lessonIds.map(lessonId => (
                            <CourseLessonList key={lessonId} lessonId={lessonId} />
                        ))
                    }

                </div>
            </AccordionContent>
        </AccordionItem>
    );
};

export default CourseModuleList;