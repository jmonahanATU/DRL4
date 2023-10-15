// Importing the BookItem component from the "./bookItem" file
import BookItem from "./bookItem";

// Functional component to display a list of books using BookItem component
function Books(props) {
  // Mapping over the list of books and creating BookItem components for each book
  return props.myBooks.map(
    (book) => {
      return (
        <BookItem 
          myBook={book}  // Passing the book data as a prop to BookItem component
          key={book.isbn} // Using the book's ISBN as a unique key for each BookItem
        >
        </BookItem>
      );
    }
  );
}

// Exporting the Books component as the default export
export default Books;
