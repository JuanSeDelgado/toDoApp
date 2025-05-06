import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function Task({ index, body, onDeleteTask}) {

  return (
    <li className="task" >
      {body}
      <span onClick={()=>onDeleteTask(index)}><FontAwesomeIcon icon={faXmark} style={{ color: '#b11010', cursor: 'pointer' }} /></span>
    </li>
  );
}

Task.propTypes = {
    index: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
  onDeleteTask: PropTypes.function
};

export default Task;
