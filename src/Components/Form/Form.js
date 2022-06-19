import {React,useState} from 'react'
import { Form,Button,Accordion,Alert,Badge,Breadcrumb,ButtonGroup,Card,Carousel,CloseButton,Dropdown,Figure,Image,ListGroup,Modal,Nav, Navbar,Offcanvas, Overlay, Pagination,Placeholder, Popover, ProgressBar, Spinner, Table, Tab, Tooltip, Toast} from 'react-bootstrap';

export default function FormRegister() {
    const[email,setEmail]=useState("");
    const[pass,setPass]=useState("");
    const EmailHandle =(e)=>{
        setEmail(e.target.value)
    }
    const PassHandle =(p)=>{
        setPass(p.target.value)
    }
const SignUpHandle=(e)=>{
    const data = {email,pass};
    
    e.preventDefault();
}

  return (
    <div>
           <h1>Registration Form</h1>
           <Form onSubmit={SignUpHandle}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={email} onChange={EmailHandle} required name="email"  type="email"  placeholder="Enter email" />
                    <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={pass} onChange={PassHandle} name='pass' type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className='mb-3'>
                <Button   type='submit'>Sign Up</Button>
                </Form.Group>
           </Form>
           <p> Email :{}</p>
           <p>PassWord : {}</p>
    </div>
  )
}
