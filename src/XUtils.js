import React from 'react';


class InfoMessage extends React.Component {


  render() {
    return (
      <div className="alert alert-info" role="alert">
        {this.props.msg}
      </div>
    );
  }
}

class SuccessMessage extends React.Component {


  render() {
    return (
      <div className="alert alert-success" role="alert">
        {this.props.msg}
      </div>
    );
  }
}

class WarningMessage extends React.Component {


  render() {
    return (
      <div className="alert alert-warning" role="alert">
        {this.props.msg}
      </div>
    );
  }
}

class ErrorMessage extends React.Component {


  render() {
    return (
      <div className="alert alert-danger" role="alert">
        {this.props.msg}
      </div>
    );
  }
}


class LargeModal extends React.Component {


  render() {
    return (
        <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-hidden="false">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              {this.props.msg}
            </div>
          </div>
        </div>
    );
  }
}



export {
  LargeModal,
  ErrorMessage,
  WarningMessage,
  SuccessMessage,
  InfoMessage
};



