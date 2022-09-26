import React from "react";
import ContentItem from "./ContentItem";
import "./PageContent.css";
import twitTitle from "../images/twitx-title-pic.png";

function PageContent({ currentPage }) {
  if (currentPage === "Home") {
    return (
      <div className="content-container width-container">
        <div className="home-page-container">
          <img id="twit-title" src={twitTitle}></img>
          <div className="home-page-card">
            <h3>Welcome to Twit!</h3>
            <p>
              Who needs "Twitter" when you got Twit! Waste less time with a
              targeted search, or check out random tweets from MY top 5 favorite
              twitter users.
            </p>
          </div>
          <div className="menu-tip">
            <p>Menu Button</p>
            <i class="fa-solid fa-arrow-down"></i>
          </div>
        </div>
      </div>
    );
  }
  if (currentPage === "Search") {
    return (
      <div className="content-container width-container">
        <ContentItem />
      </div>
    );
  }
  if (currentPage === "Random") {
    return (
      <div className="content-container width-container">
        <ContentItem />
      </div>
    );
  }
}

export default PageContent;
