import React, {Component} from 'react';
import {Col, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
import {browserHistory} from 'react-router';

export default class AuthenticationPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentMode: props.params.mode,
        };
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            currentMode: newProps.params.mode,
        });
    }

    render() {
        return (
            <div className="page-content productsList">
                <div className="container">
                    <Col xs={12}>
                        {this.state.currentMode === '0' ? (
                            <Col xs={12} sm={10} smOffset={1} md={6} mdOffset={3} className="authentication">
                                <h3>Sign in</h3>
                                <form>
                                <span className="input input--hoshi">
                                    <input className="input__field input__field--hoshi" type="email"/>
                                    <label className="input__label input__label--hoshi input__label--hoshi-color-1">
                                        <span className="input__label-content input__label-content--hoshi">Email</span>
                                    </label>
                                </span>
                                    <span className="input input--hoshi">
                                    <input className="input__field input__field--hoshi" type="password"/>
                                    <label className="input__label input__label--hoshi input__label--hoshi-color-1">
                                        <span
                                            className="input__label-content input__label-content--hoshi">Password</span>
                                    </label>
                                </span>
                                    <FormGroup>
                                        <Button bsStyle="success">Sign in</Button>
                                    </FormGroup>
                                    <span>Not yet signed up? <a href="#" onClick={()=> {
                                        browserHistory.push('/auth/1');
                                    }}>Sign up!</a></span>
                                </form>
                            </Col>
                        ) : (
                            <Col xs={12} sm={10} smOffset={1} md={6} mdOffset={3} className="authentication">
                                <h3>Sign up</h3>
                                <form>
                                <span className="input input--hoshi">
                                    <input className="input__field input__field--hoshi" type="email"/>
                                    <label className="input__label input__label--hoshi input__label--hoshi-color-1">
                                        <span className="input__label-content input__label-content--hoshi">Email</span>
                                    </label>
                                </span>
                                    <span className="input input--hoshi">
                                    <input className="input__field input__field--hoshi" type="password"/>
                                    <label className="input__label input__label--hoshi input__label--hoshi-color-1">
                                        <span
                                            className="input__label-content input__label-content--hoshi">Password</span>
                                    </label>
                                </span>
                                    <span className="input input--hoshi">
                                    <input className="input__field input__field--hoshi" type="password"/>
                                    <label className="input__label input__label--hoshi input__label--hoshi-color-1">
                                        <span
                                            className="input__label-content input__label-content--hoshi">Retype password</span>
                                    </label>
                                </span>
                                    <FormGroup>
                                        <Button bsStyle="success">Sign up</Button>
                                    </FormGroup>
                                    <span>Already signed up? <a href="#" onClick={()=> {
                                        browserHistory.push('/auth/0');
                                    }}>Sign in!</a></span>
                                </form>
                            </Col>
                        )}

                    </Col>
                </div>
            </div>
        );
    }
}
