import React, { useEffect, useState } from 'react'

const BookCard = () => {
  const[books, setBooks] = useState([]);

  useEffect(() => {
       fetch('/')
       .then(response => response.json())
       .then(data => setBooks(data))
  ,[]});

  return (
    <div></div>
  )
}

export default BookCard