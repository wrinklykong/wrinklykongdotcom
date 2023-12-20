import {BrowserRouter, Routes, Route} from "react-router-dom"
import MainPage from "./view/pages/Main"
import NotFoundPage from "./view/pages/404";
import ProjectPage from "./view/pages/Projects";
import WrinklyNavBar from "./components/wrinklyNavBar";
import AboutPage from "./view/pages/About";
import TestBookPage from "./view/pages/TestBook";

function App() {
  return (
    <BrowserRouter>
      <WrinklyNavBar/>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/projects" element={<ProjectPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/book" element={<TestBookPage/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
