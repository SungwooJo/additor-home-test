import React from 'react';
import NavHeader from './nav_header';

class NavSection extends React.Component {
  render() {
    return (
      <section className="navigation">
        <NavHeader />
      </section>
    );
  }
}

export default NavSection;