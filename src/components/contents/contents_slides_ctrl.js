
import React from 'react';
import { Col } from 'react-bootstrap';


class ContentsSlidesCtrl extends React.Component {

  handleClickPrev(event) {
    event.preventDefault();
    $('#secondSlider').flexslider("prev");
  }

  handleClickNext(event) {
    event.preventDefault();
    $('#secondSlider').flexslider("next");
  }

  render() {
    return (
      <Col md={1} mdOffset={11} className="text-right controls">
        <a href="prev" ref="test" className="prev" onClick={this.handleClickPrev} ><i className="fa fa-angle-left fa-3x" /></a>
        <a href="next" className="next" onClick={this.handleClickNext} ><i className="fa fa-angle-right fa-3x" /></a>
      </Col>
    );
  }
}

export default ContentsSlidesCtrl;