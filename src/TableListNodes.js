import React from 'react';
import GenericListNodes from "./GenericListNodes"



class TableListNodes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      error: null,
      nodes: []
    };
  }



  componentDidMount() {
    fetch(process.env.REACT_APP_ENDPOINT_NODES)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            nodes: (typeof(result.nodes) === "undefined" ? [] : result.nodes)
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
    const { isLoaded, error, nodes } = this.state;
    return (
      <GenericListNodes error={error} isLoaded={isLoaded} nodes={nodes} />
    )
  }
}

export default TableListNodes;



