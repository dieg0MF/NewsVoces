import React, { Component } from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

class FetchNewsByWord extends Component {
  state = {
    value: ""
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.Word !== this.props.Word) {
      this.setState({ value: "" });
    }
  }

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({ value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    const { value } = this.state;
    return (
      <form className="SearchByWord">
        <input
          value={value}
          name="word"
          onChange={this.handleChange}
          type="text"
          placeholder="Ingrese palabra"
        />
        <Link to={`/word/${this.state.value}`}>
          <button>Buscar</button>
        </Link>
      </form>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(FetchNewsByWord);
