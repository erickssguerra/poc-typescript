import connectionDB from "../database/connectionDB.js";
import { CoursesRank } from "../protocols/courses-rank.js";

async function getFullRank() : Promise<CoursesRank[]> {
  const { rows } = await connectionDB.query(`
  SELECT 
    courses.name AS course,
    COALESCE(COUNT(enrollments.customer_id),0) AS customers
  FROM courses
  LEFT JOIN enrollments ON enrollments.course_id = courses.id
  GROUP BY courses.name
  ORDER BY customers DESC;  
    ;`);
  const rank: CoursesRank[] = rows;
  return rank;
}
async function getRankByTop(top: number) : Promise<CoursesRank[]> {
  const { rows } = await connectionDB.query(
    `
  SELECT 
    courses.name AS course,
    COALESCE(COUNT(enrollments.customer_id),0) AS customers
  FROM courses
  LEFT JOIN enrollments ON enrollments.course_id = courses.id
  GROUP BY courses.name
  ORDER BY customers DESC
  LIMIT $1;  
  ;`,
    [top]
  );
  const rank: CoursesRank[] = rows;
  return rank;
}

async function filterByCustomer(customer_id: number): Promise<string[]> {
  const { rows } = await connectionDB.query(
    `
  SELECT 
    ARRAY_AGG( courses.name) AS courses
  FROM enrollments
  LEFT JOIN courses ON enrollments.course_id = courses.id
  WHERE enrollments.customer_id = $1;  
;`,
    [customer_id]
  );
  const courses: string[] = rows[0].courses;
  if (!courses) {
    throw { detail: `Customer is not enrolled to any course` };
  }
  return courses;
}

export const coursesRepository = {
  getFullRank,
  getRankByTop,
  filterByCustomer,
};
