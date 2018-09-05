import React from 'react';
import GenericListIPUs from "./GenericListIPUs"



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
    fetch(process.env.REACT_APP_ENDPOINT_IPUS)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            ipus: (typeof(result) === "undefined" ? [] : result)
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
      <GenericListIPUs error={error} isLoaded={isLoaded} items={ipus} />
    )
  }
}

export default TableListIPUs;



