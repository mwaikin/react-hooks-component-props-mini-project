import React from "react";
import Article from "./Article";

const ArticleList = (props) => {
  let articleList = props.posts.map((article) => (
    <Article
      key={article.id}
      title={article.title}
      date={article.date}
      preview={article.preview}
      minutes={article.minutes}

    />
  ));
  return <main>{articleList}</main>;
};

export default ArticleList;