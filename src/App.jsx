import { useState } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form';
import { ToastContainer, toast } from 'react-toastify';
import Items from './Items';

const App = () => {
  const getLocalStorage = () => {
    let list = localStorage.getItem('list');
    if (list) {
      list = JSON.parse(localStorage.getItem('list'));
    } else {
      list = [];
    }
    return list;
  };

  const setLocalStorage = (items) => {
    localStorage.setItem('list', JSON.stringify(items));
  };

  const defaultList = getLocalStorage();

  const [items, setItems] = useState(defaultList);

  const addItem = (item) => {
    const newItem = {
      id: nanoid(),
      name: item,
      completed: false,
    };

    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('item added to the list!');
  };

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('items deleted');
  };

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };

  return (
    <main className='section-center'>
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
      <ToastContainer position='top-center' />
    </main>
  );
};

export default App;
