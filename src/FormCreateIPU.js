import React from 'react';



class FormCreateIPU extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '1' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="card">
        <div className="card-header"> Create IPU</div>
        <div className="card-body">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="borrowerFormControlSelect">Borrower</label>
              <select className="form-control" id="borrowerFormControlSelect" >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="viewerFormControlSelect">Viewer</label>
              <select className="form-control" id="ViewerFormControlSelect">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="valueInput">Value</label>
              <input type="email" className="form-control" id="valueInput" placeholder="Value" />
            </div>
            <div className="container">
              <div className="row">
                <div className="col">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
                <div className="col-8">
                  <div className="alert alert-danger">
                    <strong>Danger!</strong> Indicates a dangerous or potentially negative action.
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default FormCreateIPU;



