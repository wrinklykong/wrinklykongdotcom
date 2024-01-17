import {BrowserRouter, Routes, Route} from "react-router-dom"
import MainPage from "./view/pages/Main"
import NotFoundPage from "./view/pages/404";
import ProjectPage from "./view/pages/Projects";
import WrinklyNavBar from "./components/wrinklyNavBar";
import AboutPage from "./view/pages/About";
import BeerDirectoryPage from "./view/pages/BeerDirectory";
import BeerPostPage from "./view/pages/BeerPost"

function App() {
  return (
    <BrowserRouter>
      <WrinklyNavBar/>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/projects" element={<ProjectPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/beer" element={<BeerDirectoryPage/>} />
        <Route path="/beer/:id" element={<BeerPostPage/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
