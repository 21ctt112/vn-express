import React from "react";
import "./ArticleCard.css";

const ArticleCard = ({
  title,
  description,
  category,
  commentCount,
  author,
  authorImage,
}) => {
  return (
    <div className="article-card">
      <div className="article-content">
        <h2 className="article-title">{title}</h2>
        <p className="article-description">{description}</p>
        <div className="article-meta">
          <span className="article-category">{category}</span>
          <span className="article-comments">
            <img
              src="https://w7.pngwing.com/pngs/237/433/png-transparent-computer-icons-online-chat-chat-icon-miscellaneous-text-conversation.png"
              alt="comments"
              className="comment-icon"
            />
            {commentCount}
          </span>
          <span className="article-author">{author}</span>
        </div>
      </div>
      <div className="article-author-image">
        <img src={authorImage} alt={author} />
      </div>
    </div>
  );
};

export default ArticleCard;
