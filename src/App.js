import React from 'react';
import { Container } from 'reactstrap';
import { bySemester, requiredCourses } from './studyPlan';
import useLocalStorage from './useLocalStorage';
import ZETBar from './components/ZETBar';
import Course from './components/Course';
import Context from './context';

export default function App() {
    const [get, set] = useLocalStorage(
        'selected',
        requiredCourses.map((x) => x.code),
    );
    return (
      <div className="App">
        <Context.Provider value={{ get, set }}>
          <ZETBar />
          <Container>
            <h2>Список курсов</h2>
            { bySemester && bySemester
                .map((x, i) => (
                  <div key={i}>
                    <h3 className="mt-5">Семестр {i + 1}</h3>
                    <div className="d-flex flex-column flex-md-row">
                      { x.some((c) => c.required) && (
                        <div className="p-2 col">
                          <h5>Обязательные</h5>
                          {x.filter((c) => c.required).map((c) => <Course course={c} />)}
                        </div>
                      )}
                      { x.some((c) => !c.required) && (
                        <div className="p-2 col">
                          <h5>Спец. курсы</h5>
                          {x.filter((c) => !c.required).map((c) => <Course course={c} />)}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
          </Container>
        </Context.Provider>
      </div>
    );
}
