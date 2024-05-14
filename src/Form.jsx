import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Form = ({ addItem }) => {
  const [item, setItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!item) {
      toast.error('Please Enter An Item in the Form');
      return;
    }
    addItem(item);
    setItem('');
  };

  return (
    <div className='form-control'>
      <form onSubmit={handleSubmit}>
        <h4>Grocery Bud</h4>
        <input
          className='form-input'
          type='text'
          name='item'
          id='item'
          value={item}
          onChange={(e) => {
            setItem(e.target.value);
          }}
        />
        <button className='btn' type='submit'>
          Add Item
        </button>
      </form>
    </div>
  );
};

export default Form;
