import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import React from 'react';
import FormCreateIPU from "./FormCreateIPU"
import FormCreateIOU from "./FormCreateIOU"
import './App.css';


const App = () => (
<div>
  <nav class="navbar navbar navbar-dark bg-dark">
    <span class="navbar-brand mb-0 h1">R3 Corda Example</span>
  </nav>
  
  <div class="container-fluid">
    <div class="row content">
      <div class="col-sm-3 sidenav">
          <br/>
          <div class="list-group">
            <a href="/create-ipu" class="list-group-item list-group-item-action">create-ipu</a>
            <a href="/create-iou" class="list-group-item list-group-item-action">create-iou</a>
            <a href="/list-lender" class="list-group-item list-group-item-action">list-lender</a>
            <a href="/list-borrower" class="list-group-item list-group-item-action">list-borrower</a>
            <a href="/list-viewer"class="list-group-item list-group-item-action">list-viewer</a>
          </div>
        <br/>
      </div>
      <div class="col-sm-9">
        <Router>
          <div id="content" class="container bs-docs-container">
            <div class="contenido">
              <div class="panel-body">
                  <br></br>
                  <div>
                    <Route exact path="/create-ipu" component={FormCreateIPU} />
                    <Route path="/create-iou" component={FormCreateIOU} />
                    <Route path="/list-lender" component={Topics} />
                    <Route path="/list-borrower" component={Topics} />
                    <Route path="/list-viewer" component={Topics} />
                  </div>
              
              </div>
            </div>
          </div>
        </Router>
      </div>
    </div>
  </div>

  <footer class="container-fluid">
    <p>2018</p>
  </footer>
</div>
);





const Home = () => (
  <div>

  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default App;