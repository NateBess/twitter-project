import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import PageContent from "./components/PageContent";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  return (
    <div className="App">
      <main className="App-container">
        <PageContent currentPage={currentPage} />
      </main>
      <Menu setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
