import React from 'react';
import '../App.css';
import testimonialJ from '../images/j.webp';
import testimonialV from '../images/v.webp';
import testimonialB from '../images/b.webp';
import { FaStar } from "react-icons/fa6";

function Testimonials() {
  return (
    <section className="testimonials">
      <h2 className="h2Title">Testimonials</h2>
      <div className="squaresTestimonials">

        <div className="squareTestimonial">
          <img src={testimonialJ} alt="" className="testimonialsImg" />
          <div className="stars">
            <FaStar className="starIcon"/>
            <FaStar className="starIcon"/>
            <FaStar className="starIcon"/>
            <FaStar className="starIcon"/>
            <FaStar className="starIcon"/>
          </div>
          <p className="SquareDescTestimonial">Every single detail and concern I had was addressed in a timely and professional manner. <span className="strong">I highly recommend them</span>.</p>
          <p className="squareTextTestimonial">Jen K, Hampstead</p>
        </div>

        <div className="squareTestimonial">
          <img src={testimonialV} alt="" className="testimonialsImg" />
          <div className="stars">
            <FaStar className="starIcon"/>
            <FaStar className="starIcon"/>
            <FaStar className="starIcon"/>
            <FaStar className="starIcon"/>
            <FaStar className="starIcon"/>
          </div>
          <p className="SquareDescTestimonial">Every single detail and concern I had was addressed in a timely and professional manner. <span className="strong">I highly recommend them</span>.</p>
          <p className="squareTextTestimonial">Jen K, Hampstead</p>
        </div>

        <div className="squareTestimonial">
          <img src={testimonialB} alt="" className="testimonialsImg" />
          <div className="stars">
            <FaStar className="starIcon"/>
            <FaStar className="starIcon"/>
            <FaStar className="starIcon"/>
            <FaStar className="starIcon"/>
            <FaStar className="starIcon"/>
          </div>
          <p className="SquareDescTestimonial">Every single detail and concern I had was addressed in a timely and professional manner. <span className="strong">I highly recommend them</span>.</p>
          <p className="squareTextTestimonial">Jen K, Hampstead</p>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;