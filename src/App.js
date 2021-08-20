import Topbar from './components/topbar/Topbar'
import Contact from './components/contact/Contact'
import Portfolio from './components/portfolio/Portfolio'
import Intro from './components/intro/Intro'
import './app.scss'
import About from "./components/about/About"
import { Fragment } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/about" component={About} />
          <Route path='/' render={() =>
            <Fragment>
              <div className="app">
                <Topbar />
                <div className="sections">
                  <Intro />
                  <Portfolio />
                  <Contact />
                </div>
              </div>
            </Fragment>
          } />
        </Switch>
      </Router>
    </>
  );
}

export default App;
