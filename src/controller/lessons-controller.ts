import { Lesson } from "@/model/lessons-model";

export async function getLesson(lessonId:string) {
    const lesson = await Lesson.findById(lessonId);
    return lesson;
}