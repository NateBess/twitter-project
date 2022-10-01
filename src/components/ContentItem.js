import React from "react";

function ContentItem({ tweetText }) {
  return (
    <div className="content-item-container">
      <p>{tweetText}</p>
    </div>
  );
}

export default ContentItem;
