import React from 'react';
import GenericListIOUs from "./GenericListIOUs"



class TableListIOUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      error: null,
      ious: []
    };
  }



  componentDidMount() {
    fetch(process.env.REACT_APP_ENDPOINT_IOUS)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            ious: (typeof(result.ious) === "undefined" ? [] : result.ious)
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
    const { isLoaded, error, ious } = this.state;
    return (
      <GenericListIOUs error={error} isLoaded={isLoaded} items={ious} />
    )
  }
}

export default TableListIOUs;



