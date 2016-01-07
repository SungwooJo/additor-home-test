import React from 'react';

class Nav extends React.Component {
  render() {
    return (
      <nav className="pull">
        <ul>
          <li><a href="#getstarted">What Additor is<span className="indicator"><i className="fa fa-angle-right"/></span></a></li>
          <li><a href="#features">Features <span className="indicator"><i className="fa fa-angle-right"/></span></a></li>
          <li><a href="#design">Contents <span className="indicator"><i className="fa fa-angle-right"/></span></a></li>
          <li className="nav-last"><a href="#media">Team <span className="indicator"><i className="fa fa-angle-right"/></span></a></li>
        </ul>
      </nav>
    );
  }
}

export default Nav;