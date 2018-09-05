import React from 'react';
import {ErrorMessage, SuccessMessage} from "./XUtils"


class FormCreateIPU extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      isSubmited: null,
      msg: '',
      peers: [],
      counterparty: '',
      viewer: ''
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
    this.setState({
      isSubmited: true,
      error: null,
      msg: 'A new IPU was submitted: ' + this.state.counterparty + '-' + this.state.viewer
    })
    event.preventDefault();
  }


  componentDidMount() {
    fetch(process.env.REACT_APP_ENDPOINT_PEERS)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            peers: (typeof(result.peers) === "undefined" ? [] : result.peers)
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
    if (error && isLoaded) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      
      if(isSubmited){
        if (!error) {
          messageComponent = <SuccessMessage msg={msg} />;
        } else {
          messageComponent = <ErrorMessage msg={error.message} />
        }
      }
      return (
        <div className="card">
          <div className="card-header"> Create IPU</div>
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
                <label htmlFor="counterpartyFormControlSelect">Counterparty</label>
                <select name="counterparty" type="select" className="form-control" id="counterpartyFormControlSelect" value={this.state.counterparty} onChange={this.handleChange} >
                 <option defaultValue>Choose...</option>
                  {peers.map(item => (
                    <option key={item}> {item} </option>
                  ))}
                </select>
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


export default FormCreateIPU;



