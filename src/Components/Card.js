import React from "react";
import "./styles/card.css";
import wrong from  "./assets/Images/NoImageAvailable.jpg"

const News = ({ news }) => {
  return (
    <article className="Card">
      <p>{news.title}</p>
      {news.img_url ? (
        <img src={news.img_url} alt="" width="200" height="200" />
      ) : (
        <img
          src={wrong}
           alt=""
          width="200"
          height="200"
        />
      )}

      <p className="CardLink">
        Ver nota completa en : <a href={news.url}>{news.source_name} </a>
      </p>
    </article>
  );
};

export default News;
