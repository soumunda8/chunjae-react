import React from 'react'
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Footer.scss'

const Footer = () => {
    return (
        <>

            <Container>

                <Stack direction="horizontal" gap={3}>
                    <div className="p-2">First item</div>
                    <div className="p-2">Second item</div>
                    <div className="p-2">Third item</div>
                    <Navbar expand="lg" className="bg-body-tertiary">
                        <Container>
                            <Navbar.Brand href="#">First item</Navbar.Brand>
                            <Navbar.Brand href="#">Second item</Navbar.Brand>
                            <Navbar.Brand href="#">Third item</Navbar.Brand>
                        </Container>
                    </Navbar>
                </Stack>
        
            </Container>
        </>
    )
}

export default Footer