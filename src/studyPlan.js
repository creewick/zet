import plan from './htmlParser/plan';

export const bySemester = (i) => plan
    .filter((c) => c.semesters.includes(i));

export const requiredCourses = plan
    .filter((c) => c.required);

export const toModuleCode = (courseCode) => `М.${courseCode.match(/(\d+\.\d+)\.\d+/)[1]}`;

export const byModuleCode = (code) => plan
    .modules
    .filter((m) => m.code === code)
    .courses;

export default plan;
