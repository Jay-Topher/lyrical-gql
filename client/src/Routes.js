import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SongList from "./Components/SongList";
import SongCreate from "./Components/SongCreate";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/songs/new" component={SongCreate} />
        <Route path="/" component={SongList} />
      </Switch>
    </Router>
  );
};

export default Routes;
