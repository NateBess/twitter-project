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
  const returnVideoLink = (videoOptions) => {
    let largest = 0;
    let largestURL = "";
    videoOptions.map((videoObject) => {
      if (videoObject.bit_rate > largest) {
        largest = videoObject.bit_rate;
        largestURL = videoObject.url;
      }
    });
    return largestURL;
  };

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
            <i className="fa-solid fa-heart"></i> {metrics.like_count}
          </p>
          <p>
            <i className="fa-solid fa-retweet"></i> {metrics.retweet_count}
          </p>
        </div>
      </div>
      <div className="content-text-container">{tweetText}</div>
      {videoOptions !== "NONE" ? (
        <video controls>
          <source src={returnVideoLink(videoOptions)} type="video/mp4"></source>
        </video>
      ) : (
        <div></div>
      )}
      <div className="timestamp">{timeStamp}</div>
    </div>
  );
}

export default ContentItem;
