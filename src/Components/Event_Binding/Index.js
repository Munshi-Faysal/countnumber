import React, { Component } from 'react'
import { Button,Accordion,Alert,Badge,Breadcrumb,ButtonGroup,Card,Carousel,CloseButton,Dropdown,Figure,Image,ListGroup,Modal,Nav, Navbar,Offcanvas, Overlay, Pagination,Placeholder, Popover, ProgressBar, Spinner, Table, Tab, Tooltip, Toast} from 'react-bootstrap';

 class EventBinding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        count:0
      }
      this.IncreaseBtn=this.IncreaseBtn.bind(this);
    }
    IncreaseBtn=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <Button onClick={this.IncreaseBtn.bind(this)}>Increase</Button>
      </div>
    )
  }
}
export default EventBinding
