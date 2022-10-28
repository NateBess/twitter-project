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
  mediaData,
}) {
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

      <div className="content-media-container">
        {Array.from(mediaData).map((mediaItem) => {
          if (mediaItem.type === "photo")
            return (
              <div className="media-item">
                <img src={mediaItem.image_url}></img>
              </div>
            );
          if (mediaItem.type === "video")
            return (
              <div className="media-item">
                <video controls>
                  <source
                    src={returnVideoLink(mediaItem.variants)}
                    type="video/mp4"
                  ></source>
                </video>
              </div>
            );
          if (mediaItem.type === "animated_gif")
            return <div className="media-item">GIF</div>;
        })}
      </div>
      <div className="timestamp">{timeStamp}</div>
    </div>
  );
}

export default ContentItem;
