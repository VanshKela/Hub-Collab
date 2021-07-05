import logo from "./logo.svg";
import "./App.css";
import image from "./assets/image.png";
import TextField from "./components/TextField.js";
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
            <TextField property={"Email"}/>
            <TextField property={"Password"}/>
            <FileUploadButton/>
          </article>
        </div>
        <div className="img-container">
          <img className="img" src={image} />
        </div>
      </div>
    </main>
  );
}

export default App;
