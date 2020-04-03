import React from "react";
import { Card, Button } from "react-bootstrap";


const SavedBook = props => {
  
  return (
    <div>
      { props.books.length>0 ? (
    props.books.map(book => (
<Card key={book.bookID}>
    { book.image ? <Card.Img variant="top" style={{maxWidth: '200px', height: "auto"}} src={book.image} /> : <Card.Img variant="top" src="https://dubsism.files.wordpress.com/2017/12/image-not-found.png" /> }
  <Card.Body>
    <Card.Title>{book.title}</Card.Title>
    { book.authors ? (  book.authors.map(author => (
        <Card.Text>
          {author}
      </Card.Text>
    )) ) : (  <Card.Text>
No Author Listed  </Card.Text> ) }
       <Card.Text>
      pub: {book.published}       </Card.Text>
    <Card.Text>
    {book.description}    </Card.Text>
  </Card.Body>
  <Card.Body>
    <Card.Link href={book.link} target="_blank">Book Link</Card.Link>
    <Button onClick={(event) => {
    event.preventDefault();
    props.removeBook(book._id)}
  }>Remove Book</Button>
    <Card.Text>
         Added on {book.date}
      </Card.Text>
  </Card.Body>
</Card>

     ) )
      ) : <h2> No Saved Books!</h2> }
</div>

  );
}

export default SavedBook;
