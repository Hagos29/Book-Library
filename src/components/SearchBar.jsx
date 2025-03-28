import React, { useEffect, useState } from "react";

const SearchBar = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://openlibrary.org/search.json?title=fiction") 
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.docs); 
      })
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  return (
    <>
      <div className="w-[70%] mx-auto p-4 flex justify-center items-center gap-4">
        <input
          type="text"
          placeholder="Search books" 
          className="w-full border p-2 border-gray-300 rounded"
        />
        <button className="bg-slate-800 text-white px-4 py-2 rounded">
          Search
        </button>
      </div>
      <div>
        {books.map((book, index) => (
          <div key={index}> 
            <div>
              <h4>{book.title}</h4>
            </div>
            <div>
              <img className=" h-3/6 w-2/6 p-3"
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}.jpg`} 
                alt={book.title}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchBar;
