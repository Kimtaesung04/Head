import React from 'react';
import { Nav, Navbar, Container }  from 'react-bootstrap';
import "./navStyle/navBarStyle.scss";

const NavBarElements = () => {

    return (
        <>
        <Navbar>
            <Container>
                <Nav variant="underline" className="fs-5 pt-2">
                    <Nav.Item className="ps-1 pe-4">
                        <Nav.Link href="/" className='navFontStyle'>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="px-4">
                        <Nav.Link href="/AboutMe" className='navFontStyle'>About Me</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="px-4">
                        <Nav.Link href="/Projects" className='navFontStyle'>Projects</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
        </>
    )
}

export default NavBarElements