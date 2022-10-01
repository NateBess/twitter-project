import React from "react";
import ContentItem from "./ContentItem";

function SearchPage({ searchResults }) {
  return (
    <div className="content-container width-container">
      {searchResults.map((tweet) => {
        console.log(tweet);
        return <ContentItem key={tweet.tweetId} tweetText={tweet.tweetText} />;
      })}
    </div>
  );
}

export default SearchPage;
