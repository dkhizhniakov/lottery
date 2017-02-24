/**
 * Created by Dima Graebert on 2/18/2017.
 */
import React, {Component} from 'react';
import {Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import Header from '../Header';
import WebsocketStore from '../../stores/WebsocketStore';
import WebsocketActions from '../../actions/WebsocketActions';
import '../../../styles/stylesheet.scss';

export default class App extends Component {
    static onWS() {
        WebsocketActions.postMessage(JSON.stringify({test: 'test'}));
    }

    componentDidMount() {
        WebsocketStore.addChangeListener(App.onWS);
        WebsocketActions.connect('ws://localhost:3000/ws');
    }

    componentWillUnmount() {
        WebsocketStore.removeChangeListener(App.onWS);
        WebsocketActions.disconnect();
    }

    render() {
        return (
            <div className="App">
                <Header />
                {this.props.children}
                <footer>
                    <Col xs={12} sm={4}>
                        <h4>About</h4>
                        <ul>
                            <li><a>Company info</a></li>
                            <li><a>Offices</a></li>
                            <li><a>Contacts</a></li>
                        </ul>
                    </Col>
                    <Col xs={12} sm={4}>
                        <h4>Products</h4>
                        <ul>
                            <li><a>Hot</a></li>
                            <li><a>Latest</a></li>
                            <li><a>By categories</a></li>
                        </ul>
                    </Col>
                    <Col xs={12} sm={4}>
                        <h4>Help</h4>
                        <ul>
                            <li><a>Contacts</a></li>
                            <li><a>Online help</a></li>
                        </ul>
                    </Col>
                </footer>
            </div>
        );
    }
}
