import React from 'react';
import PropTypes from 'prop-types';
import Course from './Course';

export default function Semester({ courses, index }) {
    const toHtml = (c) => <Course className="col-lg-4 col-sm-6 px-1 py-1" course={c} />;

    const groupByFilter = (filter, title) => (courses.some(filter)
        ? (
          <div>
            <h5>{title}</h5>
            <div className="m-2">
              <div className="row">
                {courses.filter(filter).map(toHtml)}
              </div>
            </div>
          </div>
        )
        : null);


    return (
      <div key={index}>
        <h3>{`Семестр ${index + 1}`}</h3>
        <div className="mb-5">
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
