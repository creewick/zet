const isModulesHeader = (tr) => tr
    .getElementsByClassName('c1')[0]
    .innerText
    .includes('модули');

const getModule = (tr) => {
    const cells = tr.getElementsByTagName('td');
    const name = cells[0].innerText.match(/(М\.\d+\.\d+) (.*)/);
    const points = parseInt(cells[1].innerText, 10);

    return {
        code: name[1],
        name: name[2],
        points,
        courses: {
            required: [],
            additional: [],
        },
    };
};

const getType = (tr) => {
    const name = tr.getElementsByTagName('i')[0].innerText;

    if (name.includes('Контроль')) return null;
    return name.includes('По выбору')
        ? 'additional'
        : 'required';
};

const getCourse = (tr) => {
    const cells = tr.getElementsByTagName('td');
    if (cells.length < 4) return null;

    const name = cells[0].innerText.match(/(\d+\.\d+\.\d+) (.*)/);
    const points = parseInt(cells[1].innerText, 10);
    const types = cells[2].innerText.split(', ');
    const semesters = cells[3].innerText.split(', ').map((x) => parseInt(x, 10));

    return {
        code: name[1],
        name: name[2],
        points,
        types,
        semesters,
    };
};

function getStudyPlan(htmlAsString) {
    const html = document.createElement('html');
    html.innerHTML = htmlAsString;

    const table = html.getElementsByClassName('edication-plan')[0];
    const lines = table.getElementsByTagName('tr');

    const result = { modules: [] };
    let curModule = null;
    let curType = null;

    for (const tr of lines) {
        const type = tr.className;

        if (type === 'tr-header' && !isModulesHeader(tr)) break;
        if (type === 'tr-second-header') {
            curModule = getModule(tr);
            result.modules.push(curModule);
        }
        if (type === 'tr-third-header') {
            curType = getType(tr);
        }
        if (type === '') {
            const course = getCourse(tr);
            if (curModule && curType && course) {
                curModule.courses[curType].push(course);
            }
        }
    }

    return result;
};
