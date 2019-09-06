import React, { useContext } from 'react';
import { Input } from 'reactstrap';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import context from '../context';

export default function Course({ course }) {
    const ctx = useContext(context);
    const { get, set } = ctx;

    const inputClick = (code) => {
        if (get.includes(code)) {
            set(get.filter((c) => c !== code));
        } else {
            set([...get, code]);
        }
    };

    const classes = classnames(
        'd-flex',
        'p-2',
        {
            'bg-light': !get.includes(course.code),
            'shadow': !get.includes(course.code),
            'shadow-sm': get.includes(course.code),
        },
    );

    return (
      <div key={course.code}>
        <Input
          type="checkbox"
          id={course.code}
          checked={get.includes(course.code)}
          onChange={() => inputClick(course.code)}
          className="d-none"
        />
        <label htmlFor={course.code} className={classes}>
          <div className="d-flex flex-column pr-3">
            <h3 className="m-0 text-center">{course.points}</h3>
            <p className="m-0">ЗЕТ</p>
          </div>
          <div className="d-flex flex-column">
            <p className="m-0 text-primary">{course.name}</p>
            <p className="m-0 text-secondary">Модуль {course.mod}</p>
          </div>
        </label>
      </div>
    );
}

Course.propTypes = {
    course: PropTypes.shape({
        code: PropTypes.string.isRequired,
        mod: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        points: PropTypes.number.isRequired,
    }).isRequired,
};