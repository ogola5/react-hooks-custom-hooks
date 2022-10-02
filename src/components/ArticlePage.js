import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useQuery from "../hooks/useQuery";
import { makeEmojiList } from "../utils";
import useDocumentTitle from "./useDocumentTitle";

function ArticlePage() {
  // fetch data for a post
  const { id } = useParams();
  const {data:post, isLoaded} = useQuery(`http://localhost:4000/posts/${id}`);
  // const [post, setPost] = useState(null);

  // const url = `http://localhost:4000/posts/${id}`;
  // useEffect(() => {
  //   setIsLoaded(false);
  //   fetch(url)
  //     .then((r) => r.json())
  //     .then((post) => {
  //       setPost(post);
  //       setIsLoaded(true);
  //     });
  // }, [url]);

  // set the document title
  const pageTitle = post ? `Underreacted | ${post.title}` : "Underreacted";
  useDocumentTitle(pageTitle)
  

  if (!isLoaded) return <h3>Loading...</h3>;

  const { minutes, title, date, preview } = post;
  const emojis = makeEmojiList(minutes);

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} • {emojis} {minutes} min read
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default ArticlePage;
