import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, OverlayTrigger, Tooltip } from 'react-bootstrap';

function CustomHeader() {
    return (
      <Navbar collapseOnSelect>
          <Navbar.Header>
              <Navbar.Brand>
                  <a href="/"><img src="../../../images/elements/ui/logo_placeholder.png"/></a>
              </Navbar.Brand>
              <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
              <Nav>
                  <NavItem eventKey={1} href="#">Products</NavItem>
                  <NavItem eventKey={2} href="#">Latest winners</NavItem>
                  <NavItem eventKey={3} href="#">Hot products</NavItem>
              </Nav>
              <Nav pullRight>
                  <NavItem eventKey={1} className="language">
                      <OverlayTrigger placement="bottom"
                                      overlay={
                                          <Tooltip id="arabianLanguageSwitch">
                                              Switch to Arabian language
                                          </Tooltip>
                                      }>
                          <img src="/images/elements/countries/saudiArabia.png"/>
                      </OverlayTrigger>
                      <OverlayTrigger placement="bottom"
                                      overlay={
                                          <Tooltip id="russianLanguageSwitch">
                                              Switch to Russian language
                                          </Tooltip>
                                      }>
                          <img src="/images/elements/countries/russia.png"/>
                      </OverlayTrigger>
                  </NavItem>
                  <NavItem eventKey={2} href="#">Help</NavItem>
                  <NavItem eventKey={3} href="#">Contact US</NavItem>
                  <NavDropdown id="myProfile" eventKey={4} title="My profile">
                      <MenuItem eventKey={4.1}>Sign in</MenuItem>
                      <MenuItem eventKey={4.2}>Sign up</MenuItem>
                  </NavDropdown>
              </Nav>
          </Navbar.Collapse>
      </Navbar>
    );
}

export default CustomHeader;
