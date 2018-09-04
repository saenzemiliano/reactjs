import React from 'react';
import GenericListIOUs from "./GenericListIOUs"



class TableListIPUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      error: null,
      ipus: []
    };
  }



  componentDidMount() {
    fetch(process.env.REACT_APP_ENDPOINT_IOUS)
      .then(res => res.json())
      .then(
        (result) => {
          console.log("///////////"+ result.size)
          this.setState({
            isLoaded: true,
            ipus: (typeof(result.ious) === "undefined" ? [] : result.ipus)
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
    const { isLoaded, error, ipus } = this.state;
    return (
      <GenericListIOUs error={error} isLoaded={isLoaded} items={ipus} />
    )
  }
}

export default TableListIPUs;



