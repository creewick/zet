export default {
    modules: [{
        code: 'М.1.1',
        name: 'Основы профессиональной коммуникации',
        points: 14,
        courses: {
            required: [{
                code: '1.1.2',
                name: 'Иностранный язык',
                points: 12,
                types: ['Зачет', 'Экзамен'],
                semesters: [1, 2, 3, 4],
            }, {
                code: '1.1.3', name: 'Русский язык и культура речи', points: 2, types: ['Зачет'], semesters: [2],
            }],
            additional: [],
        },
    }, {
        code: 'М.1.2',
        name: 'Мировоззренческие аспекты профессиональной деятельности',
        points: 6,
        courses: {
            required: [{
                code: '1.2.2',
                name: 'История',
                points: 3,
                types: ['Зачет'],
                semesters: [1],
            }, {
                code: '1.2.3', name: 'Философия', points: 3, types: ['Зачет'], semesters: [2],
            }],
            additional: [],
        },
    }, {
        code: 'М.1.3',
        name: 'Экономико-правовые аспекты профессиональной деятельности',
        points: 6,
        courses: {
            required: [{
                code: '1.3.2',
                name: 'Правоведение',
                points: 3,
                types: ['Зачет'],
                semesters: [4],
            }, {
                code: '1.3.3', name: 'Экономическая теория', points: 3, types: ['Зачет'], semesters: [3],
            }],
            additional: [],
        },
    }, {
        code: 'М.1.4',
        name: 'Основания программирования',
        points: 19,
        courses: {
            required: [{
                code: '1.4.2',
                name: 'Объектно-ориентированное программирование',
                points: 7,
                types: ['Зачет', 'Экзамен'],
                semesters: [3, 4],
            }, {
                code: '1.4.3',
                name: 'Языки и технологии программирования',
                points: 12,
                types: ['Экзамен'],
                semesters: [1, 2],
            }],
            additional: [],
        },
    }, {
        code: 'М.1.5',
        name: 'Основания классической математики',
        points: 29,
        courses: {
            required: [{
                code: '1.5.2',
                name: 'Дифференциальные уравнения',
                points: 4,
                types: ['Зачет'],
                semesters: [4],
            }, {
                code: '1.5.3',
                name: 'Математический анализ',
                points: 12,
                types: ['Экзамен'],
                semesters: [1, 2],
            }, {
                code: '1.5.4',
                name: 'Теория вероятностей и математическая статистика',
                points: 7,
                types: ['Зачет', 'Экзамен'],
                semesters: [5, 6],
            }, {
                code: '1.5.5', name: 'Кратные интегралы и ряды', points: 6, types: ['Экзамен'], semesters: [3],
            }],
            additional: [],
        },
    }, {
        code: 'М.1.6',
        name: 'Основания компьютерных наук',
        points: 16,
        courses: {
            required: [{
                code: '1.6.2',
                name: 'Математическая логика',
                points: 4,
                types: ['Экзамен'],
                semesters: [4],
            }, {
                code: '1.6.3',
                name: 'Теория автоматов',
                points: 2,
                types: ['Зачет'],
                semesters: [4],
            }, {
                code: '1.6.4',
                name: 'Теория алгоритмов',
                points: 3,
                types: ['Зачет'],
                semesters: [5],
            }, {
                code: '1.6.5',
                name: 'Комбинаторные алгоритмы',
                points: 7,
                types: ['Зачет', 'Экзамен'],
                semesters: [4, 5],
            }],
            additional: [],
        },
    }, {
        code: 'М.1.7',
        name: 'Алгебра и дискретная математика',
        points: 18,
        courses: {
            required: [{
                code: '1.7.2',
                name: 'Алгебра и геометрия',
                points: 12,
                types: ['Экзамен'],
                semesters: [1, 2],
            }, {
                code: '1.7.3', name: 'Дискретная математика', points: 6, types: ['Экзамен'], semesters: [3],
            }],
            additional: [],
        },
    }, {
        code: 'М.1.8',
        name: 'Основания информационных технологий',
        points: 28,
        courses: {
            required: [{
                code: '1.8.2',
                name: 'Архитектура ЭВМ',
                points: 2,
                types: ['Зачет'],
                semesters: [3],
            }, {
                code: '1.8.3',
                name: 'Базы данных',
                points: 4,
                types: ['Экзамен'],
                semesters: [5],
            }, {
                code: '1.8.4',
                name: 'Компьютерные сети',
                points: 3,
                types: ['Экзамен'],
                semesters: [3],
            }, {
                code: '1.8.5',
                name: 'Операционные системы',
                points: 4,
                types: ['Экзамен'],
                semesters: [1],
            }, {
                code: '1.8.6',
                name: 'Протоколы Интернет',
                points: 4,
                types: ['Экзамен'],
                semesters: [4],
            }, {
                code: '1.8.7', name: 'Скрипты', points: 2, types: ['Зачет'], semesters: [1],
            }, {
                code: '1.8.8',
                name: 'Функциональное и логическое программирование',
                points: 3,
                types: ['Зачет'],
                semesters: [4],
            }, {
                code: '1.8.9', name: 'Языки сценариев', points: 6, types: ['Зачет', 'Экзамен'], semesters: [2, 3],
            }],
            additional: [],
        },
    }, {
        code: 'М.1.9',
        name: 'Естествознание',
        points: 6,
        courses: {
            required: [{
                code: '1.9.2',
                name: 'Физика',
                points: 6,
                types: ['Зачет', 'Экзамен'],
                semesters: [6, 7],
            }],
            additional: [],
        },
    }, {
        code: 'М.1.10',
        name: 'Безопасность и охрана здоровья',
        points: 2,
        courses: {
            required: [{
                code: '1.10.2',
                name: 'Безопасность жизнедеятельности',
                points: 2,
                types: ['Зачет'],
                semesters: [8],
            }],
            additional: [],
        },
    }, {
        code: 'М.1.11',
        name: 'Лингвистические основы информатики',
        points: 6,
        courses: {
            required: [],
            additional: [{
                code: '1.11.1',
                name: 'Лингвистические основы информатики',
                points: 6,
                types: ['Зачет', 'Экзамен'],
                semesters: [6, 7],
            }],
        },
    }, {
        code: 'М.1.12',
        name: 'Дополнительные главы дискретной математики',
        points: 4,
        courses: {
            required: [],
            additional: [{
                code: '1.12.2',
                name: 'Матроиды и графы',
                points: 4,
                types: ['Зачет'],
                semesters: [5, 6],
            }],
        },
    }, {
        code: 'М.1.13',
        name: 'Основания теории функций',
        points: 6,
        courses: {
            required: [],
            additional: [{
                code: '1.13.2',
                name: 'Теория функций комплексного переменного',
                points: 3,
                types: ['Зачет'],
                semesters: [6],
            }, {
                code: '1.13.3', name: 'Функциональный анализ', points: 3, types: ['Зачет'], semesters: [5],
            }],
        },
    }, {
        code: 'М.1.14',
        name: 'Комбинаторика и ее приложения',
        points: 6,
        courses: {
            required: [],
            additional: [{
                code: '1.14.2',
                name: 'Комбинаторика слов',
                points: 2,
                types: ['Экзамен'],
                semesters: [7],
            }, {
                code: '1.14.3',
                name: 'Комбинаторные методы сжатия данных',
                points: 2,
                types: ['Экзамен'],
                semesters: [8],
            }, {
                code: '1.14.4', name: 'Строковые алгоритмы', points: 2, types: ['Экзамен'], semesters: [6],
            }],
        },
    }, {
        code: 'М.1.15',
        name: 'Интеллектуальные системы',
        points: 3,
        courses: {
            required: [],
            additional: [{
                code: '1.15.1',
                name: 'Интеллектуальные системы',
                points: 3,
                types: ['Зачет'],
                semesters: [7],
            }],
        },
    }, {
        code: 'М.1.16',
        name: 'WEB и DHTML',
        points: 3,
        courses: {
            required: [],
            additional: [{
                code: '1.16.1', name: 'WEB и DHTML', points: 3, types: ['Зачет'], semesters: [5],
            }],
        },
    }, {
        code: 'М.1.17',
        name: 'Учебная проектная деятельность',
        points: 6,
        courses: {
            required: [],
            additional: [{
                code: '1.17.1',
                name: 'Учебный проект 1',
                points: 3,
                types: ['Экзамен'],
                semesters: [5],
            }, {
                code: '1.17.2', name: 'Учебный проект 2', points: 3, types: ['Экзамен'], semesters: [6],
            }],
        },
    }, {
        code: 'М.1.18',
        name: 'Производственная проектная деятельность',
        points: 6,
        courses: {
            required: [],
            additional: [{
                code: '1.18.1',
                name: 'Производственный проект 1',
                points: 3,
                types: ['Экзамен'],
                semesters: [7],
            }, {
                code: '1.18.2', name: 'Производственный проект 2', points: 3, types: ['Экзамен'], semesters: [8],
            }],
        },
    }, {
        code: 'М.1.19',
        name: 'Научное мышление',
        points: 3,
        courses: {
            required: [],
            additional: [{
                code: '1.19.1',
                name: 'Научное мышление',
                points: 3,
                types: ['Экзамен'],
                semesters: [5],
            }],
        },
    }, {
        code: 'М.1.20',
        name: 'Инжиниринг программного обеспечения',
        points: 6,
        courses: {
            required: [],
            additional: [{
                code: '1.20.1',
                name: 'Инжиниринг программного обеспечения',
                points: null,
                types: [''],
                semesters: [null],
            }, {
                code: '1.20.2',
                name: 'Проектирование пользовательских интерфейсов',
                points: 2,
                types: ['Зачет'],
                semesters: [6],
            }, {
                code: '1.20.3',
                name: 'Тестирование программного обеспечения',
                points: 2,
                types: ['Зачет'],
                semesters: [7],
            }, {
                code: '1.20.4', name: 'Менеджмент разработки', points: 2, types: ['Зачет'], semesters: [8],
            }],
        },
    }, {
        code: 'М.1.21',
        name: 'Основы спортивного программирования',
        points: 6,
        courses: {
            required: [],
            additional: [{
                code: '1.21.2',
                name: 'Практикум по спортивному программированию',
                points: 3,
                types: ['Зачет'],
                semesters: [6],
            }, {
                code: '1.21.3',
                name: 'Специализированные структуры данных и алгоритмы',
                points: 3,
                types: ['Зачет'],
                semesters: [5],
            }],
        },
    }, {
        code: 'М.1.22',
        name: 'Спортивное программирование',
        points: 6,
        courses: {
            required: [],
            additional: [{
                code: '1.22.2',
                name: 'Оптимизация алгоритмов и структур данных',
                points: 3,
                types: ['Зачет'],
                semesters: [7],
            }, {
                code: '1.22.3',
                name: 'Оптимизация программного кода',
                points: 3,
                types: ['Экзамен'],
                semesters: [8],
            }],
        },
    }, {
        code: 'М.1.23',
        name: 'Математика процессов и систем',
        points: 6,
        courses: {
            required: [],
            additional: [{
                code: '1.23.2',
                name: 'Методы оптимизации и исследование операций',
                points: 4,
                types: ['Экзамен'],
                semesters: [6],
            }, {
                code: '1.23.3', name: 'Распознавание образов', points: 2, types: ['Зачет'], semesters: [7],
            }],
        },
    }, {
        code: 'М.1.24',
        name: 'Разностные уравнения',
        points: 3,
        courses: {
            required: [],
            additional: [{
                code: '1.24.1',
                name: 'Разностные уравнения',
                points: 3,
                types: ['Зачет'],
                semesters: [5],
            }],
        },
    }, {
        code: 'М.1.25',
        name: 'Теория вычислительной сложности',
        points: 4,
        courses: {
            required: [],
            additional: [{
                code: '1.25.2',
                name: 'Сложность вычислений',
                points: 2,
                types: ['Экзамен'],
                semesters: [5],
            }, {
                code: '1.25.3',
                name: 'Сложность параллельных вычислений',
                points: 2,
                types: ['Экзамен'],
                semesters: [6],
            }],
        },
    }, {
        code: 'М.1.26',
        name: 'Неконвенциональные вычисления',
        points: 4,
        courses: {
            required: [],
            additional: [{
                code: '1.26.2',
                name: 'Биоинформатика',
                points: 2,
                types: ['Зачет'],
                semesters: [7],
            }, {
                code: '1.26.3', name: 'Молекулярные вычисления', points: 2, types: ['Зачет'], semesters: [8],
            }],
        },
    }, {
        code: 'М.1.27',
        name: 'Модели и алгоритмы для задач робототехники',
        points: 6,
        courses: {
            required: [],
            additional: [{
                code: '1.27.2',
                name: 'Алгоритмы коррекции движений',
                points: 2,
                types: ['Зачет'],
                semesters: [6],
            }, {
                code: '1.27.3',
                name: 'Программирование встраиваемых систем',
                points: 2,
                types: ['Зачет'],
                semesters: [7],
            }, {
                code: '1.27.4', name: 'Техническое зрение', points: 2, types: ['Зачет'], semesters: [8],
            }],
        },
    }, {
        code: 'М.1.28',
        name: 'Обработка естественных языков',
        points: 4,
        courses: {
            required: [],
            additional: [{
                code: '1.28.1',
                name: 'Обработка естественных языков',
                points: 4,
                types: ['Экзамен'],
                semesters: [7],
            }],
        },
    }, {
        code: 'М.1.29',
        name: 'Основы компьютерной безопасности',
        points: 6,
        courses: {
            required: [],
            additional: [{
                code: '1.29.1',
                name: 'Основы компьютерной безопасности',
                points: 6,
                types: ['Экзамен'],
                semesters: [5],
            }],
        },
    }, {
        code: 'М.1.30',
        name: 'Численные методы',
        points: 7,
        courses: {
            required: [],
            additional: [{
                code: '1.30.1',
                name: 'Численные методы',
                points: 7,
                types: ['Зачет', 'Экзамен'],
                semesters: [7, 8],
            }],
        },
    }, {
        code: 'М.1.31',
        name: 'Практикум по компьютерной безопасности',
        points: 6,
        courses: {
            required: [],
            additional: [{
                code: '1.31.1',
                name: 'Практикум по компьютерной безопасности',
                points: 6,
                types: ['Экзамен'],
                semesters: [6],
            }],
        },
    }, {
        code: 'М.1.32',
        name: 'Прикладная статистика',
        points: 5,
        courses: {
            required: [],
            additional: [{
                code: '1.32.1',
                name: 'Прикладная статистика',
                points: 5,
                types: ['Экзамен'],
                semesters: [7],
            }],
        },
    }, {
        code: 'М.1.33',
        name: 'Компьютерная геометрия и графика',
        points: 4,
        courses: {
            required: [],
            additional: [{
                code: '1.33.1',
                name: 'Компьютерная геометрия и графика',
                points: 4,
                types: ['Экзамен'],
                semesters: [6],
            }],
        },
    }, {
        code: 'М.1.34',
        name: 'Низкоуровневое программирование',
        points: 6,
        courses: {
            required: [],
            additional: [{
                code: '1.34.2',
                name: 'Аппаратные средства вычислительной техники',
                points: 3,
                types: ['Экзамен'],
                semesters: [6],
            }, {
                code: '1.34.3', name: 'Ассемблер', points: 3, types: ['Зачет'], semesters: [5],
            }],
        },
    }, {
        code: 'М.1.35',
        name: 'Промышленная разработка на Java',
        points: 3,
        courses: {
            required: [],
            additional: [{
                code: '1.35.1',
                name: 'Промышленная разработка на Java',
                points: 3,
                types: ['Зачет'],
                semesters: [7],
            }],
        },
    }, {
        code: 'М.1.36',
        name: 'Промышленная web-разработка',
        points: 3,
        courses: {
            required: [],
            additional: [{
                code: '1.36.1',
                name: 'Промышленная web-разработка',
                points: 3,
                types: ['Экзамен'],
                semesters: [8],
            }],
        },
    }, {
        code: 'М.1.37',
        name: 'Сервисы. Взаимодействие приложений',
        points: 3,
        courses: {
            required: [],
            additional: [{
                code: '1.37.1',
                name: 'Сервисы. Взаимодействие приложений',
                points: 3,
                types: ['Экзамен'],
                semesters: [6],
            }],
        },
    }, {
        code: 'М.1.38',
        name: 'Физическая культура и спорт',
        points: 2,
        courses: {
            required: [{
                code: '1.38.1',
                name: 'Физическая культура',
                points: 2,
                types: ['Зачет'],
                semesters: [6],
            }, {
                code: '1.38.2',
                name: 'Прикладная физическая культура',
                points: null,
                types: ['Зачет'],
                semesters: [1, 2, 3, 4, 5],
            }],
            additional: [],
        },
    }, {
        code: 'М.1.39',
        name: 'Шаблоны проектирования',
        points: 3,
        courses: {
            required: [],
            additional: [{
                code: '1.39.1',
                name: 'Шаблоны проектирования',
                points: 3,
                types: ['Зачет'],
                semesters: [5],
            }],
        },
    }, {
        code: 'М.1.40',
        name: 'Введение в машинное обучение',
        points: 3,
        courses: {
            required: [],
            additional: [{
                code: '1.40.1',
                name: 'Введение в машинное обучение',
                points: 3,
                types: ['Экзамен'],
                semesters: [5],
            }],
        },
    }, {
        code: 'М.1.41',
        name: 'Машинное обучение и язык Python',
        points: 3,
        courses: {
            required: [],
            additional: [{
                code: '1.41.1',
                name: 'Машинное обучение и язык Python',
                points: 3,
                types: ['Зачет'],
                semesters: [6],
            }],
        },
    }, {
        code: 'М.1.42',
        name: 'Вероятностные графические модели',
        points: 6,
        courses: {
            required: [],
            additional: [{
                code: '1.42.1',
                name: 'Вероятностные графические модели',
                points: 6,
                types: ['Зачет', 'Экзамен'],
                semesters: [5, 6],
            }],
        },
    }, {
        code: 'М.1.43',
        name: 'Разработка распределенных систем',
        points: 3,
        courses: {
            required: [],
            additional: [{
                code: '1.43.1',
                name: 'Разработка распределенных систем',
                points: 3,
                types: ['Зачет'],
                semesters: [6],
            }],
        },
    }, {
        code: 'М.1.44',
        name: 'Теория игр',
        points: 3,
        courses: {
            required: [],
            additional: [{
                code: '1.44.1', name: 'Теория игр', points: 3, types: ['Зачет'], semesters: [6],
            }],
        },
    }, {
        code: 'М.1.45',
        name: 'Школа промышленной разработки',
        points: 3,
        courses: {
            required: [],
            additional: [{
                code: '1.45.1',
                name: 'Школа промышленной разработки',
                points: 3,
                types: ['Зачет'],
                semesters: [6],
            }],
        },
    }, {
        code: 'М.1.46',
        name: 'Мобильная разработка',
        points: 4,
        courses: {
            required: [],
            additional: [{
                code: '1.46.2',
                name: 'Мобильная разработка под android',
                points: 2,
                types: ['Зачет'],
                semesters: [5],
            }, {
                code: '1.46.3',
                name: 'Основы разработки приложений для iOS',
                points: 2,
                types: ['Зачет'],
                semesters: [5],
            }],
        },
    }, {
        code: 'М.1.47',
        name: 'Параметризированные алгоритмы',
        points: 3,
        courses: {
            required: [],
            additional: [{
                code: '1.47.1',
                name: 'Параметризированные алгоритмы',
                points: 3,
                types: ['Экзамен'],
                semesters: [6],
            }],
        },
    }, {
        code: 'М.1.48',
        name: 'Обучение с подкреплением и нейронные сети',
        points: 3,
        courses: {
            required: [],
            additional: [{
                code: '1.48.1',
                name: 'Обучение с подкреплением и нейронные сети',
                points: 3,
                types: ['Зачет'],
                semesters: [5],
            }],
        },
    }, {
        code: 'М.1.49',
        name: 'Многопоточное и асинхронное программирование на c#',
        points: 3,
        courses: {
            required: [],
            additional: [{
                code: '1.49.1',
                name: 'Многопоточное и асинхронное программирование на c#',
                points: 3,
                types: ['Зачет'],
                semesters: [6],
            }],
        },
    }, {
        code: 'М.1.50',
        name: 'Алгоритмы играющие в игры',
        points: 3,
        courses: {
            required: [],
            additional: [{
                code: '1.50.1',
                name: 'Алгоритмы играющие в игры',
                points: 3,
                types: ['Экзамен'],
                semesters: [7],
            }],
        },
    }, {
        code: 'М.1.51',
        name: 'Создание веб-приложений I',
        points: 6,
        courses: {
            required: [],
            additional: [{
                code: '1.51.2',
                name: 'Разработка клиентской части веб-приложений',
                points: 3,
                types: ['Экзамен'],
                semesters: [5],
            }, {
                code: '1.51.3',
                name: 'Язык программирования Java Script',
                points: 3,
                types: ['Экзамен'],
                semesters: [5],
            }],
        },
    }, {
        code: 'М.1.52',
        name: 'Создание веб-приложений II',
        points: 3,
        courses: {
            required: [],
            additional: [{
                code: '1.52.2',
                name: 'Разработка веб-приложений',
                points: 2,
                types: ['Зачет'],
                semesters: [6],
            }],
        },
    }, {
        code: 'М.1.53',
        name: 'Майноры 1',
        points: 6,
        courses: {
            required: [],
            additional: [{
                code: '1.53.1',
                name: 'Майнор 1',
                points: 3,
                types: ['Зачет'],
                semesters: [7],
            }, {
                code: '1.53.2', name: 'Майнор 2', points: 3, types: ['Зачет'], semesters: [7],
            }],
        },
    }],
};
