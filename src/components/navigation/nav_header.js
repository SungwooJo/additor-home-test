import React from 'react';
import Nav from './nav';
import { Col, Row } from 'react-bootstrap';

class NavHeader extends React.Component {
  render() {
    return (
      <Row>
        <Col md={8} mdOffset={2} sm={8} smOffset={2} xs={8} xsOffset={2}>
          <Nav />
        </Col>
      </Row>
    );
  }
}

export default NavHeader;