import { useEffect, useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import PageContent from "./components/PageContent";
import axios from "axios";

const baseURL = "http://192.168.0.117:8000/";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  const [searchResults, setSearchResults] = useState([]);
  const [nextToken, setNextToken] = useState("");

  const getSearchValue = () => {
    const textValue = document.getElementById("search-box").value;
    if (textValue === "") return "dream";
    else return textValue;
  };

  const getData = async () => {
    const searchData = await axios.post(baseURL, {
      searchValue: getSearchValue(),
    });

    setSearchResults(searchData.data.tweets);
    setNextToken(searchData.data.nextToken);
    console.log("Data Requested");
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <main className="App-container">
        <PageContent currentPage={currentPage} searchResults={searchResults} />
      </main>
      <Menu setCurrentPage={setCurrentPage} getData={getData} />
    </div>
  );
}

export default App;
