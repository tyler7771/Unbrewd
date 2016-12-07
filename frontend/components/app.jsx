import React from 'react';
import { Link } from 'react-router';
import DrinkIndexContainer from './drinks/drink_index_container';
import HeaderContainer from './header/headercontainer';
import Footer from './footer/footer';

const App = ({ children }) => (
  <div className="app">
    <section className="content">
      <HeaderContainer />
      {children}
    </section>
    <Footer />
  </div>
);

export default App;
