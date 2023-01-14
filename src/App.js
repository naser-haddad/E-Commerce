import { NavBar } from "./Components/index";
import { Footer } from './Sections/index';
import { Home, SignInPage, SignUpPage} from "./Pages/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/SignInPage" element={<SignInPage/>}/>
          <Route path="/SignUpPage" element={<SignUpPage/>}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};
export default App;