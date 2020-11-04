import React from "react";

import CardNew from "./Card";
import { connect } from "react-redux";
import { fetchNewsC } from "../Actions/Actions";
import Loading from "./Loading";
import Error from "./Error";

class News extends React.Component {
  state = {};
  componentDidMount() {
    this.props.fetchNewsC(this.props.id);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.id !== this.props.id) {
      this.props.fetchNewsC(this.props.id);
    }
  }

  render() {
    if (this.props.Loading !== false) {
      return <Loading />;
    } else if (this.props.id === 0) {
      return <Error />;
    } else {
      return (
        <div className="body">
          <h3>{this.props.categories}</h3>

          <section className="Cards">
            {this.props.news.map((news) => (
              <CardNew key={news.news_id} news={news} />
            ))}
          </section>
        </div>
      );
    }
  }
}

const mapDispatchToProps = {
  fetchNewsC
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, mapDispatchToProps)(News);
