import React from "react";

class ComplaintRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
    this.state = { numberHolder: "TN-" + this.getRandomNumberBetween(50, 99) };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  getRandomNumberBetween(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  handleChange(e) {
    this.setState({ name: e.target.value });
  }
  handleSubmit(e) {
    alert(
      "Thanks " +
        this.state.name +
        "\nYour Complaint was Submitted." +
        "\nTransaction Id is:" +
        this.state.numberHolder
    );
    e.preventDefault();
  }
  render() {
    return (
      <div className="container mt-4 d-flex justify-content-center">
        <form
          onSubmit={this.handleSubmit}
          className="border border-dark text-start row row-cols-lg-auto g-3 align-items-center custom-centered"
        >
          <label>
            <div className="mb-3">
              Name:
              <input
                className="form-control"
                type={"text"}
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
            <div className="mb-3">
              complaint:
              <textarea
                className="form-control"
                defaultValue={"your concern here"}
              ></textarea>
            </div>
            <input type={"submit"} value="Submit" className="btn btn-primary" />
          </label>
        </form>
      </div>
    );
  }
}
export default ComplaintRegister;