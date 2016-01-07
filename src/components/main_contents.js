import React from 'react';
import HomeSection from './home/home_section';
import IntroSection from './intro/intro_section';
import ContentsSection from './contents/contents_section';
import TeamSection from './team/team_section';

class MainContents extends React.Component {
  render() {
    return(
      <div className="contents">
        <HomeSection />
        <IntroSection />
        <ContentsSection />
        <TeamSection />
      </div>
    );
  }
}

export default MainContents;