import { useEffect, useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import PageContent from "./components/PageContent";
import axios from "axios";

const baseURL = "http://192.168.0.117:8000/";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  const [searchResults, setSearchResults] = useState([]);

  const getSearchValue = () => {
    const textValue = document.getElementById("search-box").value;
    if (textValue === "") return "vancityreynolds";
    else return textValue;
  };

  const getDataUserSearch = async () => {
    setCurrentPage("Search");
    const searchData = await axios.post(baseURL + "search-user", {
      searchValue: getSearchValue(),
    });
    setSearchResults(searchData.data.tweetArray);
  };

  const getDataContentSearch = async () => {
    setCurrentPage("Search");
    const searchData = await axios.post(baseURL + "search-content", {
      searchValue: getSearchValue(),
    });
    setSearchResults(searchData.data.tweetArray);
  };

  useEffect(() => {
    getDataUserSearch();
  }, []);

  return (
    <div className="App">
      <main className="App-container">
        <PageContent currentPage={currentPage} searchResults={searchResults} />
      </main>
      <Menu
        setCurrentPage={setCurrentPage}
        getDataUserSearch={getDataUserSearch}
        getDataContentSearch={getDataContentSearch}
      />
    </div>
  );
}

export default App;
