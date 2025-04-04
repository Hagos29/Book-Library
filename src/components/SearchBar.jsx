import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";

const SearchBar = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://openlibrary.org/search.json?title=history")
      .then((res) => res.json())
      .then((data) => setBooks(data.docs))
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

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </>
  );
};

export default SearchBar;
