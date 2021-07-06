import "./signup.css";
import image from "./assets/image.png";
import TextField from "./components/TextField.js";
import FileUploadButton from "./components/Uploadimage.js";

function LogIn() {
  return (
    <main>
      <div className="container">
        <div className="form-container">
          <header>
            <h1>HubCollab</h1>
          </header>
          <article className="form">
            <h2>Log In</h2>
            <TextField type={"text"} property={"Name"} />
            <br></br>
            <TextField type={"text"} property={"Email"} />
            <br></br>
            <TextField type={"password"} property={"Password"} />
            <br></br>
            <FileUploadButton />
            <br></br>
            <button type="button" class="signUpButton">
              SIGN UP
            </button>
            <p>
              Already have an account? <span class="signInButton">SIGN IN</span>
            </p>
          </article>
        </div>
        <div className="img-container">
          <img className="img" src={image} />
        </div>
      </div>
    </main>
  );
}

export default LogIn;
