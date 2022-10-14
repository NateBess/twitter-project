import React from "react";
import ContentItem from "./ContentItem";

function SearchPage({ searchResults }) {
  console.log(searchResults);
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
            pictureUrl={tweet.picture_url}
            previewImage={tweet.preview_image_link}
            profilePic={tweet.profilePic}
          />
        );
      })}
      <div className="space-container"></div>
    </div>
  );
}

export default SearchPage;
