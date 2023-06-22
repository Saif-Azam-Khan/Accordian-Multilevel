// Import necessary styles and components
import { useState } from "react";
import "./App.css";
import Cards from "./Cards";

function App() {
  // Define state to keep track of which card is currently shown
  const [show, setShow] = useState("");

  return (
    // Root element with class name "App"
    <div className="App">
      {/* First card */}
      <div className="card">
        {/* Header with text "one" and click event that sets show state to 0 */}
        <h1 onClick={() => setShow(0)}>one</h1>
        {/* If show state is 0, render the Cards component; otherwise, render nothing */}
        {show === 0 ? <Cards /> : null}
      </div>
      {/* Line break */}
      <br></br>
      {/* Line break */}
      <br></br>
      {/* Second card */}
      <div className="card">
        {/* Header with text "two" and click event that sets show state to 1 */}
        <h1 onClick={() => setShow(1)}>two</h1>
        {/* If show state is 1, render the Cards component; otherwise, render nothing */}
        {show === 1 ? <Cards /> : null}
      </div>
    </div>
  );
}

// Export the App component as the default export of this module
export default App;