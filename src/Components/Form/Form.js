import {React,useState} from 'react'
import { Form,Button,Accordion,Alert,Badge,Breadcrumb,ButtonGroup,Card,Carousel,CloseButton,Dropdown,Figure,Image,ListGroup,Modal,Nav, Navbar,Offcanvas, Overlay, Pagination,Placeholder, Popover, ProgressBar, Spinner, Table, Tab, Tooltip, Toast} from 'react-bootstrap';

export default function FormRegister() {

    const [user, setUser] = useState({email: '', pass: ''})
    const {email,pass} = user

    const handleChange =(e)=>{
        setUser({...user, [e.target.name]: e.target.value});
        
    }
const SignUpHandle=(e)=>{
    
    console.log(user);
    e.preventDefault();

}

  return (
    <div>
           <h1>Registration Form</h1>
           <Form onSubmit={SignUpHandle}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control  onChange={handleChange} required name="email" type="email"  placeholder="Enter email" />
                    <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handleChange} name='pass' type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className='mb-3'>
                <Button type='submit'>Sign Up</Button>
                </Form.Group>
           </Form>
           <div>
            <input id="fff" type="text" value={email} readOnly/>
           </div>
           <p>PassWord : {}</p>
    </div>
  )
}
