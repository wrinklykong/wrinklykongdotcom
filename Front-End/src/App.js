import {BrowserRouter, Routes, Route} from "react-router-dom"
import MainPage from "./view/pages/Main"
import NotFoundPage from "./view/pages/404";
import ProjectPage from "./view/pages/Projects";
import WrinklyNavBar from "./components/wrinklyNavBar";
import AboutPage from "./view/pages/About";
import BeerPage from "./view/pages/Beer";

function App() {
  return (
    <BrowserRouter>
      <WrinklyNavBar/>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/projects" element={<ProjectPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/beer" element={<BeerPage/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
