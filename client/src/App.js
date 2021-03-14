import React from "react";
import { Route, Switch } from "react-router-dom";
import { firstLetterCaps, arrayLastItem } from "./utils"; // converts the first character of the string to a capital letter

import {
  Home,
  NotFoundPage,
  WorksCategories,
  LinksPage,
  AboutPage,
  SkillsPage,
  CategoryWorks,
  WorkDetail,
} from "./pages";

function App() {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={AboutPage} />
        <Route exact path="/links" component={LinksPage} />
        <Route exact path="/skills" component={SkillsPage} />
        <Route exact path="/works" component={WorksCategories} />
        <Route exact path="/works/:string" component={CategoryWorks} />
        <Route exact path="/works/:string/:string" component={WorkDetail} />
        {/* string т.к. я уверен, что не будет одинаковых название проектов */}
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
