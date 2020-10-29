import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

function MyNavbar(props) {
    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand onClick={props.showHome}>KingFisher Kayaking</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                {/* <Nav.Link onClick={props.showRoutes}>Routes</Nav.Link> */}
                <Nav.Link onClick={props.showCalendar} >Booking</Nav.Link>
                {/* <Nav.Link onClick={props.showPrice}>Prices</Nav.Link> */}
                {/* <Nav.Link onClick={props.showPickup}>Pick Up Locations</Nav.Link> */}
                <Nav.Link onClick={props.showPickup}>Rivers</Nav.Link>

                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default MyNavbar;