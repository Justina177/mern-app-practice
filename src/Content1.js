import React from 'react'

const Content1 = () => {
    const handleNameChange = () => {
        const names = ["Bob", "Kevin", "Tina"];
        const int = Math.floor(Math.random() * 3);
        return names[int];
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
        <p>Hello {handleNameChange()}!</p>
        <button onClick={handleClick}>Click Here</button>
        <button onClick={() => handleClick2('Tina')}>Click It</button>
        <button onClick={(e) => handleClick3(e)}>Click Here</button>
    </main>
  )
}

export default Content1