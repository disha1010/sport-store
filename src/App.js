import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "./style.css"
import Sidebar from "./Sidebar"
import List from "./List"
import Details from "./Details"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Sidebar />
          <Route exact path="/List" component={List} />
          <Route path="/Details" component={Details} />
        </div>
      </Router>
    );
  }
}

export default App;
