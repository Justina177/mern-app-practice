import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Content1 = ({items, handleCheck, handleDelete}) => {   
    
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