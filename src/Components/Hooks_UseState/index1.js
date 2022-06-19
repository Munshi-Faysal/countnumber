import {React,useState} from 'react'
import { Button,Accordion,Alert,Badge,Breadcrumb,ButtonGroup,Card,Carousel,CloseButton,Dropdown,Figure,Image,ListGroup,Modal,Nav, Navbar,Offcanvas, Overlay, Pagination,Placeholder, Popover, ProgressBar, Spinner, Table, Tab, Tooltip, Toast} from 'react-bootstrap';

export default function HooksUseState() {
  const [count,setCount]=useState(0)
  const IncreaseBtn = () => {
    setCount(count+1)
  }

  return (
    
    <div>
        <h1>Count: {count}</h1>
        <Button onClick={IncreaseBtn}>Increase</Button>
      </div>
  )
}

