import { lesson1Data } from "./lesson1";
import { lesson2Data } from "./lesson2";

export const lessonsPath = [
  [
    {
      challenge: "1",
    },
    {
      ...lesson1Data
     },
     {
       ...lesson2Data
     }
  ],
  [
    {
      challenge: "challenge1",
    },
    {
      ...lesson1Data
     },
     {
       ...lesson2Data
     }
  ],
]

export function pagination(lessonId, pageNumber=1, itemsPerPage=1) {
  const lesson = lessonsPath.map(lessonsGroup => 
    lessonsGroup.filter(lesson => lesson.id === lessonId)
  ).flat()[0]

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

