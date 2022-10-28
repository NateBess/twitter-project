import axios from "axios";
import React, { useState } from "react";
import ContentItem from "./ContentItem";
import "./RandomPage.css";
import "./ContentItem.css";

const baseURL = "http://192.168.0.117:8000/";

function RandomPage() {
  const [randomTweet, setRandomTweet] = useState([]);

  const getUserRandomTweet = async (user) => {
    const searchData = await axios.post(baseURL + "search-user", {
      searchValue: user,
    });
    const tweet = searchData.data.tweetArray[Math.floor(Math.random() * 10)];
    setRandomTweet(tweet);
  };

  return (
    <div className="content-container width-container">
      <div className="favorite-users-container">
        <button
          className="favorite-user-button"
          onClick={async () => {
            getUserRandomTweet("theprimeagen");
          }}
        >
          <img src="https://pbs.twimg.com/profile_images/1510770649559547908/zd9t45gH_normal.jpg"></img>
          <div className="favorite-user">The Primeagen</div>
        </button>

        <button
          className="favorite-user-button"
          onClick={async () => {
            getUserRandomTweet("VancityReynolds");
          }}
        >
          <img src="https://pbs.twimg.com/profile_images/1299844050208555008/7wMQaJRA_normal.jpg"></img>
          <div className="favorite-user">Ryan Reynolds</div>
        </button>

        <button
          className="favorite-user-button"
          onClick={async () => {
            getUserRandomTweet("GrahamStephan");
          }}
        >
          <img src="https://pbs.twimg.com/profile_images/1068007184800215040/_gCkXkbQ_normal.jpg"></img>
          <div className="favorite-user">Graham Stephan</div>
        </button>
        <button
          className="favorite-user-button"
          onClick={async () => {
            getUserRandomTweet("JordanBPeterson");
          }}
        >
          <img src="https://pbs.twimg.com/profile_images/1407056014776614923/TKBC60e1_normal.jpg"></img>
          <div className="favorite-user">Dr Jordan B Peterson</div>
        </button>
        <button
          className="favorite-user-button"
          onClick={async () => {
            getUserRandomTweet("KevinHart4real");
          }}
        >
          <img src="https://pbs.twimg.com/profile_images/1563941988566802433/BKBnGWhb_normal.jpg"></img>
          <div className="favorite-user">Kevin Hart</div>
        </button>
      </div>
      <div className="random-tweet">
        {randomTweet.tweetData !== undefined ? (
          <ContentItem
            key={randomTweet.tweetData.tweetId}
            userId={randomTweet.tweetData.userId}
            tweetId={randomTweet.tweetData.tweetId}
            name={randomTweet.tweetUserData.name}
            username={randomTweet.tweetUserData.username}
            tweetText={randomTweet.tweetData.tweetText}
            likes={randomTweet.tweetData.likes}
            retweets={randomTweet.tweetData.retweets}
            timeStamp={randomTweet.tweetData.timeStamp}
            profilePic={randomTweet.tweetUserData.profile_image_url}
            mediaData={randomTweet.tweetMediaData}
          />
        ) : (
          <div></div>
        )}
        <div className="space-container"></div>
      </div>
    </div>
  );
}

export default RandomPage;
