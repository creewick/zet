const parser = require('node-html-parser');
const fs = require('fs');

const isModulesHeader = (line) => line
    .querySelector('.c1')
    .rawText
    .includes('модули');

const getModule = (line) => {
    const cells = line.querySelectorAll('td');
    const name = cells[0].rawText
        .match(/(М\.\d+\.\d+) (.*)/);

    return {
        code: name[1],
        name: name[2],
        points: parseInt(cells[1].rawText, 10),
        courses: {
            required: [],
            additional: [],
        },
    };
};

const getType = (line) => {
    const name = line.querySelector('i').rawText;

    if (name.includes('Контроль')) return null;
    return name.includes('По выбору')
        ? 'additional'
        : 'required';
};

const getCourse = (line) => {
    const cells = line.querySelectorAll('td');
    if (cells.length < 4) return null;

    const name = cells[0].rawText.match(/(\d+\.\d+\.\d+) (.*)/);\

    return {
        code: name[1],
        name: name[2],
        points: parseInt(cells[1].rawText, 10),
        types: cells[2].rawText.split(', '),
        semesters: cells[3].rawText.split(', ').map((x) => parseInt(x, 10)),
    };
};

function parseHtml(data) {
    const lines = parser
        .parse(data)
        .querySelector('.edication-plan')
        .querySelectorAll('tr');

    const result = { modules: [] };
    const status = { mod: null, type: null };

    for (const line of lines) {
        const type = line.classNames[0];

        if (type === 'tr-header' && !isModulesHeader(line)) break;
        if (type === 'tr-second-header') {
            status.mod = getModule(line);
            result.modules.push(status.mod);
        }
        if (type === 'tr-third-header') {
            status.type = getType(line);
        }
        if (!type) {
            const course = getCourse(line);
            if (status.mod && status.type && course) {
                status.mod.courses[status.type].push(course);
            }
        }
    }

    return result;
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
