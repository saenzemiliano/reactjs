import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import React from 'react';
import FormCreateIPU from "./FormCreateIPU"
import FormCreateIOU from "./FormCreateIOU"
import TableListIOUs from "./TableListIOUs"
import TableListIPUs from "./TableListIPUs"
import TableListNodes from "./TableListNodes"
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      isSubmited: null,
      msg: '',
      me: ''
    };

  }


  componentDidMount() {
    fetch(process.env.REACT_APP_ENDPOINT_ME)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            me: (typeof (result.me) === "undefined" ? [] : result.me)
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, me } = this.state;
    if (error && isLoaded) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <nav className="navbar navbar navbar-dark bg-dark">
            <span className="navbar-brand mb-0 h1">{process.env.REACT_APP_WEBSITE_NAME} --- {me}</span>
          </nav>
          <div className="container-fluid">
            <div className="row content">
              <div className="col-sm-3 sidenav">
                <br />
                <div className="list-group">
                  <a href={process.env.PUBLIC_URL + '/create-iou'} className="list-group-item list-group-item-action">create-iou</a>
                  <a href={process.env.PUBLIC_URL + '/create-ipu'} className="list-group-item list-group-item-action">create-ipu</a>
                  <a href={process.env.PUBLIC_URL + '/list-ious'} className="list-group-item list-group-item-action">list-ious</a>
                  <a href={process.env.PUBLIC_URL + '/list-ipus'} className="list-group-item list-group-item-action">list-ipus</a>
                  {/*<a href={process.env.PUBLIC_URL +'/list-lender'} className="list-group-item list-group-item-action">list-lender</a>
                  <a href={process.env.PUBLIC_URL +'/list-borrower'} className="list-group-item list-group-item-action">list-borrower</a>
                  <a href={process.env.PUBLIC_URL +'/list-viewer'} className="list-group-item list-group-item-action">list-viewer</a>*/}
                  <a href={process.env.PUBLIC_URL + '/list-corda-nodes'} className="list-group-item list-group-item-action">list-corda-nodes</a>
                </div>
                <br />
              </div>
              <div className="col-sm-9">
                <Router>
                  <div id="content" className="container bs-docs-container">
                    <div className="contenido">
                      <div className="panel-body">
                        <br></br>
                        <div>
                          <Route exact path={process.env.PUBLIC_URL + '/create-ipu'} component={FormCreateIPU} />
                          <Route path={process.env.PUBLIC_URL + '/create-iou'} component={FormCreateIOU} />
                          {/*<Route path={process.env.PUBLIC_URL + '/list-lende'} component={Topics} />
                          <Route path={process.env.PUBLIC_URL + '/list-borrower'} component={Topics} />
                          <Route path={process.env.PUBLIC_URL + '/list-viewer'} component={Topics} />*/}
                          <Route path={process.env.PUBLIC_URL + '/list-ious'} component={TableListIOUs} />
                          <Route path={process.env.PUBLIC_URL + '/list-ipus'} component={TableListIPUs} />
                          <Route path={process.env.PUBLIC_URL + '/list-corda-nodes'} component={TableListNodes} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Router>
              </div>
            </div>
          </div>
          <footer className="container-fluid">
            <p>2018</p>
          </footer>
        </div>
      );
    }
  }
}


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