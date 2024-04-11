import "./App.css";
import freeCodeCampLogo from "./imagenesfreecodecamp-logo.png";

function App() {
  return (
    <div className="App">
      <div className="freecodecamp-logo-contenendor">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="Logo de freeCodeCamp"
        />
      </div>
    </div>
  );
}

export default App;
