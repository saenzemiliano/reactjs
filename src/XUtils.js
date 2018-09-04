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

export {
  ErrorMessage,
  WarningMessage,
  SuccessMessage,
  InfoMessage
};



