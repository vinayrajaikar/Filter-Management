import { BrowserRouter, Route, Routes } from "react-router-dom"
import CreateFilter from "./pages/CreateFilter"


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/create_filter" element={<CreateFilter/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
