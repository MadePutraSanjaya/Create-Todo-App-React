import React from 'react'
import { Button } from "react-bootstrap";

function Todo({ names, index, markDone, removeForm }) {
  return (
    <div className='todo'>
         <span style={{ textDecoration: names.isDone ? "line-through" : "" }}>{names.text}</span>
      <div>
        <Button variant="outline-success" onClick={() => markDone(index)}>✓</Button>{' '}
        <Button variant="outline-danger" onClick={() => removeForm(index)}>✕</Button>
      </div>
    </div>
  )
}

export default Todo