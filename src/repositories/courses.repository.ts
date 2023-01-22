import connectionDB from "../database/connectionDB.js";
import { Rank } from "../protocols/rank.js";

async function getRank() {
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
async function getRankByTop(params) {}

export const coursesRepository = {
  getRank,
  getRankByTop,
};
