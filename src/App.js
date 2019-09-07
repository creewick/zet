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
              <div className="mt-3 d-flex flex-column flex-sm-row">
                <h2 className="mr-3 mb-0">Калькулятор ЗЕТ</h2>
                <div>
                  <Button className="m-1 btn-light btn-outline-danger" onClick={reset}>Сброс</Button>
                  <Button className="m-1 btn-light btn-outline-dark" href="https://github.com/creewick/zet">
                    Github
                  </Button>
                </div>
              </div>
            </div>
            <p>
              Кнопка "Сброс" отмечает всё, кроме курсов по выбору.
            </p>
            { bySemester && bySemester
                .map((courses, i) => <Semester courses={courses} index={i} />)}
          </Container>
        </Context.Provider>
      </div>
    );
}
