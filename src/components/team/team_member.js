
import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';


class TeamMember extends React.Component {
  render() {
    let comment = this.props.comment;
    return (
      <div className="avatar" style={{textAlign: 'center'}}>
        <img src={this.props.imgSrc} alt={this.props.name} />
        <br /><br /><span><b>{this.props.name} &nbsp;&nbsp;l</b> &nbsp;Additor-in-{this.props.role}</span><br />
        {comment}
      </div>
    );
  }
}

export default TeamMember;