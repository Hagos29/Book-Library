import React from "react";

const BookCard = ({ book }) => {

  if (!book) {
    return <div className="p-2 border rounded shadow">No book data available</div>;
  }


  return (
    <div className="p-2 border rounded shadow">
      <img
        className="h-48 w-36"
        src={`https://covers.openlibrary.org/b/id/${book.cover_i}.jpg`}
        alt={book.title}
      />
      <h4 className="text-lg font-bold mt-2">{book.title}</h4>
    </div>
  );
};

export default BookCard;
