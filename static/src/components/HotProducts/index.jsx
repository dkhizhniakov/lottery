import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function HotProducts() {
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
        <div><img src="/images/elements/products/1.png" alt="product_img_1" /><h3>1</h3></div>
        <div><img src="/images/elements/products/2.png" alt="product_img_1" /><h3>2</h3></div>
        <div><img src="/images/elements/products/3.png" alt="product_img_1" /><h3>3</h3></div>
        <div><img src="/images/elements/products/2.png" alt="product_img_1" /><h3>4</h3></div>
        <div><img src="/images/elements/products/3.png" alt="product_img_1" /><h3>5</h3></div>
        <div><img src="/images/elements/products/1.png" alt="product_img_1" /><h3>6</h3></div>
        <div><img src="/images/elements/products/2.png" alt="product_img_1" /><h3>7</h3></div>
        <div><img src="/images/elements/products/3.png" alt="product_img_1" /><h3>8</h3></div>
        <div><img src="/images/elements/products/2.png" alt="product_img_1" /><h3>9</h3></div>
        <div><img src="/images/elements/products/2.png" alt="product_img_1" /><h3>10</h3></div>
        <div><img src="/images/elements/products/3.png" alt="product_img_1" /><h3>11</h3></div>
        <div><img src="/images/elements/products/1.png" alt="product_img_1" /><h3>12</h3></div>
        <div><img src="/images/elements/products/1.png" alt="product_img_1" /><h3>13</h3></div>
        <div><img src="/images/elements/products/2.png" alt="product_img_1" /><h3>14</h3></div>
        <div><img src="/images/elements/products/3.png" alt="product_img_1" /><h3>15</h3></div>
      </Slider>
    );
}
