import React from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Home } from '../Home';
import { Reservation } from '../Reservation';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export const App = () => (
  <>
    <Router>
      <Header />
      <Switch>
        <Route path="/reservation">
          <Reservation />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </>
);
