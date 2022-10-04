import React from "react";
import ContentItem from "./ContentItem";

function SearchPage({ searchResults }) {
  return (
    <div className="content-container width-container">
      {searchResults.map((tweet) => {
        return (
          <ContentItem
            key={tweet.tweetId}
            userId={tweet.userId}
            tweetId={tweet.tweetId}
            name={tweet.name}
            username={tweet.username}
            tweetText={tweet.tweetText}
            metrics={tweet.metrics}
            timeStamp={tweet.timeStamp}
            videoOptions={tweet.video_options}
            previewImage={tweet.preview_image_link}
            profilePic={tweet.profilePic}
          />
        );
      })}
    </div>
  );
}

export default SearchPage;
