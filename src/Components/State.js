import React, { Component } from 'react'
import { Button,Accordion,Alert,Badge,Breadcrumb,ButtonGroup,Card,Carousel,CloseButton,Dropdown,Figure,Image,ListGroup,Modal,Nav, Navbar,Offcanvas, Overlay, Pagination,Placeholder, Popover, ProgressBar, Spinner, Table, Tab, Tooltip, Toast} from 'react-bootstrap';





export default class State extends Component {

constructor(props) {
  super(props)

  this.state = {
     count : 0
  }
}
ClickHandleInc =()=>{
    this.setState({
        count : this.state.count+1
    })
}
ClickHandleDec =()=>{
    this.setState({
        count : this.state.count-1
    })
}





  render() {
     var {count, desc} = this.state
    return (
      <div className='text-center 'style={{margin:"auto", width:"40%"}}>
        <Card className='bg-dark text-white' style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>Control Counting</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Count: {count}</Card.Subtitle>
            
            <Button className='m-3' onClick={this.ClickHandleInc}>+</Button>
            <Button onClick={this.ClickHandleDec} disabled={count===0 ? true:false}>-</Button>
        </Card.Body>
        </Card>
        
        </div>
    )
  }
}
