import React from "react";
import "./styles.css";

import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./Components/Header";
import SearchByCategories from "./Components/SearchByCategories";

import NewsHome from "./Components/CardsNewsHome";
import NewsByWord from "./Components/CardsNewsByWord";
import NewsCategory from "./Components/CardsNewsCategory";

import Footer from "./Components/Footer";
import Error from "./Components/Error";

const Categories = [
  "politica",
  "internacionales",
  "tecnologia",
  "espectaculos",
  "deportes"
];

function App(props) {
  return (
    <div className="App">
      <div className="headerMain">
        <Header />
        <SearchByCategories />
      </div>
      <div className="body">
        <Switch>
          <Route
            path="/"
            exact={true}
            render={({ match }) => {
              return <NewsHome id="0" />;
            }}
          />
          <Route
            exact
            path="/categoria/:categoriaId"
            render={({ match }) => {
              const position = Categories.indexOf(match.params.categoriaId);
              const id = position + 1;

              return (
                <NewsCategory id={id} categories={match.params.categoriaId} />
              );
            }}
          />
          <Route
            path="/word/:Word"
            exact={true}
            render={({ match }) => {
              const id = match.params.Word;

              return <NewsByWord id={id} />;
            }}
          />
          <Route>
            <Error />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(App);
