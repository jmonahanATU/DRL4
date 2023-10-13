import Card from 'react-bootstrap/Card';

function BookItem(props)
{
    return(
        <div>
            <h3>{props.myBook.title}</h3>
            <img src={props.myBook.thumbnailUrl}></img>
            <p>{props.myBook.authors[0]}</p>
        </div>
    );
}
export default BookItem;