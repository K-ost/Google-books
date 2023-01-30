import { useSelector } from "react-redux"
import Search from "./components/Search"
import { RootState } from "./store/store"
import Loader from "./components/Loader"
import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import BookPage from "./pages/BookPage"

function App() {
  const load = useSelector((state: RootState) => state.app.load)
  
  return (
    <div className="App">
      <Search />

      <div className="container">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/:id" element={<BookPage />} />
        </Routes>
      </div>

      {load && <Loader />}
    </div>
  )
}

export default App
