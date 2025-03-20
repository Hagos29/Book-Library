import BookDetails from "./components/BookDetails";
import BookCard from "./components/BookCard";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <h1 className="text-center font-bold p-8 text-2xl">
        <span className="text-amber-300 ">Book</span> Library
      </h1>
      <SearchBar/>
      <BookCard />
      <BookDetails />
    </>
  );
}

export default App;
