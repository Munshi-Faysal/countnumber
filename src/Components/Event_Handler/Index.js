import React, { Component } from 'react'
import { Form,Button,Accordion,Alert,Badge,Breadcrumb,ButtonGroup,Card,Carousel,CloseButton,Dropdown,Figure,Image,ListGroup,Modal,Nav, Navbar,Offcanvas, Overlay, Pagination,Placeholder, Popover, ProgressBar, Spinner, Table, Tab, Tooltip, Toast} from 'react-bootstrap';

class Event_Handler extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         emailChange: "",
         passwordChange:""
      }
    }



    handleClick=()=>{
    
    }
    EmailChange = (e)=>{
        this.setState({
            emailChange: e.target.value
        })
    }
    PasswordChange=(p)=>{
        this.setState({
            passwordChange:p.target.value
        })
    }
  render() {
    return (
      <div className='container'>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" onChange={this.EmailChange} placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={this.PasswordChange} type="password" placeholder="Password" />
            </Form.Group>
            
            <Button variant="primary" type="submit" onClick={this.handleClick}>
                Submit
            </Button>
            </Form>
            <br />
            <hr />
            <br />
            <br />
            <Button variant='danger'>Clear</Button>
            <br />

            <div>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.state.emailChange}</td>
                            <td>{this.state.passwordChange}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>

      </div>
    )
  }
}
export default Event_Handler
