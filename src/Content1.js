import React from 'react';
import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';


const Content1 = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            checked: false,
            item: "One Bag of Rice"
        },
        {
            id: 2,
            checked: true,
            item: "Five Kilo of Meat"
        },
        {
            id: 3,
            checked: false,
            item: "Item 3"
        },
        {
            id: 4,
            checked: false,
            item: "Milk"
        }
    ]);

    const handleCheck = (id) => {
        const listItems = items.map((item) => item.id === id ? { ...item,
        checked: !item.checked } : item);
        setItems(listItems);
        localStorage.setItem('shoppingList', JSON.stringify(listItems));
    }

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);
    localStorage.setItem('shoppingList', JSON.stringify(listItems));
}
    

   
  return (
    <main className='main'>
        {items.length ? (
            <ul>
                {items.map((item) => (
                    <li className='item' key={item.id}>
                        <input
                            type="checkbox"
                            onChange={() => handleCheck(item.id)}
                            checked={item.checked}
                        />
                        <label>{item.item}</label>
                        <FaTrashAlt 
                        onClick={() => handleDelete(item.id)}
                        role="button" 
                        tabIndex="0"
                        />
                    </li>
                ))}
            </ul>
        ) : (
            <p style={{ marginTop: '2rem' }}>Your list is Empty.</p>
        )}

        {/* lesson 7 time 8.00  npm i react-icons -D  */}
        
    </main>
  )
}

export default Content1