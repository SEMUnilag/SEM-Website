import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Awards from "./Components/Awards/Awards";
import Careers from "./Components/Careers/Careers";
import Landing from "./Components/Home/Landing";


class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/awards" component={Awards} />
              <Route exact path="/careers" component={Careers} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}
export default App;
