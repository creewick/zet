import plan from './htmlParser/planJson';

const flagCourses = (courses, isRequired) => courses.map((c) => ({ ...c, isRequired }));

const joinRequiredAdditional = (({ courses }) => flagCourses(courses.required, true)
    .concat(flagCourses(courses.additional, false)));

const list = plan
    .modules
    .map(joinRequiredAdditional)
    .reduce((a, b) => a.concat(b));

export const bySemester = (i) => list
    .filter((c) => c.semesters.includes(i));

export const requiredCourses = list
    .filter((c) => c.isRequired);

export const toModuleCode = (courseCode) => `М.${courseCode.match(/(\d+\.\d+)\.\d+/)[1]}`;

export const byModuleCode = (code) => plan
    .modules
    .filter((m) => m.code === code)
    .courses;

export default plan;
