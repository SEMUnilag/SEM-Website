import React, { Component } from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import "./App.css";
import Hero from "./Components/Hero/Hero";


class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Hero} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}
export default App;
