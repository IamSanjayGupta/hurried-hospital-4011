import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FooterNormal from "./components/FooterNormal";
import PopulerSearches from "./components/PopulerSearches";
import SearchInput from "./components/SearchInput";
import PasswordForm from "./components/account/PasswordForm";
import LoginForm from "./components/account/LoginForm";
import SignupForm from "./components/account/SignupForm";
import SetPasswordForm from "./components/account/SetPasswordForm";

function App() {
  return (
    <div className="App">
      <SetPasswordForm />
      {/* <PasswordForm />
      <SignupForm />
      <LoginForm />
      <Navbar />
      <SearchInput />
      <PopulerSearches />
      <Footer />
      */}
      <FooterNormal />
    </div>
  );
}

export default App;
