import React, { useMemo, useContext } from 'react';
import { Progress } from 'reactstrap';
import config from '../config';
import { percAddOf, percReqOf, sumOf } from '../studyPlan';
import context from '../context';

export default function ZETBar() {
    const ctx = useContext(context);
    const { get } = ctx;

    const sum = useMemo(() => sumOf(get), [ctx]);
    const reqPercent = useMemo(() => percReqOf(get), [ctx]);
    const addPercent = useMemo(() => percAddOf(get), [ctx]);
    const sumPercent = useMemo(() => reqPercent + addPercent, [ctx]);

    return (
      <header className="sticky-top">
        <Progress multi className="rounded-0">
          <Progress bar color="danger" value={reqPercent} />
          <Progress bar color="warning" value={addPercent} />
        </Progress>
        <Progress multi className="mt-n3 text-center">
          <Progress bar color="transparent" value={sumPercent} className="text-right font-weight-bold pr-1">
            {sum} / {config.maxPoints}
          </Progress>
        </Progress>
      </header>
    );
}
