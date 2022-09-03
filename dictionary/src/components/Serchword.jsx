import React from 'react'

function Searchword({ search, handleChange, handleClick }) {
  return (
    <div>
      <h3>Search Meaning Here!</h3>
      <div className='list'>
        <input type="text" name="serach" value={search} onChange={handleChange} id="" />
        <button type="submit" onClick={() => handleClick()}>Search</button>
      </div>
    </div>
  )
}

export default Searchword