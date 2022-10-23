import React, { useEffect, useState } from "react";
import ContentItem from "./ContentItem";
import "./PageContent.css";
import twitTitle from "../images/twitx-title-pic.png";
import SearchPage from "./SearchPage";

function PageContent({ currentPage, searchResults }) {
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
            <h3>Menu Below</h3>
            <i className="fa-solid fa-arrow-down"></i>
          </div>
        </div>
      </div>
    );
  }
  if (currentPage === "Search") {
    return <SearchPage searchResults={searchResults} />;
  }
  if (currentPage === "Random") {
    return (
      <div className="content-container width-container">
        <h1>The Primeagen</h1>
        <h1>Ryan Reynolds</h1>
        <h1>Graham Stephan</h1>
        <h1>Jordan B Peterson</h1>
        <h1></h1>
      </div>
    );
  }
}

export default PageContent;
