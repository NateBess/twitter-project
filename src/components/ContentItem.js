import React from "react";
import "./ContentItem.css";

function ContentItem({
  userId,
  tweetId,
  name,
  username,
  tweetText,
  likes,
  retweets,
  timeStamp,
  profilePic,
}) {
  /*
  const returnVideoLink = (videoOptions) => {
    let largest = 0;
    let largestURL = "";
    try {
      videoOptions.map((videoObject) => {
        if (videoObject.bit_rate > largest) {
          largest = videoObject.bit_rate;
          largestURL = videoObject.url;
        }
      });
    } catch {}
    return largestURL;
  };
  */

  return (
    <div className="content-item-container">
      <div className="content-item-header">
        <img src={profilePic}></img>
        <div className="content-header-names">
          <h1>{name}</h1>
          <a href={`https://twitter.com/${username}`} target="_blank">
            @{username}
          </a>
        </div>
        <div className="content-metrics">
          <p>
            <i className="fa-solid fa-heart"></i> {likes}
          </p>
          <p>
            <i className="fa-solid fa-retweet"></i> {retweets}
          </p>
        </div>
      </div>
      <div className="content-text-container">{tweetText}</div>
      {/*
      <div className="content-media-container">
        {pictureUrl !== "NONE" ? <img src={pictureUrl}></img> : <div></div>}
        {videoOptions !== "NONE" ? (
          <video controls>
            <source
              src={returnVideoLink(videoOptions)}
              type="video/mp4"
            ></source>
          </video>
        ) : (
          <div></div>
        )}
       </div> */}
      <div className="timestamp">{timeStamp}</div>
    </div>
  );
}

export default ContentItem;
