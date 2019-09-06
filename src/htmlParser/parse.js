const parser = require('node-html-parser');
const fs = require('fs');

const toInt = (str) => parseInt(str, 10) || 0;

const isBadHeader = (line) => line
    .querySelector('.c1')
    .rawText
    .includes('Факультативы');

const getCourseType = (line) => line
    .querySelector('i')
    .rawText;

const isRequired = (line) => {
    const type = getCourseType(line);
    // В таблице по типу "Контроль (...)" стоят экзамены без указания баллов
    // Поэтому, их не учитываем
    if (type.includes('Контроль')) return null;
    return !type.includes('По выбору');
};

const regex = new RegExp(/((\d+\.\d+)\.\d+) (.*)/);

function getCourses(line, required) {
    const cells = line
        .querySelectorAll('td')
        .map((x) => x.rawText);

    if (cells.length < 4) return null;

    const name = cells[0].match(regex);
    const semesters = cells[3]
        .split(',')
        .map(toInt);
    const points = toInt(cells[1]) / semesters.length;

    return semesters
        .map((semester) => ({
            mod: name[2],
            code: `${name[1]}.${semester}`,
            name: name[3],
            points,
            semester,
            required,
        }));
}

function parseHtml(str) {
    let courses = [];
    let required = null;
    const tableLines = parser
        .parse(str)
        .querySelector('.edication-plan') // да, это опечатка на сайте УРФУ
        .querySelectorAll('tr');

    tableLines.every((line) => {
        const type = line.classNames[0];

        if (type === 'tr-header' && isBadHeader(line)) return false;
        if (type === 'tr-third-header') required = isRequired(line);
        if (!type && required !== null) courses = [...courses, ...getCourses(line, required)];
        return true;
    });

    return courses;
}

function writeToFile(error, data) {
    const json = parseHtml(data);
    const str = JSON.stringify(json);
    fs.writeFile('plan.json', str, () => {});
}

function parseFromFile(filename) {
    fs.readFile(filename, 'utf8', writeToFile);
}

parseFromFile(process.argv[2]);
