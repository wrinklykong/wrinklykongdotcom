import {BrowserRouter, Routes, Route} from "react-router-dom"
import Main from "./view/pages/Main"
import NotFoundPage from "./view/pages/404";
import ProjectPage from "./view/pages/Projects";
import TopBar from "./components/topBar";

function App() {
  return (
    <BrowserRouter>
      <TopBar/>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/projects" element={<ProjectPage/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
