import React from 'react';
import {Col, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
import {browserHistory} from 'react-router';

export default function ProductsList() {
    return (
        <div className="page-content productsList">
            <div className="container">
                <Col xs={12}>
                    <Col xs={12} sm={4} md={2} className="sidebar">
                        <form>
                            <FormGroup>
                                <ControlLabel>Filter</ControlLabel>
                                <FormControl type="text"/>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Filter</ControlLabel>
                                <FormControl type="text"/>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Filter</ControlLabel>
                                <FormControl type="text"/>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Filter</ControlLabel>
                                <FormControl type="text"/>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Filter</ControlLabel>
                                <FormControl type="text"/>
                            </FormGroup>
                            <FormGroup>
                                <Button type="submit" bsStyle="success">Submit</Button>
                            </FormGroup>

                        </form>
                    </Col>
                    <Col xs={12} sm={9} className="products">
                        <Col xs={6} sm={4} className="productCard">
                            <img src="/images/elements/products/1.png"/>
                            <div className="name">
                                <a href="#" onClick={()=> {
                                    browserHistory.push('/products/1');
                                }}>
                                    {'Demo product'}
                                </a>
                            </div>
                            <div className="prices">
                                <div className="lotteryPrice">
                                    <span className="price"> <strong>20</strong>{' tickets'}</span>
                                    <span className="action"> <Button bsStyle="danger">Participate</Button></span>
                                </div>
                                <div className="realPrice">
                                    <span className="price"> <strong>1300</strong>$</span>
                                    <span className="action"><Button bsStyle="info">Buy</Button></span>
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} sm={4} className="productCard">
                            <img src="/images/elements/products/1.png"/>
                            <div className="name">
                                <a href="#" onClick={()=> {
                                    browserHistory.push('/products/1');
                                }}>
                                    {'Demo product'}
                                </a>
                            </div>
                            <div className="prices">
                                <div className="lotteryPrice">
                                    <span className="price"> <strong>20</strong>{' tickets'}</span>
                                    <span className="action"> <Button bsStyle="danger">Participate</Button></span>
                                </div>
                                <div className="realPrice">
                                    <span className="price"> <strong>1300</strong>$</span>
                                    <span className="action"><Button bsStyle="info">Buy</Button></span>
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} sm={4} className="productCard">
                            <img src="/images/elements/products/1.png"/>
                            <div className="name">
                                <a href="#" onClick={()=> {
                                    browserHistory.push('/products/1');
                                }}>
                                    {'Demo product'}
                                </a>
                            </div>
                            <div className="prices">
                                <div className="lotteryPrice">
                                    <span className="price"> <strong>20</strong>{' tickets'}</span>
                                    <span className="action"> <Button bsStyle="danger">Participate</Button></span>
                                </div>
                                <div className="realPrice">
                                    <span className="price"> <strong>1300</strong>$</span>
                                    <span className="action"><Button bsStyle="info">Buy</Button></span>
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} sm={4} className="productCard">
                            <img src="/images/elements/products/1.png"/>
                            <div className="name">
                                <a href="#" onClick={()=> {
                                    browserHistory.push('/products/1');
                                }}>
                                    {'Demo product'}
                                </a>
                            </div>
                            <div className="prices">
                                <div className="lotteryPrice">
                                    <span className="price"> <strong>20</strong>{' tickets'}</span>
                                    <span className="action"> <Button bsStyle="danger">Participate</Button></span>
                                </div>
                                <div className="realPrice">
                                    <span className="price"> <strong>1300</strong>$</span>
                                    <span className="action"><Button bsStyle="info">Buy</Button></span>
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} sm={4} className="productCard">
                            <img src="/images/elements/products/1.png"/>
                            <div className="name">
                                <a href="#" onClick={()=> {
                                    browserHistory.push('/products/1');
                                }}>
                                    {'Demo product'}
                                </a>
                            </div>
                            <div className="prices">
                                <div className="lotteryPrice">
                                    <span className="price"> <strong>20</strong>{' tickets'}</span>
                                    <span className="action"> <Button bsStyle="danger">Participate</Button></span>
                                </div>
                                <div className="realPrice">
                                    <span className="price"> <strong>1300</strong>$</span>
                                    <span className="action"><Button bsStyle="info">Buy</Button></span>
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} sm={4} className="productCard">
                            <img src="/images/elements/products/1.png"/>
                            <div className="name">
                                <a href="#" onClick={()=> {
                                    browserHistory.push('/products/1');
                                }}>
                                    {'Demo product'}
                                </a>
                            </div>
                            <div className="prices">
                                <div className="lotteryPrice">
                                    <span className="price"> <strong>20</strong>{' tickets'}</span>
                                    <span className="action"> <Button bsStyle="danger">Participate</Button></span>
                                </div>
                                <div className="realPrice">
                                    <span className="price"> <strong>1300</strong>$</span>
                                    <span className="action"><Button bsStyle="info">Buy</Button></span>
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} sm={4} className="productCard">
                            <img src="/images/elements/products/1.png"/>
                            <div className="name">
                                <a href="#" onClick={()=> {
                                    browserHistory.push('/products/1');
                                }}>
                                    {'Demo product'}
                                </a>
                            </div>
                            <div className="prices">
                                <div className="lotteryPrice">
                                    <span className="price"> <strong>20</strong>{' tickets'}</span>
                                    <span className="action"> <Button bsStyle="danger">Participate</Button></span>
                                </div>
                                <div className="realPrice">
                                    <span className="price"> <strong>1300</strong>$</span>
                                    <span className="action"><Button bsStyle="info">Buy</Button></span>
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} sm={4} className="productCard">
                            <img src="/images/elements/products/1.png"/>
                            <div className="name">
                                <a href="#" onClick={()=> {
                                    browserHistory.push('/products/1');
                                }}>
                                    {'Demo product'}
                                </a>
                            </div>
                            <div className="prices">
                                <div className="lotteryPrice">
                                    <span className="price"> <strong>20</strong>{' tickets'}</span>
                                    <span className="action"> <Button bsStyle="danger">Participate</Button></span>
                                </div>
                                <div className="realPrice">
                                    <span className="price"> <strong>1300</strong>$</span>
                                    <span className="action"><Button bsStyle="info">Buy</Button></span>
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} sm={4} className="productCard">
                            <img src="/images/elements/products/1.png"/>
                            <div className="name">
                                <a href="#" onClick={()=> {
                                    browserHistory.push('/products/1');
                                }}>
                                    {'Demo product'}
                                </a>
                            </div>
                            <div className="prices">
                                <div className="lotteryPrice">
                                    <span className="price"> <strong>20</strong>{' tickets'}</span>
                                    <span className="action"> <Button bsStyle="danger">Participate</Button></span>
                                </div>
                                <div className="realPrice">
                                    <span className="price"> <strong>1300</strong>$</span>
                                    <span className="action"><Button bsStyle="info">Buy</Button></span>
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} sm={4} className="productCard">
                            <img src="/images/elements/products/1.png"/>
                            <div className="name">
                                <a href="#" onClick={()=> {
                                    browserHistory.push('/products/1');
                                }}>
                                    {'Demo product'}
                                </a>
                            </div>
                            <div className="prices">
                                <div className="lotteryPrice">
                                    <span className="price"> <strong>20</strong>{' tickets'}</span>
                                    <span className="action"> <Button bsStyle="danger">Participate</Button></span>
                                </div>
                                <div className="realPrice">
                                    <span className="price"> <strong>1300</strong>$</span>
                                    <span className="action"><Button bsStyle="info">Buy</Button></span>
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} sm={4} className="productCard">
                            <img src="/images/elements/products/1.png"/>
                            <div className="name">
                                <a href="#" onClick={()=> {
                                    browserHistory.push('/products/1');
                                }}>
                                    {'Demo product'}
                                </a>
                            </div>
                            <div className="prices">
                                <div className="lotteryPrice">
                                    <span className="price"> <strong>20</strong>{' tickets'}</span>
                                    <span className="action"> <Button bsStyle="danger">Participate</Button></span>
                                </div>
                                <div className="realPrice">
                                    <span className="price"> <strong>1300</strong>$</span>
                                    <span className="action"><Button bsStyle="info">Buy</Button></span>
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} sm={4} className="productCard">
                            <img src="/images/elements/products/1.png"/>
                            <div className="name">
                                <a href="#" onClick={()=> {
                                    browserHistory.push('/products/1');
                                }}>
                                    {'Demo product'}
                                </a>
                            </div>
                            <div className="prices">
                                <div className="lotteryPrice">
                                    <span className="price"> <strong>20</strong>{' tickets'}</span>
                                    <span className="action"> <Button bsStyle="danger">Participate</Button></span>
                                </div>
                                <div className="realPrice">
                                    <span className="price"> <strong>1300</strong>$</span>
                                    <span className="action"><Button bsStyle="info">Buy</Button></span>
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} sm={4} className="productCard">
                            <img src="/images/elements/products/1.png"/>
                            <div className="name">
                                <a href="#" onClick={()=> {
                                    browserHistory.push('/products/1');
                                }}>
                                    {'Demo product'}
                                </a>
                            </div>
                            <div className="prices">
                                <div className="lotteryPrice">
                                    <span className="price"> <strong>20</strong>{' tickets'}</span>
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
        </div>
    );
}
