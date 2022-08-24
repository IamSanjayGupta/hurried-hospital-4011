import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FooterNormal from "./components/FooterNormal";
import PopulerSearches from "./components/PopulerSearches";
import SearchInput from "./components/SearchInput";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchInput />
      <PopulerSearches />
      <FooterNormal />
      <Footer />
    </div>
  );
}

export default App;
