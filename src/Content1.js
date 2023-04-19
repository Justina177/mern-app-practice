import React from 'react';
import ItemList from './ItemList';

const Content1 = ({items, handleCheck, handleDelete}) => {   
    
    return (
        <main className='main'>
            {items.length ? (
                <ItemList 
                items={items}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
                />  
            ) : (
                <p style={{ marginTop: '2rem' }}>Your list is Empty.</p>
            )}
            {/* lesson 7 time 8.00  npm i react-icons -D  */}         
        </main>
    )
}

export default Content1