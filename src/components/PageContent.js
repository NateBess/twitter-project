import React, { useEffect, useState } from "react";
import ContentItem from "./ContentItem";
import "./PageContent.css";
import twitTitle from "../images/twitx-title-pic.png";
import SearchPage from "./SearchPage";
import RandomPage from "./RandomPage";

function PageContent({ currentPage, searchResults }) {
  if (currentPage === "Home") {
    return (
      <div className="content-container width-container center">
        <div className="home-page-container">
          <img id="twit-title" src={twitTitle}></img>
          <p>
            You tired of wasting time on social medias like twitter? Then
            welcome to Twit! Those pesky infinite content feeds steal your time,
            but with Twit, you can search for what you need, and get out!
          </p>
        </div>
      </div>
    );
  }
  if (currentPage === "Search") {
    return <SearchPage searchResults={searchResults} />;
  }
  if (currentPage === "Random") {
    return <RandomPage />;
  }
}

export default PageContent;
