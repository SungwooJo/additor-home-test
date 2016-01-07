
import React from 'react';
import { Col } from 'react-bootstrap';

class HomeHeader extends React.Component {

  render() {
    return (
      <header>
        <div className="container">
          <Col sm={4}>
            <a href="http://additor.in">
              <img src="images/logo.png" style={{width: 150, height: 'auto'}} />
            </a>
          </Col>
          <Col sm={4}>
          </Col>
          <Col sm={4} className="text-right">
            <a href="#" ><i className="fa fa-navicon fa-1x nav_slide_button" /></a>
          </Col>
        </div>
      </header>
    );
  }
}

export default HomeHeader;