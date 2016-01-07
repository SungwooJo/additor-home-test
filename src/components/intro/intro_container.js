
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class IntroContainer extends React.Component {

  render() {

    return(
      <div className="container">

        <Row>
          <Col md={6} className="wp1">
            <h1>
              <span style={{color: '#EC5D57'}}>Addit,</span> rather than edit !
            </h1>
            <p>Super simple and easy.
              <br />Addit means to rate, comment, and annotate.
              <br />You can be a great additor in every web page.
              <br />Believe in the power of collective intelligence.
            </p>
            <h2>
              <span style={{color: '#EC5D57'}}>Additor.in#</span>Whatever!
            </h2>
            <p>If you want to meet other additors,
              <br />just remember to put 'additor.in#' before the URL.
              <br />Every single web page is a Hashtag, which connects you to additors.
              <br />Additor links you to the already linked. </p><p />
            <a href="#" className="download-btn">Addit Now</a>
          </Col>
        </Row>

      </div>
    );
  }
}

export default IntroContainer;