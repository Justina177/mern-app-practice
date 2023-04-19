import React from 'react'

const Content1 = () => {
    const handleNameChange = () => {
        const names = ["Bob", "Kevin", "Dave"];
        const int = Math.floor(Math.random() * 3);
        return names[int];
      }
  return (
    <main className='main'>
        <p>Hello {handleNameChange()}!</p>
    </main>
  )
}

export default Content1