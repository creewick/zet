const parser = require('node-html-parser');
const fs = require('fs');

const isModulesHeader = (line) => line
    .querySelector('.c1')
    .rawText
    .includes('модули');

const isRequired = (line) => {
    const name = line.querySelector('i').rawText;

    if (name.includes('Контроль')) return null;
    return !name.includes('По выбору');
};

const getCourse = (line, required) => {
    const cells = line.querySelectorAll('td');

    if (cells.length < 4) return null;

    const name = cells[0].rawText
        .match(/(\d+\.\d+)\.\d+ (.*)/);

    const points = parseInt(cells[1].rawText, 10);

    const types = cells[2].rawText
        .split(', ');

    const semesters = cells[3].rawText
        .split(', ')
        .map((x) => parseInt(x, 10));

    return {
        moduleCode: name[1],
        name: name[2],
        points,
        types,
        semesters,
        required,
    };
};

function parseHtml(str) {
    const lines = parser
        .parse(str)
        .querySelector('.edication-plan')
        .querySelectorAll('tr');

    const courses = [];
    let required = null;

    for (const line of lines) {
        const type = line.classNames[0];

        if (type === 'tr-header' && !isModulesHeader(line)) break;
        if (type === 'tr-third-header') required = isRequired(line);
        if (!type && required != null) courses.push(getCourse(line, required));
    }

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
