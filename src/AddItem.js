import React from 'react'
import { FaPlus } from 'react-icons/fa';

const AddItem = () => {
  return (
    <form className='addForm'>
        <label htmlFor='addItem'>Add Item</label>
        <input
        autoFocus 
        id='additem'
        type='text'
        placeholder='Add Item'
        required
        />
        <button type='submit'
        aria-label='add Item'
        />
            <FaPlus />
    </form>
  )
}

export default AddItem