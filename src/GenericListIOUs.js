import React from 'react';
import {InfoMessage} from "./XUtils"


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
                <th scope="col">Viewer</th>
                <th scope="col">Borrower</th>
                <th scope="col">Lender</th>
                <th scope="col">Value</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr>
                  <td>{item.viewer}</td>
                  <td>{item.borrower}</td>
                  <td>{item.lender}</td>
                  <td>{item.value}</td>
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



