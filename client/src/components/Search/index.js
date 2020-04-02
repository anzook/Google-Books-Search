import React from "react";
import { Form, Button } from "react-bootstrap";


function Search() {
  return (
<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Book search terms: </Form.Label>
    <Form.Control type="text" placeholder="Twilight" />
    <Form.Text className="text-muted">
      We'll never share your tastes with anyone else.
    </Form.Text>
  </Form.Group>

  <Button variant="primary" type="submit">
    Search
  </Button>
</Form>
  );
}

export default Search;
