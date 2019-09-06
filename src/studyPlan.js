import plan from './htmlParser/plan.json';
import config from './config';

export const bySemester = [1, 2, 3, 4, 5, 6, 7, 8]
    .map((i) => plan
        .filter((c) => c.semester === i));

export const requiredCourses = plan
    .filter((c) => c.required);

export const sumOf = (codes) => plan
    .filter((c) => codes.includes(c.code))
    .map((c) => c.points)
    .reduce((a, b) => a + b, 0);

export const sumReqOf = (codes) => plan
    .filter((c) => codes.includes(c.code) && c.required)
    .map((c) => c.points)
    .reduce((a, b) => a + b, 0);

export const percOf = (codes) => sumOf(codes) / config.maxPoints * 100;

export const percReqOf = (codes) => sumReqOf(codes) / config.maxPoints * 100;

export const percAddOf = (codes) => percOf(codes) - percReqOf(codes);

export const toModuleCode = (courseCode) => `М.${courseCode.match(/(\d+\.\d+)\.\d+/)[1]}`;

export default plan;
