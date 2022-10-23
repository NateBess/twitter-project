import React, { useState } from "react";
import "./Menu.css";

function Menu({ setCurrentPage, getDataUserSearch, getDataContentSearch }) {
  const [menuStatus, setMenuStatus] = useState(false);
  return (
    <div className="menu-container width-container">
      <div className="menu-button-container">
        <button
          id="menu-button"
          className="menu-button width-container"
          onClick={() => setMenuStatus(!menuStatus)}
        >
          {menuStatus ? (
            <i className="fa-solid fa-angle-down"></i>
          ) : (
            <i className="fa-solid fa-angle-up"></i>
          )}
        </button>
      </div>
      {/* <div className="menu-items-container"> */}
      <div
        className={
          menuStatus
            ? "menu-hieght-container shown"
            : "menu-height-container hidden"
        }
      >
        <div className="menu-items-container width-container">
          <div className="menu-item" onClick={() => setCurrentPage("Home")}>
            <i className="fa-solid fa-house icon-coloring"></i>
          </div>
          <div className="menu-item menu-search-container">
            <input
              className="search-box"
              id="search-box"
              type="search"
              placeholder="Search..."
              autoComplete="off"
              onClick={() => setCurrentPage("Search")}
            ></input>
            <button
              className="search-button"
              onClick={() => {
                getDataUserSearch();
              }}
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <button
              className="search-button search-button-content"
              onClick={() => {
                getDataContentSearch();
              }}
            >
              <i className="fa-solid fa-comment"></i>
            </button>
          </div>
          <div className="menu-item" onClick={() => setCurrentPage("Random")}>
            <i className="fa-solid fa-dice icon-coloring"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
