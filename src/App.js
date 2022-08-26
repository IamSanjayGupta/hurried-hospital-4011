import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FooterNormal from "./components/FooterNormal";
import PopulerSearches from "./components/PopulerSearches";
import SearchInput from "./components/SearchInput";
import PasswordForm from "./routes/account/PasswordForm";
import LoginForm from "./routes/account/LoginForm";
import SignupForm from "./routes/account/SignupForm";
import SetPasswordForm from "./routes/account/SetPasswordForm";
import { sendMail } from "./utils/mailer";
import AllRoutes from "./routes/AllRoutes";
import { decrypt, ecrypt } from "./utils/ecryptDecrypt";

function App() {
  // const data = { body: "THIS IS G", to: "sanjayg.8237@gmail.com" };
  // console.log(sendMail({ template: "email_varification", data }));

  return (
    <div className="App">
      <AllRoutes />
    </div>
  );
}

export default App;
