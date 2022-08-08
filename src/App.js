import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Button from "react-bootstrap/Button";

function App() {
  const activateLasers = (e) => {
    console.log("You clicked.");
  };

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <Button variant="primary" onClick={activateLasers}>
    //       click me
    //     </Button>
    //   </header>
    // </div>
    <div className="container">
      <div className="section-first">
        <h1 className="section-f1-h1">Title Heading</h1>
      </div>
    </div>
  );
}

export default App;
