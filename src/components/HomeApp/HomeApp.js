import React from 'react';
import Home from '../Home/Home';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class HomeApp extends React.Component {
  render() {
    return (
     <section>
       <Header/>
      <Home />
      <Footer />
     </section>
    )
  }
}

export default HomeApp;
