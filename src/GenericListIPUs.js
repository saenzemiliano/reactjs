import React from 'react';
import {InfoMessage} from "./XUtils"


class GenericListIPUs extends React.Component {

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
                <th scope="col">Viewer</th>
                <th scope="col">Payer</th>
                <th scope="col">Loaner</th>
                <th scope="col">Value</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.linearId}>
                  <td>{item.linearId}</td>
                  <td>{item.viewer}</td>
                  <td>{item.payer}</td>
                  <td>{item.loaner}</td>
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


export default GenericListIPUs;



