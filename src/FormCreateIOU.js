import React from 'react';
import { ErrorMessage, SuccessMessage } from "./XUtils"


class FormCreateIOU extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      isSubmited: null,
      msg: '',
      peers: [],
      borrower: '',
      viewer: '',
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    var partialState = {};
    const target = event.target;
    const value = target.type === 'select' ? target.value : target.value;
    const name = target.name;
    //console.log('///////////////////: ' + name + '-' + value)
    partialState[name] = value;
    this.setState(partialState);

  }

  handleSubmit(event) {
    const apiUrl = encodeURI(process.env.REACT_APP_ENDPOINT_CERATE_IOU
      + '?iouValue=' + this.state.value
      + '&viewerPartyName=' + this.state.viewer 
      + '&otherPartyName=' + this.state.borrower );

    console.log("/////////////////" + apiUrl)
    fetch(apiUrl,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(
        () => {
          this.setState({
            isSubmited: true,
            error: null,
            msg: 'A new IOU was submitted: ' + this.state.borrower + '-' + this.state.viewer + '-' + this.state.value
          })
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log("//////////2222///"+ error +"////" + error.message);
          this.setState({
            isLoaded: true,
            isSubmited: true,
            error
          });
        }
      )
    event.preventDefault();
  }


  componentDidMount() {
    fetch(process.env.REACT_APP_ENDPOINT_PEERS)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            peers: (typeof (result.peers) === "undefined" ? [] : result.peers)
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
    let messageComponent = <div></div>;
    const { error, isLoaded, isSubmited, msg, peers } = this.state;
    if (error && isLoaded && !isSubmited) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {

      if (isSubmited) {
        if (!error) {
          messageComponent = <SuccessMessage msg={msg} />;
        } else {
          messageComponent = <ErrorMessage msg={error.message} />
        }
      }
      return (
        <div className="card">
          <div className="card-header"> Create IOU</div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="viewerFormControlSelect">Viewer</label>
                <select name="viewer" type="select" className="form-control" id="viewerFormControlSelect" value={this.state.viewer} onChange={this.handleChange} >
                  <option defaultValue>Choose...</option>
                  {peers.map(item => (
                    <option key={item}> {item} </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="borrowerFormControlSelect">Borrower</label>
                <select name="borrower" type="select" className="form-control" id="borrowerFormControlSelect" value={this.state.borrower} onChange={this.handleChange} >
                  <option defaultValue>Choose...</option>
                  {peers.map(item => (
                    <option key={item}> {item} </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="valueInput">Value</label>
                <input name="value" type="number" className="form-control" id="valueInput" placeholder="Value" value={this.state.value} onChange={this.handleChange} />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col">
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </div>
                  <div className="col-8">
                    {messageComponent}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      );
    }
  }
}


export default FormCreateIOU;



