import React from "react";

import CardNew from "./Card";
import { connect } from "react-redux";
import { fetchNewsWord } from "../Actions/Actions";
import Loading from "./Loading";

class News extends React.Component {
  state = {};

  componentDidMount() {
    this.props.fetchNewsWord(this.props.id);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.id !== this.props.id) {
      this.props.fetchNewsWord(this.props.id);
    }
  }

  render() {
    if (this.props.Loading !== false) {
      return <Loading />;
    } else if (this.props.news.length === 0) {
      return (
        <>
          <img
            src={require("../Images/detective.png")}
            alt="Error ocurred"
            width="300"
            height="250"
          />
          <p>
            {" "}
            "Disculpa, no encontramos noticias con la palabra ingresada...."
          </p>
        </>
      );
    } else {
      return (
        <div className="body">
          <h3>Resultados para : {this.props.id}</h3>

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
  fetchNewsWord
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, mapDispatchToProps)(News);
