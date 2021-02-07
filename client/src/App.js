import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home, NotFoundPage } from "./pages";

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
