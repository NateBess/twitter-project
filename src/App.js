import { useEffect, useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import PageContent from "./components/PageContent";
import axios from "axios";

const baseURL = "http://localhost:8000/";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  const [searchResults, setSearchResults] = useState([]);
  const [nextToken, setNextToken] = useState("");

  const getData = async () => {
    const searchData = await axios.get(baseURL);
    setSearchResults(searchData.data.tweets);
    setNextToken(searchData.data.nextToken);
    console.log("Data Requested");
    console.log(searchData.data.tweets);
    console.log(searchData.data.nextToken);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <main className="App-container">
        <PageContent currentPage={currentPage} searchResults={searchResults} />
      </main>
      <Menu setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
