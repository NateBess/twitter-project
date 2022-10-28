import React from "react";
import ContentItem from "./ContentItem";

function SearchPage({ searchResults }) {
  console.log(searchResults);
  try {
    return (
      <div className="content-container width-container">
        {searchResults.map((tweet) => {
          return (
            <ContentItem
              key={tweet.tweetData.tweetId}
              userId={tweet.tweetData.userId}
              tweetId={tweet.tweetData.tweetId}
              name={tweet.tweetUserData.name}
              username={tweet.tweetUserData.username}
              tweetText={tweet.tweetData.tweetText}
              likes={tweet.tweetData.likes}
              retweets={tweet.tweetData.retweets}
              timeStamp={tweet.tweetData.timeStamp}
              profilePic={tweet.tweetUserData.profile_image_url}
              mediaData={tweet.tweetMediaData}
            />
          );
        })}
        <div className="space-container"></div>
      </div>
    );
  } catch {
    return (
      <div className="content-container width-container">
        <p className="search-results-error">No Search Results...</p>
        <div className="space-container"></div>
      </div>
    );
  }
}

export default SearchPage;
