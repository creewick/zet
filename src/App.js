import React from 'react';
import { Container, Button } from 'reactstrap';
import { bySemester, requiredCourses } from './studyPlan';
import useLocalStorage from './useLocalStorage';
import ZETBar from './components/ZETBar';
import Context from './context';
import Semester from './components/Semester';

export default function App() {
    const [get, set] = useLocalStorage(
        'selected',
        requiredCourses.map((x) => x.code),
    );

    const reset = () => set(requiredCourses.map((x) => x.code));

    return (
      <div className="App">
        <Context.Provider value={{ get, set }}>
          <ZETBar />
          <Container>
            <div className="d-flex">
            <h2 className="mt-3 mr-3 mb-0">Калькулятор ЗЕТ</h2>
            <Button className="m-3 btn-light btn-outline-danger" onClick={reset}>Сброс</Button>
            </div>
            { bySemester && bySemester
                .map((courses, i) => <Semester courses={courses} index={i} />)}
          </Container>
        </Context.Provider>
      </div>
    );
}
