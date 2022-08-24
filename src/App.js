import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FooterNormal from "./components/FooterNormal";
import PopulerSearches from "./components/PopulerSearches";

function App() {
  return (
    <div className="App">
      <Navbar />
      <PopulerSearches />
      <FooterNormal />
      <Footer />
    </div>
  );
}

export default App;
