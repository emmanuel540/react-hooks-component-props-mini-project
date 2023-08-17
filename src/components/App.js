import React from "react";
import blogData from "../data/blog";
import About from "./About";
import Article from "./Article";
import ArticleList from "./ArticleList";
import Header from "./Header";
console.log(blogData);

function App() {
  const {name, image, about, posts} = blogData
  return (
    <div className="App">
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
      <Header name={name}/>
      <About image={image} about ={about}/>
      <Article title={posts.title} />
      <ArticleList posts={posts}/>
    </div>
  );
}

export default App;
