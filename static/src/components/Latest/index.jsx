import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import WinnersStore from '../../stores/WinnersStore';

export default class Latest extends Component {

    constructor() {
        super();
        this.onWinners = this.onWinners.bind(this);
    }

    componentDidMount() {
        WinnersStore.addChangeListener(this.onWinners);
    }

    render() {
        return (
          <Table responsive condensed className="latestWinners">
              <thead>
              <tr>
                  <th>Product</th>
                  <th>Winner</th>
                  <th>No. of tickets</th>
                  <th>No. of participants</th>
              </tr>
              </thead>
              <tbody>
              {WinnersStore.getWinners().map((winner)=>
                (
                  <tr>
                      <td><img className="product"
                               src={`/images/elements/products/${winner.product.id}.png`}/>{winner.product.name}</td>
                      <td><img className="avatar"
                               src={`/images/elements/ui/avatar${winner.user.avatar}.svg`}/> {winner.user.name}</td>
                      <td>{winner.lot.winnerTickets}</td>
                      <td>{winner.lot.participants}</td>
                  </tr>
                )
              )}
              </tbody>
          </Table>
        );
    }

    onWinners() {
        this.forceUpdate();
    }
}
