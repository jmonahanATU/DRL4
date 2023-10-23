// Importing the Books component from the "./books" file
import { useEffect, useState } from "react";
import Books from "./books";
import axios from "axios";

// Functional component called Read
function Read() {
  // Sample data representing a list of books
  const [data, setData] = useState([]);


  useEffect(
    ()=>{
        axios.get('https://jsonblob.com/api/jsonblob/1161593332966481920')
        .then(
          (response)=>{
            setData(response.data.books)
          }
               
        )
        .catch(
          (error)=>{
            console.log(error);
          }
        )
    }, []
  )

  // The component returns the following JSX
  return (
    <div>
      <h2>Hello from Read Component</h2> {/* Heading 2 displaying a message */}
      {/* Rendering the Books component and passing the book data as a prop */}
      <Books myBooks={data}></Books>
    </div>
  );
}

// Exporting the Read component as the default export
export default Read;
