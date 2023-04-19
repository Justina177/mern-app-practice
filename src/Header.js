import React from 'react'

const Header = () => {
    // const headerStyle = { backgroundColor:'yellow',
    // color: 'black',
    // fontWeight: '700',
    // fontSize: '60px'
    // };
    // * then use it in the return


  return (
    <header style={{
            width: 'calc(100% - 2px)',
            padding: '0 0.25em',
            backgroundColor:'mediumblue',
            color: '#fff',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontWeight: '700',
            fontSize: '60px'
        }}>
            Groceries List
    </header>
  )
}

export default Header