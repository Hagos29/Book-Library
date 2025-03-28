# Book Library

## Overview
Book Library is a web application that allows users to search for books, view book details, and browse a collection of books. It integrates the Open Library API to fetch book data dynamically.

## Features
- **Search Functionality**: Users can search for books by title using the Open Library API.
- **Book Details**: Displays detailed information about a selected book, including title, author, and cover image.
- **Book Card Display**: Shows books in a grid layout with cover images, titles, and author names.
- **Responsive Design**: Fully optimized for different screen sizes using Tailwind CSS.
- **Error Handling**: Displays appropriate messages for missing data or failed API requests.

## Technologies Used
- **React.js** (for UI development)
- **Tailwind CSS** (for styling)
- **Open Library API** (for fetching book data)
- **Vite** (for fast development and build process)

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Hagos29/book-library.git
   ```
2. Navigate to the project directory:
   ```sh
   cd book-library
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## Usage
1. Enter a book title in the search bar.
2. Click the **Search** button to fetch book results.
3. Browse through the book cards displaying title, author, and cover.
4. Click on a book to view its details.

## API Integration
- The application fetches data from the **Open Library API**:
  ```sh
  https://openlibrary.org/search.json?q=YOUR_SEARCH_QUERY
  ```
- Book cover images are retrieved using:
  ```sh
  https://covers.openlibrary.org/b/id/COVER_ID-M.jpg
  ```

## Folder Structure
```
book-library/
│── src/
│   ├── components/
│   │   ├── SearchBar.js
│   │   ├── BookCard.js
│   │   ├── BookDetails.js
│   ├── App.js
│   ├── main.jsx
│── public/
│── package.json
│── README.md
```

## Future Enhancements
- Implement pagination for large search results.
- Add user authentication for personalized book lists.
- Improve UI with animations and dark mode.

## License
This project is licensed under the MIT License.

## Author
Developed by **Hagos Beyene**

