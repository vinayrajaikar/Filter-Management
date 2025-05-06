import { BrowserRouter, Route, Routes } from "react-router-dom"
import CreateFilter from "./pages/CreateFilter"
import UpdateFilter from "./pages/UpdateFilter"
import HomePage from "./pages/HomePage"


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/create_filter" element={<CreateFilter/>}/>
        <Route path="/update_filter/:id" element={<UpdateFilter/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
