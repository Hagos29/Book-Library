import React, { useEffect } from 'react'
import { useState } from 'react'

const SearchBar = () => {

const [search, setSearch] = useState(null);

useEffect(() => {
    fetch('https://openlibrary.org/search.json?q=${query}&limit=10')
    .then(response => response.json)
    .then((data) => setSearch(data)
), []}

)

  return (
    <div className='container mx-auto p-4 '>
      <input type='text' placeholder='Serach books' className='w-full border p-2 border-gray-300 rounded'/>
      
    </div>
    
  )
}

export default SearchBar