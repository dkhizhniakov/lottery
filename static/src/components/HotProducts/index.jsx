import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class HotProducts extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            arrows: true,
            draggable: false,
            slidesToShow: 3,
            slidesToScroll: 1,
        };
        return (
          <Slider {...settings}>
              <div><img src="/images/elements/products/1.png"/><h3>1</h3></div>
              <div><img src="/images/elements/products/2.png"/><h3>2</h3></div>
              <div><img src="/images/elements/products/3.png"/><h3>3</h3></div>
              <div><img src="/images/elements/products/2.png"/><h3>4</h3></div>
              <div><img src="/images/elements/products/3.png"/><h3>5</h3></div>
              <div><img src="/images/elements/products/1.png"/><h3>6</h3></div>
              <div><img src="/images/elements/products/2.png"/><h3>7</h3></div>
              <div><img src="/images/elements/products/3.png"/><h3>8</h3></div>
              <div><img src="/images/elements/products/2.png"/><h3>9</h3></div>
              <div><img src="/images/elements/products/2.png"/><h3>10</h3></div>
              <div><img src="/images/elements/products/3.png"/><h3>11</h3></div>
              <div><img src="/images/elements/products/1.png"/><h3>12</h3></div>
              <div><img src="/images/elements/products/1.png"/><h3>13</h3></div>
              <div><img src="/images/elements/products/2.png"/><h3>14</h3></div>
              <div><img src="/images/elements/products/3.png"/><h3>15</h3></div>
          </Slider>
        );
    }
}
