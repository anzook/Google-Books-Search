import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap"
import SearchPage from "./pages/Search.js"
import ViewPage from "./pages/View.js"


import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
      <Navbar bg="light" expand="lg">
  <Navbar.Brand >Google Books</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <LinkContainer to="/search"><Nav.Link >Search</Nav.Link></LinkContainer>
    <LinkContainer to="/saved"><Nav.Link >Saved</Nav.Link></LinkContainer>
    </Nav>
  </Navbar.Collapse>
</Navbar>
     

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/saved">
          <Saved />
          </Route>
          <Route path="/">
            <Saved />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Search() {
  return <SearchPage />;
}

function Saved() {
  return <ViewPage />;
}
