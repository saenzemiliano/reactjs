import React, { Component } from 'react';



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
      <div class="card">
        <div class="card-header"> Create IPU</div>
        <div class="card-body">
          <form onSubmit={this.handleSubmit}>
            <div class="form-group">
              <label for="borrowerFormControlSelect">Borrower</label>
              <select class="form-control" id="borrowerFormControlSelect" >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div class="form-group">
              <label for="viewerFormControlSelect">Viewer</label>
              <select class="form-control" id="ViewerFormControlSelect">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div class="form-group">
              <label for="valueInput">Value</label>
              <input type="email" class="form-control" id="valueInput" placeholder="Value" />
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>



    );
  }
}

export default FormCreateIPU;



