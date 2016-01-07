
import React from 'react';
import { Grid, Row, Col} from 'react-bootstrap';

class FooterContainer extends React.Component {
  render() {
    return (
      <Grid className="container">
        <Row>
          <Col md={6}>
            <p>Additor는 철학하는 IT 회사입니다.<br />동시대인들로 하여금 진실된 소통을 통해, 진정한 자아를 발견하는 데에 기여하고자 합니다.</p>
          </Col>
          <Col md={6} style={{textAlign: 'right'}}>
            <p><b>Contact l</b><br /><a href="mailto:info@additor.in" style={{color: '#EC5D57'}}>info@additor.in</a></p>
          </Col>
          {/*
           <div class="col-md-2 col-md-offset-3">
           <ul class="footer-nav">
           <li><a href="#">Get Started Tutorial</a></li>
           <li><a href="#">Introduction Video</a></li>
           <li><a href="#">See the Features</a></li>
           <li><a href="#">Download a Trial</a></li>
           <li><a href="#">Get in Touch!</a></li>
           </ul>
           </div>*/}
        </Row>
        <br /><br /><br />
        <Row>
          <Col md={12} className="text-center">
            {/*
             <a href="#" class="badge-btn">Badge Button</a>*/}
            <p className="footer-credit">Copyright 2015. <a href="http://additor.in" style={{color: '#EC5D57'}}><b>Additor</b></a> all rights reserved.</p>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default FooterContainer;