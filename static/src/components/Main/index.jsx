/**
 * Created by Dima Graebert on 2/18/2017.
 */
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import Latest from '../Latest';
import HotProducts from '../HotProducts';
import '../../../styles/stylesheet.scss';

export default function Main() {
    return (
        <div className="page-content">
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
                    <Latest />
                </Col>
            </Row>
            <Row className="section Hot">
                <h3 className="title">Hot products</h3>
                <Col xs={12} className="content">
                    <HotProducts />
                </Col>
            </Row>
        </div>
    );
}
