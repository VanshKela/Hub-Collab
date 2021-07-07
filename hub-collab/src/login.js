import "./signup.css";
import image2 from "./assets/image2.png";
import TextField from "./components/TextField.js";
import FileUploadButton from "./components/Uploadimage.js";
import {Link} from "react-router-dom";
function LogIn() {
  return (
    <main>
      <div className="container">
        <div className="form-container">
          <header>
            <h1>HubCollab</h1>
          </header>
          <article className="form">
            <h2>Sign In</h2>
            
            <TextField type={"text"} property={"Email"} />
            <br></br>
            <TextField type={"password"} property={"Password"} />
            <br></br><br></br>
            
            <button type="button" class="signUpButton">
              SIGN IN
            </button>
            <br></br><br></br>
            <p>
              Forgot Password? <span class="signInButton">Click Here to Reset</span>
            </p>
            <p>
              Don't Have an Account? <span class="signInButton"><Link to ="/">SIGN UP</Link></span>
            </p>
          </article>
        </div>
        <div className="img-container">
          <img className="img"  src={image2} />
        </div>
      </div>
    </main>
  );
}

export default LogIn;
