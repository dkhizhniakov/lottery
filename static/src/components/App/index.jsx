/**
 * Created by Dima Graebert on 2/18/2017.
 */
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import Header from '../Header';
import Latest from '../Latest';
import HotProducts from '../HotProducts';
import WebsocketStore from '../../stores/WebsocketStore';
import WebsocketActions from '../../actions/WebsocketActions';
import '../../../styles/stylesheet.scss';

export default class App extends Component {
    componentDidMount() {
        WebsocketStore.addChangeListener(this.onWS);
        WebsocketActions.connect('ws://localhost:3000');
    }

    componentWillUnmount() {
        WebsocketStore.removeChangeListener(this.onWS);
    }

    render() {
        return (
          <div className="App">
              <Header/>
              <Row className="section About">
                  <h3 className="title">Lottery promo</h3>
                  <Col xs={12} className="content">
                  <span className="promoText">
                  {'Here should go some nice website text'}
                  </span>
                  </Col>
              </Row>
              <Row className="section Latest">
                  <h3 className="title">Latest winners</h3>
                  <Col xs={12} className="content">
                      <Latest/>
                  </Col>
              </Row>
              <Row className="section Hot">
                  <h3 className="title">Hot products</h3>
                  <Col xs={12} className="content">
                      <HotProducts/>
                  </Col>
              </Row>
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

    onWS() {
        WebsocketActions.postMessage(JSON.stringify({ test: 'test' }));
    }
}
