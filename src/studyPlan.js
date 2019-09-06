import plan from './htmlParser/plan';

export const bySemester = [1, 2, 3, 4, 5, 6, 7, 8]
    .map((i) => plan
        .filter((c) => c.semester === i));

export const requiredCourses = plan
    .filter((c) => c.required);

export const pointsSum = (codes) => plan
    .filter((c) => codes.includes(c.code))
    .map((c) => c.points)
    .reduce((a, b) => a + b, 0);

export const toModuleCode = (courseCode) => `М.${courseCode.match(/(\d+\.\d+)\.\d+/)[1]}`;

export default plan;
