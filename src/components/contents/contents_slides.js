
import React from 'react';
import { Col } from 'react-bootstrap';

class ContentsSlides extends React.Component {

  render() {
    return (
      <div id="secondSlider">
        <ul className="slides">
          <li>
            <Col md={4}>
              <div className="flat-box">
                <div className="colourway colour1" />
                <p className="title">How to start a startup</p>
                <p className="feature-text">Startup is not just about the business but the life itself.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="flat-box">
                <div className="colourway colour2" />
                <p className="title">Lean startup</p>
                <p className="feature-text">It is very important for many startups to remember their own vision and mission.</p>
              </div>
            </Col>
            <Col md={4} className="design-content">
              <h1>So easy that you can addit in a minute</h1>
              <p>Additor is the whole new way to surf websites and communicate with other users on the web.</p>
            </Col>
          </li>
          <li>
            <Col md={4}>
              <div className="flat-box">
                <div className="colourway colour3" />
                <p className="title">Extra Startup Juice</p>
                <p className="feature-text">What a nice juice.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="flat-box">
                <div className="colourway colour4" />
                <p className="title">Iron Man</p>
                <p className="feature-text">Wow</p>
              </div>
            </Col>
            <Col md={4} className="design-content">
              <h1>Communicate with the like-minded or the naturally linked</h1>
              <p>From movie to news, whatever you see on the web is the content that you and additors could talk about.</p>
            </Col>
          </li>
        </ul>
      </div>
    );
  }
}

export default ContentsSlides;
