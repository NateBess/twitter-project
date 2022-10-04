import React from "react";
import "./ContentItem.css";

function ContentItem({
  userId,
  tweetId,
  name,
  username,
  tweetText,
  metrics,
  timeStamp,
  videoOptions,
  previewImage,
  profilePic,
}) {
  return (
    <div className="content-item-container">
      <div className="content-item-header">
        <img src={profilePic}></img>
        <div className="content-header-names">
          <h1>{name}</h1>
          <p>@{username}</p>
        </div>
        <div className="content-metrics">
          <p>
            <i className="fa-solid fa-thumbs-up"></i> {metrics.like_count}
          </p>
          <p>
            <i className="fa-solid fa-retweet"></i> {metrics.retweet_count}
          </p>
        </div>
      </div>
      <div className="content-text-container">{tweetText}</div>
      {previewImage !== "NONE" ? <img src={previewImage}></img> : <div></div>}
      <p>{timeStamp}</p>
    </div>
  );
}

export default ContentItem;
