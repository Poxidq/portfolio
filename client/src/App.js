import React from "react";
import { Route, Switch } from "react-router-dom";

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

// TodoList
// Client
// [x] edit design and scss
// [x] Works categories create Triangle component
// [x] Links Page create Link component
// [x] Skills Page create Skill component
// [] Connect redux to the app
// [x] Design of button switching in Category Works
// [x] Edit profile photo in AboutPage
// [] Creating a hook to go to the previous url
// [x] To somehow sort out the styles from _page.scss
// [~anyway] Sort assets folder
// Server
// [] Connect MongoDB to project
// [] Creating schemas for posts and categories
// [] Сreating event handlers when switching to different paths (resolvers)
// ...

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
