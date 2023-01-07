import React from 'react';
import './newsletter.css';

const Newsletter = () => {
  return (
    <div className="newsletter-section">

        <div className="newsletter-intro__container">
            <h1>Always First!</h1>
            <p>Sign up to The Witcher newsletter.</p>
        </div>

        <div className="newsletter-content__container">

            <div className="newsletter-input__container">
                <input type="email" className="newsletter-input" placeholder="Enter your email address"/>
                <p>By submitting an email you will receive news, special offers and other information from the website.</p>
                <p>The creator will be responsible for your data. Please check Privacy Policy to learn more.</p>
                <div className="newsletter-button__container">
                    <button type="button">SUBMIT</button>
                </div>
            </div>


        </div>

    </div>
  )
}

export default Newsletter