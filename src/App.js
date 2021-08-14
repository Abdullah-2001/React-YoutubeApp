import React from "react";
import Router from "./Components/Router.jsx";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

class App extends React.Component {
  render() {
    return (
      <div>
        <Router />
      </div>
    );
  }
}

export default App;