import "./App.css";
import { Routes, Route } from "react-router-dom";
import SearchArtistAlbums from "./pages/SearchArtistAlbums";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SearchArtistAlbums />} />
      </Routes>
    </div>
  );
}

export default App;
