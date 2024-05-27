import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Top from "./pages/Top"
import SearchResult from "./pages/SearchResult"
import BookDetail from "./pages/BookDetail"
import NotFound from "./pages/NotFound"
import BackBtn from "./components/BackBtn"

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/data/:id" element={<BookDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <BackBtn />
      <Footer />
    </>
  )
}

export default App