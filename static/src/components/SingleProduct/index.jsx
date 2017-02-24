import React from "react";
import {Col, Button, Nav, NavItem} from "react-bootstrap";
import Timer from "react.timer";

export default function SingleProduct() {
    return (
        <div className="page-content singleProduct">
            <div className="container">
                <Col xs={12}>
                    <Col xs={12} sm={8} className="productCard">
                        <div className="name">
                            {'Demo product'}
                        </div>
                        <div className="image">
                            <img src="/images/elements/products/1.png" alt="Demo product"/>
                        </div>
                    </Col>
                    <Col xs={12} sm={4}>
                        <Col xs={12} className="sidebar">
                            <div className="prices">
                                <div className="lotteryPrice">
                                    <span className="price">
                                        <strong>20</strong>{' tickets'}
                                        <br/>
                                        {'Lottery ends in '}
                                        <span className="timer"><Timer countDown startTime={60}/></span>
                                        {' seconds'}
                                    </span>
                                    <span className="action"> <Button bsStyle="danger">Participate</Button></span>
                                </div>
                                <div className="realPrice">
                                    <span className="price"> <strong>1300</strong>$</span>
                                    <span className="action"><Button bsStyle="info">Buy</Button></span>
                                </div>
                            </div>
                        </Col>
                    </Col>
                </Col>
            </div>
            <Col xs={12} className="detailedInfo">
                <div className="container">
                    <Nav bsStyle="tabs" activeKey="1">
                        <NavItem eventKey="1">About</NavItem>
                        <NavItem eventKey="2">Details</NavItem>
                        <NavItem eventKey="3">Legal info?..</NavItem>
                    </Nav>
                </div>
                <Col xs={12} className="tab-content">
                    <div className="container">
                        {'Here will go some additional product information'}
                    </div>
                </Col>
            </Col>
        </div>
    );
}
