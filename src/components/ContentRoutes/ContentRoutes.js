import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import About from '../../components/About/About';

export const ContentRoutes = () => {
  return (
    <Switch>
      <Route exact path={'/Projects'} component={Projects} />
      {/* <Route exact path={'/Profile'} component={Contact} /> */}
      <Route exact path={'/About'} component={About} />
      <Route exact path={'/Contact'} component={Contact} />
      {/* <Route path={`/Projects/${}`} render={
        props => {
          const {id} = props.match.params
        } */}
      }
    </Switch>
  );
};
