import React from "react";
import { Jumbotron } from "react-bootstrap";


function Header() {
  return (
<Jumbotron>
  <h1>Hello, readers of the world!</h1>
  <p>
    This is a simple app using Google Books api to discover and save books.
  </p>
</Jumbotron>
  );
}

export default Header;
