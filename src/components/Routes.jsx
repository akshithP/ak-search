import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";

import {Results} from './Results'

export const Routes = () => {
  return (
    <div>
      <Switch className="p-4">
        <Route exact path="/">
          <Redirect to='/search'/>
        </Route>
        <Route path={['/search', '/images', '/news', '/videos']}>
          <Results>

          </Results>
        </Route>
      </Switch>
    </div>
  );
};
