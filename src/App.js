import React, { useState, useMemo } from 'react';
import { Input } from 'reactstrap';
import { bySemester, requiredCourses } from './studyPlan';
import useLocalStorage from './useLocalStorage';

export default function App() {
    const [selected, setSelected] = useLocalStorage(
        'selected',
        requiredCourses.map((x) => x.code),
    );

    const [semesters] = useState(
        [1, 2, 3, 4, 5, 6, 7, 8]
            .map(bySemester),
    );

    const sum = useMemo(() => selected.map((x) => x.points).reduce((a, b) => a + b, 0), [selected]);

    const courseView = (c) => (
      <div>
        <Input type="checkbox" id={c.code} defaultChecked={selected.includes(c.code)} />
        М.{c.code} - {c.name} - {c.points / c.semesters.length }
      </div>
    );

    return (
      <div className="App">
        <h1>Калькулятор ЗЕТ</h1>
        <header>
          <h2>Результат: {sum} из 240.</h2>
        </header>
        { semesters && semesters
            .map((x, i) => (
              <div>
                <h2>Семестр {i + 1}</h2>
                <div className="d-flex">
                  { x.filter((c) => c.isRequired).map(courseView) }
                  { x.filter((c) => !c.isRequired).map(courseView) }
                </div>
              </div>
            ))}
      </div>
    );
}
