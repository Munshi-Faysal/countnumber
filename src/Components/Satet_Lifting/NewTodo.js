import {React,useState} from 'react'
import { Form,Button,Accordion,Alert,Badge,Breadcrumb,ButtonGroup,Card,Carousel,CloseButton,Dropdown,Figure,Image,ListGroup,Modal,Nav, Navbar,Offcanvas, Overlay, Pagination,Placeholder, Popover, ProgressBar, Spinner, Table, Tab, Tooltip, Toast} from 'react-bootstrap';


const NewTodo = (props) => {
const[todo,setTodo]=useState("")
const handleInputChange=(e)=>{
setTodo(e.target.value);
}
const handleSubmit=(e)=>{
    e.preventDefault();
    props.onTodo(todo)
}
  return (
    <div>
          <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter FirstName</Form.Label>
                    <Form.Control onChange={handleInputChange} required name="todo" type="text" value={todo} placeholder="Enter FirstName" />
                 </Form.Group>
                <Form.Group className='mb-3'>
                <Button type='submit'>Sign Up</Button>
                </Form.Group>
           </Form>
    </div>
  )
}

export default NewTodo