import React from 'react';
import { ErrorMessage, SuccessMessage, InfoMessage, ToStringDateYYYYMMDD,ToLongDateFromStringDate,ToStringDateFromLong } from "./XUtils"


class FormCreateIPU extends React.Component {
  constructor(props) {
    super(props);
    var d = new Date();
    this.state = {
      error: null,
      isLoaded: false,
      isSubmited: null,
      isProcessing: false,
      msg: '',
      peers: [],
      counterparty: '',
      viewer: '',
      from: ToStringDateYYYYMMDD(d) +'T08:00',
      to: ToStringDateYYYYMMDD(d) +'T19:00',
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
      isProcessing: true
    });
    const apiUrl = encodeURI(process.env.REACT_APP_ENDPOINT_COMPENSATE
      + '?from=' + ToLongDateFromStringDate(this.state.from)
      + '&to=' + ToLongDateFromStringDate(this.state.to)
      + '&viewerPartyName=' + this.state.viewer
      + '&counterPartyName=' + this.state.counterparty);
    
    //console.log("/////////////////" + ToStringDateFromLong(ToLongDateFromStringDate(this.state.from)))
    //console.log("/////////////////" + apiUrl)
    fetch(apiUrl,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.text())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            isSubmited: true,
            isProcessing: false,
            error: null,
            msg: result
          })
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          //console.log("//////////2222///" + error + "////" + error.message);
          this.setState({
            isLoaded: true,
            isSubmited: true,
            isProcessing: false,
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
    const { error, isLoaded, isSubmited, isProcessing, msg, peers } = this.state;
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
      if (isProcessing) {
        messageComponent = <InfoMessage msg={"Processing..."} />
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
              <div className="form-group">
                <label htmlFor="valueInput">From</label>
                <input name="from" type="datetime-local" className="form-control" id="fromInput" value={this.state.from} onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="valueInput">To</label>
                <input name="to" type="datetime-local" className="form-control" id="toInput" value={this.state.to} onChange={this.handleChange} />
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



