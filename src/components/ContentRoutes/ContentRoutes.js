import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Projects from '../Projects/Projects';

import About from '../About/About';
import Home from '../Home/Home';

export const ContentRoutes = () => {
  return (
    <Switch>
      <Route exact path={`/`} component={Home} />
      <Route exact path={'/Projects'} component={Projects} />
      {/* <Route exact path={'/Profile'} component={Contact} /> */}
      <Route exact path={'/About'} component={About} />
      {/* <Route path={`/Projects/${}`} render={
        props => {
          const {id} = props.match.params
        } */}
      }
    </Switch>
  );
};
