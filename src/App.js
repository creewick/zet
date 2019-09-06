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
            <h2 className="mr-3">Список курсов</h2>
            <Button className="m-1" onClick={reset}>Reset</Button>
            </div>
            { bySemester && bySemester
                .map((courses, i) => <Semester courses={courses} index={i} />)}
          </Container>
        </Context.Provider>
      </div>
    );
}
