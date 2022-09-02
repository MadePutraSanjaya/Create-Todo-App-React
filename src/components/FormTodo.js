import React, { useState } from 'react'
import { Button, Form } from "react-bootstrap";

function FormTodo({addForm}) {
  const [value, setvalue] = useState("")

  // Create HandleSubmit
  const HandleSubmit = (e) => {
    e.preventDefault();
    if(!value) return
    addForm(value)
    setvalue("")
  }

  return (
    <div>
        <Form onSubmit={HandleSubmit}>
          <Form.Group>
            <Form.Label><h5 className='font-w-6'>Add Todo</h5></Form.Label>
            <Form.Control type="text" className="input" value={value} onChange={(e) => setvalue(e.target.value)} placeholder="New Todo"></Form.Control>
          </Form.Group>
          <Button variant="primary mb-3 mt-3" type="submit">Add New Todo</Button>
        </Form>
    </div>
  )
}

export default FormTodo