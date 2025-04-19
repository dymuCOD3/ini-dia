import "./App.css"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Page2 from "./pages/Page2"
import Page3 from "./pages/Page3"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/scan" element={<Page2/>}></Route>
        <Route path="/capture" element={<Page3/>}></Route>
      </Routes>
    </BrowserRouter>

    
  )
}

export default App