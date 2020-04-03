import React from "react";
import { Card, Button } from "react-bootstrap";


const Book = props => {
  
  return (
    <div>
    { props.books.map(book => (
<Card key={book.id}>
    { book.volumeInfo.imageLinks.smallThumbnail ? <Card.Img variant="top" style={{maxWidth: '200px', height: "auto"}} src={book.volumeInfo.imageLinks.smallThumbnail} /> : <Card.Img variant="top" src="https://dubsism.files.wordpress.com/2017/12/image-not-found.png" /> }
  <Card.Body>
    <Card.Title>{book.volumeInfo.title}</Card.Title>
    { book.volumeInfo.authors ? (  book.volumeInfo.authors.map(author => (
        <Card.Text>
          {author}
      </Card.Text>
    )) ) : (  <Card.Text>
No Author Listed  </Card.Text> ) }
       <Card.Text>
      pub: {book.volumeInfo.publishedDate}       </Card.Text>
    <Card.Text>
    {book.volumeInfo.description}    </Card.Text>
  </Card.Body>
  <Card.Body>
    <Card.Link href={book.volumeInfo.infoLink} target="_blank">Book Link</Card.Link>
    <Button onClick={(event) => {
    event.preventDefault();
    props.saveBook(book)}
  }>Save Book</Button>
  </Card.Body>
</Card>

     ) )}
</div>

  );
}

export default Book;
