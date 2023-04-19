import React from 'react';
import { useState } from 'react'

const Content1 = () => {
    const [name, setName] = useState('Tina');
    const handleNameChange = () => {
        const names = ["Bob", "Kevin", "Tina"];
        const int = Math.floor(Math.random() * 3);
        setName(names[int]);
      }

      const handleClick = () => {
          console.log('Button is being Clicked')
      }

      const handleClick2 = (name) => {
          console.log(`${name} was clicked`)
      }

      const handleClick3 = (e) => {
          console.log(e.target.innerText)
      }
  return (
    <main className='main'>
        <p onDoubleClick={handleClick3}>
            Hello {name}!
        </p>
        <button onClick={handleNameChange}>Change Name</button>
        <button onClick={() => handleClick2('Tina')}>Click It</button>
        <button onClick={(e) => handleClick3(e)}>Click Here</button>
    </main>
  )
}

export default Content1