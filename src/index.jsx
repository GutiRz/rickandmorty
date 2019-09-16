import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import App from "./views/App";
import Character from "./views/Character";

ReactDOM.render(
  
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/Character/:charId" component={Character} />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);