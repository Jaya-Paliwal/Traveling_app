import React from "react";
import styled from "styled-components";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="title">
        <h2>Happy Customers</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>
          Booked a package tour of Goa everything was too good team is very positive and responsive . All thanks to Mr RP Singh , thanks for wonderful experience
          </p>
          <div className="info">
            <img src={pic1} alt="" />
            <div className="details">
              <h4>Pranathi Prem</h4>
              <span>Nagpur</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
          Tour was very well planned and executed by chamodi from Active Adventure Lanka. Chauffeur who was provided was chauffeur/Guide too. well experienced a person. Thankyou chamodi & Titus for making my trip safe and memorable.
          </p>
          <div className="info">
            <img src={pic2} alt="" />
            <div className="details">
              <h4>Harika Reddy</h4>
              <span>Pune</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
          The trip was awesome,we visited many beautiful places in srilanka, chauffer was great and helpful, Chamodi called every day to know about the trip and any complaints I have, she beautifully arranged everything. I am so happy with the trip
          </p>
          <div className="info">
            <img src={pic3} alt="" />
            <div className="details">
              <h4>Akhil Sinha</h4>
              <span>Lucknow</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
          width: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;