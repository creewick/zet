import React from 'react';
import PropTypes from 'prop-types';
import Course from './Course';

export default function Semester({ courses, index }) {
    const toHtml = (c) => <Course course={c} />;

    const groupByFilter = (filter, title) => (courses.some(filter)
        ? (
          <div className="p-2 col">
            <h5>{title}</h5>
            {courses.filter(filter).map(toHtml)}
          </div>
        )
        : null);


    return (
      <div key={index}>
        <h3 className="mt-5">{`Семестр ${index + 1}`}</h3>
        <div className="d-flex flex-column flex-md-row">
          { groupByFilter((c) => c.required, 'Обязательные')}
          { groupByFilter((c) => !c.required, 'Спец. курсы')}
        </div>
      </div>
    );
}

Semester.propTypes = {
    courses: PropTypes.arrayOf(
        PropTypes.shape({
            required: PropTypes.bool.isRequired,
        }).isRequired,
    ).isRequired,
    index: PropTypes.number.isRequired,
};
