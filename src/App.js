import React, { useMemo } from 'react';
import { Input } from 'reactstrap';
import { pointsSum, bySemester, requiredCourses } from './studyPlan';
import useLocalStorage from './useLocalStorage';

export default function App() {
    const [selected, setSelected] = useLocalStorage(
        'selected',
        requiredCourses.map((x) => x.code),
    );

    const sum = useMemo(() => pointsSum(selected), [selected]);

    const inputClick = (code) => {
        if (selected.includes(code)) {
            setSelected(selected.filter((c) => c !== code));
        } else {
            setSelected([...selected, code]);
        }
    };

    const courseView = (c) => (
      <div key={c.code}>
        <Input type="checkbox" id={c.code} checked={selected.includes(c.code)} onChange={() => inputClick(c.code)} />
          <label htmlFor={c.code}>М.{c.mod} - {c.name} - {c.points / c.semesters.length}</label>
      </div>
    );

    return (
      <div className="App">
        <h1>Калькулятор ЗЕТ</h1>
        <header>
          <h2>Результат: {sum} из 240.</h2>
        </header>
        { bySemester && bySemester
            .map((x, i) => (
              <div key={i}>
                <h2>Семестр {i + 1}</h2>
                <div className="d-flex">
                  { x.filter((c) => c.required).map(courseView) }
                  { x.filter((c) => !c.required).map(courseView) }
                </div>
              </div>
            ))}
      </div>
    );
}
