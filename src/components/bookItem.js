// Importing the Card component from react-bootstrap
import Card from 'react-bootstrap/Card';

// Functional component for displaying book details
function BookItem(props) {
  return (
    <div>
      {/* Bootstrap Card component to display book details */}
      <Card>
        {/* Card header displaying the book title */}
        <Card.Header>{props.myBook.title}</Card.Header>
        <Card.Body>
          {/* Blockquote to style book details */}
          <blockquote className='blockquote mb-0'>
            {/* Book thumbnail image */}
            <img src={props.myBook.thumbnailUrl} alt="Book Thumbnail" />

            {/* Footer within blockquote displaying author */}
            <footer>
              {props.myBook.authors[0]}
            </footer>
          </blockquote>
        </Card.Body>
      </Card>

      {/* Commented-out alternative representation of book details */}
      {/* 
      <h3>{props.myBook.title}</h3>
      <img src={props.myBook.thumbnailUrl} alt="Book Thumbnail" />
      <p>{props.myBook.authors[0]}</p>
      */}
    </div>
  );
}

// Exporting the BookItem component as the default export
export default BookItem;
