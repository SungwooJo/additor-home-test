
import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import TeamMember from './team_member';


class TeamContainer extends React.Component {

  render() {
    let swComment = <p>Why don't you Addit something <br />valuable to the world with us?</p>;
    return (
      <Grid className="container">
        <Row>
          <h2>
            Team Additor &nbsp;&nbsp;l
          </h2>
        </Row>
        <Row>
          <Col sm={3}>
            <div className="avatar" style={{textAlign: 'center'}}>
              <img src="images/av-blaz.png" alt="Jiwon Jang" />
              <br /><br /><span><b>Jiwon Jang &nbsp;&nbsp;l</b> &nbsp;Additor-in-chief</span><br />
              <p>I believe many users could be great additors
                <br />
                in what they really love, with ease.
                <br /><br />
                Addit is just to be oneself.</p>
            </div>
          </Col>
          <Col sm={3}>
            <div className="avatar" style={{textAlign: 'center'}}>
              <img src="images/av-pete.png" alt="Yeonho Kim" />
              <br /><br /><span><b>Yeonho Kim &nbsp;&nbsp;l</b>  &nbsp;Additor-in-dev</span><br />
              <p>I want to make something
                <br />
                to make people happy.
                <br /><br />
                We addit positive value to the world.
              </p>
            </div>
          </Col>
          <Col sm={3}>
            <TeamMember imgSrc="images/av-doge.png" name="Sungwoo Jo" role="dev" comment={swComment}/>
          </Col>
          <Col sm={3}>
            <div className="avatar" style={{textAlign: 'center'}}>
              <img src="images/av-doge.png" alt="Doge Finbar" />
              <br /><br /><span><b>Recruit &nbsp;&nbsp;l</b> &nbsp;Additor-in-#whatever</span><br />
              <p>Why don't you Addit something <br />valuable to the world with us?
              </p><center>
              <a href="#" className="apply-btn">Apply Now</a>
            </center>
              <p />
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default TeamContainer;