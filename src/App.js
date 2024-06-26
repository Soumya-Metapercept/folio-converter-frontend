import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
// import { BrowserRouter,Routes,Route } from "react-router-dom";
// import Signup from "./components/Signup";
// import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div>
      {/* <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/" element={<Dashboard/>}></Route>

    </Routes>
   </BrowserRouter> */}

      <Header />
      <Dashboard />
    </div>
  );
}

export default App;
