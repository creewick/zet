const parser = require('node-html-parser');
const fs = require('fs');

const isModulesHeader = (line) => line
    .querySelector('.c1')
    .rawText
    .includes('модули');

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

function getCourse(line, required) {
    const cells = line
        .querySelectorAll('td')
        .map((x) => x.rawText);

    if (cells.length < 4) return null;

    const name = cells[0].match(regex);
    const points = parseInt(cells[1], 10);
    const types = cells[2].split(',');
    const semesters = cells[3]
        .split(',')
        .map((x) => parseInt(x, 10));

    return {
        mod: name[2],
        code: name[1],
        name: name[3],
        points,
        types,
        semesters,
        required,
    };
}

function parseHtml(str) {
    const courses = [];
    let required = null;
    const tableLines = parser
        .parse(str)
        .querySelector('.edication-plan') // да, это опечатка на сайте УРФУ
        .querySelectorAll('tr');

    tableLines.every((line) => {
        const type = line.classNames[0];

        if (type === 'tr-header' && !isModulesHeader(line)) return false;
        if (type === 'tr-third-header') required = isRequired(line);
        if (!type && required !== null) courses.push(getCourse(line, required));
        return true;
    });

    return courses;
}

function writeToFile(error, data) {
    const json = parseHtml(data);
    const str = `export default ${JSON.stringify(json)}`;
    fs.writeFile('plan.js', str, () => {});
}

function parseFromFile(filename) {
    fs.readFile(filename, 'utf8', writeToFile);
}

parseFromFile(process.argv[2]);
