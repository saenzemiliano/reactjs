import React from 'react';


function ToLongDateFromStringDate(stringDate) {
  return new Date(stringDate).getTime();
}

function ToStringDateFromLong(longdate) {
  return new Date(longdate).toLocaleString();
}

function ToStringDateYYYYMMDD(d) {
  //console.log("ToStringDateYYYYMMDD//////////////////" +d.getUTCDay() + "///////" + d)
  var day = (d.getUTCDate() < 10 ? '0' + d.getUTCDate(): d.getUTCDate()) ;
  var month = (d.getUTCMonth()+1 < 10 ? '0' + (d.getUTCMonth()+ 1) : d.getUTCMonth()+ 1) ;
  var year = d.getUTCFullYear();
  return year + '-' + month + '-' + day
}



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
  ToLongDateFromStringDate,
  ToStringDateYYYYMMDD,
  ToStringDateFromLong,
  LargeModal,
  ErrorMessage,
  WarningMessage,
  SuccessMessage,
  InfoMessage
};



