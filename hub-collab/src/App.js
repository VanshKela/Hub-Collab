import logo from "./logo.svg";
import "./App.css";
import image from "./assets/image.png";
import TextField from "./components/TextField.js";
import PasswordField from "./components/PasswordField.js";
import FileUploadButton from "./components/Uploadimage.js";

function App() {
  return (
    <main>
      <div className="container">
        <div className="form-container">
          <header>
            <h1>HubCollab</h1>
          </header>
          <article className="form">
            <h2>Sign Up</h2>
            <TextField property={"Name"}/>
            <br></br>
            <TextField property={"Email"}/>
            <br></br>
            <PasswordField property={"Password"}/>
            <br></br>
            <FileUploadButton/>
            <br></br>
            <button type="button" class="signUpButton">SIGN UP</button>
            <p>Already have an account?   <span class="signInButton">SIGN IN</span></p>
          </article>
        </div>
        <div className="img-container">
          <img className="img"  align="right" src={image}/>
        </div>
      </div>
    </main>
  );
}

export default App;
