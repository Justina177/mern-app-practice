import React from 'react'

const Search = () => {
  return (
    <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='search'>Search</label>
        <input
        id='search'
        type='text'
        role='searchbox'
        placeholder='Search Items'
        />

    </form>
  )
}

export default Search