import React from "react";
import { Fill } from "../../Layout";

function Article({ data }) {
  return (
    <>
      <Fill name="title">
        <h1>{data.title}</h1>
      </Fill>
      <Fill name="author">
        <h3>{data.author}</h3>
      </Fill>
      {/* <Fill name="actions">
        <div>{data.actions}</div>
      </Fill> */}
      <Fill name="content">
        <div>{data.content}</div>
      </Fill>
    </>
  );
}

export default Article;

export function AlternativeArticle({data}) {
  return (
    <>
      <Fill name="actions">
        <div>actions</div>
      </Fill>
      <Fill name="author">
        {data.author}
      </Fill>
      <Fill name="content">
        <div>{data.content}</div>
      </Fill>
      <Fill name="copyright">
        {null}
      </Fill>
    </>
  )
}
