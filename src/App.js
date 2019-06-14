import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Student } from "./components/Student";
import { Contact } from "./components/Contact";
import { NoMatch } from "./components/NoMatch";
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/NavigationBar";
import { Jumbotron } from "./components/Jumbotron";

function App() {
  return (
    //wrapper for components
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Jumbotron />
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/student" component={Student} />
            <Route component={NoMatch} />
          </Switch>
        </Layout>
      </Router>
    </React.Fragment>
  );
}

export default App;
