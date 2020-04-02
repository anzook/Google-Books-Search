import React, { useEffect, useState } from "react";
// import API from "../utils/API";
// import Nav from "../components/Nav"
import { Row, Col, Container, Jumbotron } from "react-bootstrap"
import Header from "../components/Header"
import Book from "../components/Book"

import "./style.css";


function View() {
  // Setting our component's initial state
  // const [books, setBooks] = useState([])
  // const [bookQuery, setBookQuery] = useState({})

  // Load all books and store them with setBooks
  // useEffect(() => {
  //   // loadBooks()
  // }, [])




    return (
      <Container fluid>
  <Row>
    <Col> <h2> Saved books here!</h2> </Col>
  </Row>
  < Header />
  < Book />
</Container>
  
    );
  }


export default View;
