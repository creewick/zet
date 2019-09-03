import React, { useState, useEffect } from 'react';
import getStudyPlan from './getStudyPlan';

export default function App() {
    const [plan, setPlan] = useState({});

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/creewick/zet/master/src/plan.html')
            .then((r) => r.text())
            .then(getStudyPlan)
            .then(setPlan);
    }, []);

    return (
      <div className="App">
          {plan.modules && plan.modules.map(m => <h1>{m.name}</h1>)}
      </div>
    );
}
