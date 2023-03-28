import React from 'react';

import Wrapper from './Helper/Helper';

const ToDoItem = (props) => {
  const deleteHandler = () => {
    props.onChecked(props.id);
  };

  return (
    <Wrapper>
      <li>
        {props.text}{' '}
        <span className='deleteItem' onClick={deleteHandler}>
          X
        </span>
      </li>
    </Wrapper>
  );
};

export default ToDoItem;
