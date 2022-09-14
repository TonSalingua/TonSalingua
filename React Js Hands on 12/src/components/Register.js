import React from "react";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      error: {
        name: "",
        email: "",
        password: "",
      },
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  validateForm = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let error = { ...this.state.error };
    const emailValid = RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    switch (name) {
      case "name":
        if (value.length < 5) {
          error.name = "Full name must be 5 character long!";
        } else {
          error.name = "";
        }
        break;
      case "email":
        if (emailValid.test(value) === false) {
          error.email = "Email is Invalid";
        } else {
          error.email = "";
        }
        break;
      case "password":
        if (value.length < 8 ) {
          error.password = "Password must be 8 character long!";
        } else {
          error.password = "";
        }
        break;
      default:
        break;
    }
    this.setState({
      error,
      [name]: value,
    });
  };

  onFormSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    if (
      this.state.error.name ||
      this.state.error.email ||
      this.state.error.password
    ) {
      alert("Some Inputfeild needs to be valid!");
    } else {
      alert("Valid form");
    }
  }

  render() {
    const { error } = this.state;
    return (
      <div className="container">
        <div className="card mt-5">
          <form className="card-body" onSubmit={this.onFormSubmit}>
            <div className="form-group mb-3">
              <label className="mb-2">
                <strong>Name</strong>
              </label>
              <input
                required
                type="text"
                name="name"
                onChange={this.validateForm}
                className={
                  error.name.length > 0
                    ? "is-invalid form-control"
                    : "form-control"
                }
              />
              {error.name.length > 0 && (
                <span className="invalid-feedback">{error.name}</span>
              )}
            </div>
            <div className="form-group mb-3">
              <label className="mb-2">
                <strong>Email</strong>
              </label>
              <input
                required
                type="text"
                name="email"
                onChange={this.validateForm}
                className={
                  error.email.length > 0
                    ? "is-invalid form-control"
                    : "form-control"
                }
              />
              {error.email.length > 0 && (
                <span className="invalid-feedback">{error.email}</span>
              )}
            </div>
            <div className="form-group mb-3">
              <label className="mb-2">
                <strong>Password</strong>
              </label>
              <input
                required
                type="text"
                name="password"
                onChange={this.validateForm}
                className={
                  error.password.length > 0
                    ? "is-invalid form-control"
                    : "form-control"
                }
              />
              {error.password.length > 0 && (
                <span className="invalid-feedback">{error.password}</span>
              )}
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;