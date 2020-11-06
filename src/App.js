import Homepage from "./pages/Homepage";
import "./pages/styles/app.scss";
import { BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Homepage}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
