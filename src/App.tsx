import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import SearchResults from "./components/search/SearchResults";
import './index.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Home />} path="/"></Route>
          <Route element={<SearchResults />} path="/:param"></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
