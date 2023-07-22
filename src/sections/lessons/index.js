import { lesson1Data } from "./lesson1";

export const lessons = [
  {
   ...lesson1Data
  },
]

export function pagination(lessonId, pageNumber=1, itemsPerPage=1) {
  const lesson = lessons.find((lesson) => lesson.id === lessonId);

  if (!lesson) {
    return null; // Lesson not found
  }

  const start = (pageNumber - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  const sectionPerPage = lesson.sections.slice(start, end);

  const totalSections = lesson.sections.length
  const totalPages = Math.ceil(totalSections / itemsPerPage);
  const isNext = pageNumber < totalPages;

  const isPrevious = (pageNumber > 1) && (pageNumber <= totalPages)

  const nextUrl = isNext ? pageNumber + 1 : totalPages;
  const previousUrl = isPrevious ? pageNumber - 1 : 1;
  return {
    pageNumber,
    totalSections: lesson.sections.length,
    section: sectionPerPage[0],
    isNext,
    isPrevious,
    nextUrl,
    previousUrl,
  };
}

