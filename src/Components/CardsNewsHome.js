import React from "react";

import CardNew from "./Card";
import { connect } from "react-redux";
import { fetchNews } from "../Actions/Actions";
import Loading from "./Loading";

class News extends React.Component {
  state = {
    newsS: [],
    moreNews: [],
    spliceA: 0,
    spliceB: 12
  };

  componentDidMount() {
    this.props.fetchNews(this.state.spliceA, this.state.spliceB);
    // this.setState({ newsS: this.props.news });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.spliceB !== this.state.spliceB) {
      this.props.fetchNews(this.state.spliceA, this.state.spliceB);
      this.setState({ moreNews: this.props.news });
    }
    if (prevState.newsS !== this.props.news && this.state.spliceB === 12) {
      this.setState({ newsS: this.props.news });
    }
    if (prevState.moreNews !== this.props.news && this.state.spliceB === 24) {
      this.setState({ moreNews: this.props.news });
      this.setState({ newsS: [] });
    }
  }

  handleShowMore = (event) => {
    event.preventDefault();
    this.setState({ spliceA: 12 });
    this.setState({ spliceB: 24 });
  };
  handleBack = (event) => {
    event.preventDefault();
    this.setState({ spliceA: 0 });
    this.setState({ spliceB: 12 });
  };

  render() {
    if (this.state.newsS.length === 0 && this.state.moreNews === 0) {
      return <Loading />;
    } else if (this.props.Loading !== false) {
      return <Loading />;
    } else {
      return (
        <div className="bodyB">
          <h3>Principales</h3>

          <section className="Cards">
            {this.state.newsS.map((news) => (
              <CardNew key={news.news_id} news={news} />
            ))}
          </section>
          <section className="Cards">
            {this.state.moreNews.map((news) => (
              <CardNew key={news.news_id} news={news} />
            ))}
          </section>
          {this.state.spliceB === 12 ? (
            <button onClick={this.handleShowMore}>show More</button>
          ) : (
            <button onClick={this.handleBack}>Back</button>
          )}
        </div>
      );
    }
  }
}

const mapDispatchToProps = {
  fetchNews
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, mapDispatchToProps)(News);
