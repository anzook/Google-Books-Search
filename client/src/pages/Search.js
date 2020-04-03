import React, { useState } from "react";
import API from "../utils/API";
// import Nav from "../components/Nav"
import { Row, Col, Container } from "react-bootstrap"
import Header from "../components/Header"
import SearchBar from "../components/Search"
import Book from "../components/Book"

import "./style.css";


function Search() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])




  const saveBook = (book) => {
    console.log(book);
    API.saveBook({
      title: book.volumeInfo.title,
      bookID: book.id,
      authors: book.volumeInfo.authors,
      published: book.volumeInfo.publishedDate,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.smallThumbnail,
      link: book.volumeInfo.infoLink,
    })
    .then(res => {
      if (res.data.status === "error") {
        throw new Error(res.data.message);
      }
    })
    .catch(err => console.log( err.message ));
   }

   const searchAPI = (query) => {
    setBooks([]);

     console.log(query)
    API.searchBooks(query)
    .then(res => {
      if (res.data.status === "error") {
        throw new Error(res.data.message);
      } else {
        console.log(res.data)
        setBooks(res.data.items);
      }
     
    })
    .catch(err => console.log( err.message ));
   }


    return (
      <Container fluid>
  <Row>
    <Col> <h2> Search here!</h2> </Col>
  </Row>
  < Header />
  < SearchBar searchAPI={searchAPI}/>
  < Book books={books} saveBook={saveBook}/>
</Container>
  
    );
  }


export default Search;
