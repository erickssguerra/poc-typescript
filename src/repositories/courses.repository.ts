import connectionDB from "../database/connectionDB.js";
import { Rank } from "../protocols/rank.js";

async function getFullRank() {
  const { rows } = await connectionDB.query(`
  SELECT 
    courses.name AS course,
    COALESCE(COUNT(enrollments.customer_id),0) AS customers
  FROM courses
  LEFT JOIN enrollments ON enrollments.course_id = courses.id
  GROUP BY courses.name
  ORDER BY customers DESC;  
    ;`);
  const rank: Rank[] = rows;
  return rank;
}
async function getRankByTop(top: number) {
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
  const rank: Rank[] = rows;
  return rank;
}

export const coursesRepository = {
  getFullRank,
  getRankByTop,
};
