import logo from './logo.svg';
import './App.css';
import Main from "./main/main"
import BrowserRouter from "react"
import Routes from "react"
import Route from "react"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/cart" element={<cart />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
