import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import {
  Home,
  NotFoundPage,
  WorksPage,
  LinksPage,
  AboutPage,
  SkillsPage,
} from "./pages";

function App() {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={AboutPage} />
        <Route exact path="/links" component={LinksPage} />
        <Route exact path="/skills" component={SkillsPage} />
        <Route exact path="/works" component={WorksPage} />
        <Route path="/404" component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
    </div>
  );
}

export default App;
