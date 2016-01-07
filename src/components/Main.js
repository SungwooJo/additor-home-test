
import React from 'react';
import NavSection from './navigation/nav_section';
import MainContents from './main_contents';
import Footer from './footer/footer';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="root">
        <NavSection />
        <MainContents />
        <Footer />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;