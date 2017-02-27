import React, {Component} from 'react';
import {Col, FormGroup, Row, Button} from 'react-bootstrap';
import {browserHistory} from 'react-router';

export default class ProfilePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 1,
        };
    }

    changeTab(n) {
        this.setState({
            selectedTab: n,
        })
    }

    render() {
        return (
            <div className="page-content profile">
                <div className="container">
                    <Col xs={12}>
                        <div className="card hovercard">
                            <div className="card-background">
                                <img className="card-bkimg" alt="profile_background"
                                     src="/images/elements/ui/avatar1.svg"/>
                            </div>
                            <div className="useravatar">
                                <img alt="Demo User" src="/images/elements/ui/avatar1.svg"/>
                            </div>
                            <div className="card-info"><span className="card-title">Demo User</span>
                            </div>
                        </div>
                        <div className="btn-pref btn-group btn-group-justified btn-group-lg" role="group">
                            <div className="btn-group" role="group">
                                <button type="button" id="basic"
                                        className={`btn ${(this.state.selectedTab === 1 ? 'btn-primary' : 'btn-default')}`}
                                        onClick={() => {
                                            this.changeTab(1);
                                        }}>
                                    <span className="glyphicon glyphicon-star"/>
                                    <div className="hidden-xs">Basic Info</div>
                                </button>
                            </div>
                            <div className="btn-group" role="group">
                                <button type="button" id="history"
                                        className={`btn ${(this.state.selectedTab === 2 ? 'btn-primary' : 'btn-default')}`}
                                        onClick={() => {
                                            this.changeTab(2);
                                        }}>
                                    <span className="glyphicon glyphicon-heart"/>
                                    <div className="hidden-xs">History of lotteries</div>
                                </button>
                            </div>
                            <div className="btn-group" role="group">
                                <button type="button" id="wish"
                                        className={`btn ${(this.state.selectedTab === 3 ? 'btn-primary' : 'btn-default')}`}
                                        onClick={() => {
                                            this.changeTab(3);
                                        }}>
                                    <span className="glyphicon glyphicon-user"/>
                                    <div className="hidden-xs">Wish list</div>
                                </button>
                            </div>
                        </div>
                        <div className="well">
                            <div className="tab-content">
                                <div className={`tab-pane fade in ${(this.state.selectedTab === 1 ? 'active' : '')}`}
                                     id="tab1">
                                    <Col xs={12} sm={4} smOffset={4}
                                         style={{display: 'block', clear: 'both', float: 'none'}}>
                                        <h3>Basic information</h3>
                                        <form>
                                            <FormGroup>
                                    <span className="input input--hoshi">
                                    <input className="input__field input__field--hoshi" type="email"/>
                                    <label className="input__label input__label--hoshi input__label--hoshi-color-1">
                                        <span className="input__label-content input__label-content--hoshi">Email</span>
                                    </label>
                                </span>
                                            </FormGroup>
                                            <FormGroup>
                                        <span className="input input--hoshi">
                                    <input className="input__field input__field--hoshi" type="password"/>
                                    <label className="input__label input__label--hoshi input__label--hoshi-color-1">
                                        <span
                                            className="input__label-content input__label-content--hoshi">Password</span>
                                    </label>
                                </span>
                                            </FormGroup>
                                            <FormGroup>
                                        <span className="input input--hoshi">
                                    <input className="input__field input__field--hoshi" type="password"/>
                                    <label className="input__label input__label--hoshi input__label--hoshi-color-1">
                                        <span className="input__label-content input__label-content--hoshi">Retype password</span>
                                    </label>
                                </span>
                                            </FormGroup>
                                            <FormGroup>
                                        <span className="input input--hoshi">
                                    <input className="input__field input__field--hoshi" type="text"/>
                                    <label className="input__label input__label--hoshi input__label--hoshi-color-1">
                                        <span className="input__label-content input__label-content--hoshi">Adress</span>
                                    </label>
                                </span>
                                            </FormGroup>
                                            <FormGroup>
                                                <Button bsStyle="success">Save</Button>
                                            </FormGroup>
                                        </form>
                                    </Col>
                                </div>
                                <div className={`tab-pane fade in ${(this.state.selectedTab === 2 ? 'active' : '')}`}
                                     id="tab2">
                                    <h3>History of lotteries</h3>
                                    <ul className="cbp_tmtimeline">
                                        <li className="won">
                                            <time className="cbp_tmtime" dateTime="2013-04-10 18:30">
                                                <span>4/10/13</span> <span>18:30</span></time>
                                            <div className="cbp_tmicon cbp_tmicon-phone"/>
                                            <div className="cbp_tmlabel">
                                                <h2>Won product 1</h2>
                                                <p>10 tickets used</p>
                                            </div>
                                        </li>
                                        <li className="lost">
                                            <time className="cbp_tmtime" dateTime="2013-04-11T12:04">
                                                <span>4/11/13</span> <span>12:04</span></time>
                                            <div className="cbp_tmicon cbp_tmicon-screen"/>
                                            <div className="cbp_tmlabel">
                                                <h2>Lost product 2</h2>
                                                <p>12 tickets used</p>
                                            </div>
                                        </li>
                                        <li className="won">
                                            <time className="cbp_tmtime" dateTime="2013-04-13 05:36">
                                                <span>4/13/13</span> <span>05:36</span></time>
                                            <div className="cbp_tmicon cbp_tmicon-mail"/>
                                            <div className="cbp_tmlabel">
                                                <h2>Won product 3</h2>
                                                <p>15 tickets used</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className={`tab-pane fade in ${(this.state.selectedTab === 3 ? 'active' : '')}`}
                                     id="tab3">
                                    <h3>Wish list</h3>
                                    <Row>
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
                                                    <span className="action"> <Button
                                                        bsStyle="danger">Participate</Button></span>
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
                                                    <span className="action"> <Button
                                                        bsStyle="danger">Participate</Button></span>
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
                                                    <span className="action"> <Button
                                                        bsStyle="danger">Participate</Button></span>
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
                                                    <span className="action"> <Button
                                                        bsStyle="danger">Participate</Button></span>
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
                                                    <span className="action"> <Button
                                                        bsStyle="danger">Participate</Button></span>
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
                                                    <span className="action"> <Button
                                                        bsStyle="danger">Participate</Button></span>
                                                </div>
                                                <div className="realPrice">
                                                    <span className="price"> <strong>1300</strong>$</span>
                                                    <span className="action"><Button bsStyle="info">Buy</Button></span>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </Col>
                </div>
            </div>
        );
    }
}
