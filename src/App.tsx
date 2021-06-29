import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Awards from "./Components/Awards/Awards";
import Careers from "./Components/Careers/Careers";
import Landing from "./Components/Home/Landing";
import Projects from "./Components/Projects/Projects";

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
              <Route exact path="/projects" component={Projects} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}
export default App;
