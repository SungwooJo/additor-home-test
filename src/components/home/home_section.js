import React from 'react';
import HomeHeader from './home_header';
import HomeMainTitle from './home_main_title';
import GenerateLinkHeader from './gen_link_header';
import HomeSubTitle from './home_sub_title';

class HomeSection extends React.Component {

  render() {
    return (
      <section className="hero" id="hero">
        <HomeHeader />
        <HomeMainTitle />
        <br /><br />
        <GenerateLinkHeader />
        <HomeSubTitle />
        <br /><br /><br />
      </section>
    );
  }
}

export default HomeSection;