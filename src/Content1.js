import React from 'react';
import { useState } from 'react'

const Content1 = () => {
    const [name, setName] = useState('Tina');
    const [count, setCount] = useState(0);

    const handleNameChange = () => {
        const names = ["Bob", "Kevin", "Tina"];
        const int = Math.floor(Math.random() * 3);
        setName(names[int]);
      }

      const handleClick = () => {
          setCount(count +1)
          setCount(count +1)
          console.log(count)
      }

      const handleClick2 = (name) => {
          console.log(count)
      }


  return (
    <main className='main'>
        <p onDoubleClick={handleClick}>
            Hello {name}!
        </p>
        <button onClick={handleNameChange}>Change Name</button>
        <button onClick={handleClick}>Click It</button>
        <button onClick={handleClick2}>Click Here</button>
    </main>
  )
}

export default Content1