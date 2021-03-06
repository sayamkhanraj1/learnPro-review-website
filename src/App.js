import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Teachers from './Components/Teachers/Teachers';
import Courses from './Components/Courses/Courses';
import Error from './Components/Error/Error';
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
           <Home />
          </Route>
          <Route exact path="/home">
           <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/teachers">
          <Teachers />
          </Route>
          <Route exact path="/services">
            <Courses />
          </Route>
          <Route exact path="*">
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
