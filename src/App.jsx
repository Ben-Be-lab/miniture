import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import Catalog from "./pages/Catalog"
import Contacts from "./pages/Contacts"
import AboutUs from "./pages/AboutUs"
import Faqs from "./pages/Faqs"



function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Layout />}>
        
          <Route index element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/Contact" element={<Contacts />} />
          <Route path="/About-Us" element={<AboutUs />} />
          <Route path="/FAQs" element={<Faqs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App