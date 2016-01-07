
import React from 'react';
import { Row, Col } from 'react-bootstrap';

class HomeMainTitle extends React.Component {
  render() {
    return (
      <Row>
        <Col md={8} mdOffset={2} style={{textAlign: 'center'}}>
          <br /><br />
          <h1 className="animated bounceInDown"><strong>Linking the Linked</strong></h1>
          <p className="animated fadeInUpDelay">Rate, comment, and annotate any web page.
          </p>
        </Col>
      </Row>
    );
  }
}

export default HomeMainTitle;