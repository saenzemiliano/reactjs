import React from 'react';
import {InfoMessage} from "./XUtils"



function formatDate(longdate) {
  return new Date(longdate).toLocaleString();
}

class GenericListIOUs extends React.Component {

  render() {
    let messageComponent = <div></div>;
    const { error, isLoaded, items } = this.props;
    if (error && isLoaded) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      if(items.length <= 0) {
        messageComponent = <InfoMessage msg="Theare aren't element."></InfoMessage>
      }

      return (
        <div >
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Linear Id</th>
                <th scope="col">Date</th>
                <th scope="col">Viewer</th>
                <th scope="col">Borrower</th>
                <th scope="col">Lender</th>
                <th scope="col">Value</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.state.data.linearId.id}>
                  <td>{item.state.data.linearId.id}</td>
                  <td>{formatDate(item.state.data.date)}</td>
                  <td>{item.state.data.viewer}</td>
                  <td>{item.state.data.borrower}</td>
                  <td>{item.state.data.lender}</td>
                  <td>{item.state.data.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {messageComponent}
        </div>
      );
    }

  }

  

}


export default GenericListIOUs;



