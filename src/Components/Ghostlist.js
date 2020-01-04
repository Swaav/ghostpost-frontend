import React, { Component } from "react";
import Ghostitem from "./Ghostitem.js";

class Ghostlist extends Component {
  render() {
    return (
      <section>
        <ul>
          {this.props.posts.map(post => (
            <Ghostitem
              id={post.id}
              boast={post.boast}
              content={post.content}
              upvote={post.upvote}
              downvote={post.downvote}
              total={post.total}
              date={post.date}
            />
          ))}
        </ul>
      </section>
    );
  }
}

export default Ghostlist;