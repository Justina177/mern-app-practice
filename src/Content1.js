import React from 'react'

const Content1 = () => {
    const handleNameChange = () => {
        const names = ["Bob", "Kevin", "Dave"];
        const int = Math.floor(Math.random() * 3);
        return names[int];
      }

      const handleClick = () => {
          console.log('Button is being Clicked')
      }
  return (
    <main className='main'>
        <p>Hello {handleNameChange()}!</p>
        <button onClick={handleClick}>Click Here</button>
    </main>
  )
}

export default Content1