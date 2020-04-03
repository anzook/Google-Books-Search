import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";


const Search = props => {
  const [query, setQuery] = useState("")

const handleChange = (event) => {
  setQuery( event.target.value);
}

  return (
<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Book search terms: </Form.Label>
    <Form.Control type="text" placeholder="Twilight" value={query} onChange={handleChange}/>
    <Form.Text className="text-muted">
      We'll never share your tastes with anyone else.
    </Form.Text>
  </Form.Group>

  <Button variant="primary" type="submit" onClick={(event) => {
    event.preventDefault();
    props.searchAPI(query)}
  }>
    Search
  </Button>
</Form>
  );
}

export default Search;
