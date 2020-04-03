import React, { useEffect, useState } from "react";
import API from "../utils/API";
// import Nav from "../components/Nav"
import { Row, Col, Container } from "react-bootstrap"
import Header from "../components/Header"
import SavedBook from "../components/SavedBook"

import "./style.css";


function View() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

const loadBooks = () => {
  API.getBooks()
  .then(res => {
    if (res.data.status === "error") {
      throw new Error(res.data.message);
    }
    setBooks(res.data);
  })
  .catch(err => console.log( err.message ));
}

const removeBook = (id) => {
  API.deleteBook(id)
  .then(res => {
    if (res.data.status === "error") {
      throw new Error(res.data.message);
    }
    loadBooks()
  })
  .catch(err => console.log( err.message ));
 }
    return (
      <Container fluid>
  <Row>
    <Col> <h2> Saved books here!</h2> </Col>
  </Row>
  < Header />
  < SavedBook books={books} removeBook={removeBook}/>
</Container>
  
    );
  }


export default View;
