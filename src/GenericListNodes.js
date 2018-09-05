import React from 'react';
import {InfoMessage} from "./XUtils"


class GenericListNodes extends React.Component {

  render() {
    let messageComponent = <div></div>;
    const { error, isLoaded, nodes } = this.props;
    if (error && isLoaded) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      if(nodes.length <= 0) {
        messageComponent = <InfoMessage msg="Theare aren't element."></InfoMessage>
      }

      return (
        <div >
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Addresses</th>
                <th scope="col">Legal Identity</th>
                <th scope="col">Platform Version</th>
                <th scope="col">Serial</th>
              </tr>
            </thead>
            <tbody>
              {nodes.map(item => (
                <tr key={item.legalIdentitiesAndCerts[0]}>
                  <td>{item.addresses}</td>
                  <td>{item.legalIdentitiesAndCerts[0]}</td>
                  <td>{item.platformVersion}</td>
                  <td>{item.serial}</td>
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


export default GenericListNodes;



