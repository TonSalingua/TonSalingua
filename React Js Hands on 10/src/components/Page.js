import React from "react";
import BlogDetails from "./BlogDetails";
import BookDetails from "./BookDetails";
import CourseDetails from "./CourseDetails";
class Page extends React.Component {
  handleToggleClick() {
    this.setState((prevState) => ({
      showWarning: !prevState.showWarning,
    }));
  }
  handleShowClick() {
    this.setState({ isShowed: true });
  }
  handleHideClick() {
    this.setState({ isShowed: false });
  }
  constructor(props) {
    super(props);
    this.handleShowClick = this.handleShowClick.bind(this);
    this.handleHideClick = this.handleHideClick.bind(this);
    this.state = { isShowed: false };
    this.state = { showWarning: true };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }
  render() {
    return (
      <div className="container d-flex text-start m-5">
        <button
          onClick={this.handleToggleClick}
          className="btn btn-dark mt-3 align-self-start "
        >
          {this.state.showWarning ? "Hide" : "Show"}
        </button>
        {this.state.showWarning ? (
          <div className="container d-flex">
            <CourseDetails />
            <BookDetails />
            <BlogDetails />
          </div>
        ) : null}
      </div>
    );
  }
}

export default Page;