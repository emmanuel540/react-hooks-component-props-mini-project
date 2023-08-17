import React from "react";
import blogData from "../data/blog"
import Article from "./Article"
function ArticleList() {
    let post = blogData.posts
    let article = post.map((i)=>(
        <Article 
            key = {i.id}
            title = {i.title}
            date = {i.date}
            preview = {i.preview}
            minutes = {i.minutes}
        />
    ));
    return (<main> {
        article 
        }
        
    </main>)
}
export default ArticleList;
    