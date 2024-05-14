import React, { useState } from 'react';

const SingleItem = ({ name, completed, id, removeItem, editItem }) => {
  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => {
          editItem(id);
        }}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: completed && 'line-through',
        }}
      >
        {name}
      </p>
      <button
        className='btn remove-btn'
        type='button'
        onClick={() => removeItem(id)}
      >
        remove
      </button>
    </div>
  );
};

export default SingleItem;
