import React from 'react';
import {Navbar, Nav, NavItem, NavDropdown, Button, OverlayTrigger, Tooltip} from 'react-bootstrap';
import {browserHistory} from 'react-router';

export default function CustomHeader() {
    return (
        <Navbar collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="/"><img src="../../../images/elements/ui/logo_placeholder.png" alt="logo"/></a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1} href="#" onClick={()=> {
                        browserHistory.push('/products');
                    }}>Products</NavItem>
                    <NavItem eventKey={2} href="#">Latest winners</NavItem>
                    <NavItem eventKey={3} href="#">Hot products</NavItem>
                </Nav>
                <Nav pullRight>
                    <NavItem eventKey={1} className="language">
                        <OverlayTrigger
                            placement="bottom"
                            overlay={
                                <Tooltip id="arabianLanguageSwitch">
                                    Switch to Arabian language
                                </Tooltip>
                            }
                        >
                            <img src="/images/elements/countries/saudiArabia.png" alt="Arabian language"/>
                        </OverlayTrigger>
                        <OverlayTrigger
                            placement="bottom"
                            overlay={
                                <Tooltip id="russianLanguageSwitch">
                                    Switch to Russian language
                                </Tooltip>
                            }
                        >
                            <img src="/images/elements/countries/russia.png" alt="Russian language"/>
                        </OverlayTrigger>
                    </NavItem>
                    <NavItem eventKey={2} href="#">Help</NavItem>
                    <NavItem eventKey={3} href="#">Contact US</NavItem>
                    <NavDropdown id="myProfile" eventKey={4} title="My profile">
                        <div className="userMenu">
                            <div className="photo">
                                <img src="/images/elements/ui/avatar1.svg" className="avatar"/>
                            </div>
                            <div className="userInfo">
                                <span className="name">{'Test user'}</span>
                                <span className="tickets">{'You have '}<strong>10</strong>{' tickets left'}</span>
                                <div className="actions">
                                    <Button bsStyle="success" onClick={()=> {
                                        browserHistory.push('/buy');
                                    }}>Buy tickets</Button>
                                </div>
                                <div className="actions">
                                    <Button bsStyle="info" onClick={()=> {
                                        browserHistory.push('/profile');
                                    }}>Open my profile</Button>
                                </div>
                            </div>
                        </div>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
