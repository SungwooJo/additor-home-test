
import React from 'react';
import ContentsSlides from './contents_slides';
import ContentsSlidesCtrl from './contents_slides_ctrl';
import { Row, Col } from 'react-bootstrap';

class ContentsContainer extends React.Component {

  render() {
    return (
      <div className="container">
        <Row>
          <Col md={12}>
            <ContentsSlides />
            <ContentsSlidesCtrl />
          </Col>
        </Row>
      </div>
    );
  }
}

export default ContentsContainer;