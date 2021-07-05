import logo from "./logo.svg";
import "./App.css";
import image from "./assets/image.png";

function App() {
  return (
    <main>
      <div className="container">
        <div className="form-container">
          <header>
            <h1>Hub Collab</h1>
          </header>
          <article className="form">
            <h2>Sign Up</h2>
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
