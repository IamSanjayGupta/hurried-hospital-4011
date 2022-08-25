import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FooterNormal from "./components/FooterNormal";
import PopulerSearches from "./components/PopulerSearches";
import SearchInput from "./components/SearchInput";
import PasswordForm from "./components/PasswordForm";

function App() {
  return (
    <div className="App">
      <PasswordForm />
      {/* <Navbar />
      <SearchInput />
      <PopulerSearches />
      <Footer /> */}
      <FooterNormal />
    </div>
  );
}

export default App;
