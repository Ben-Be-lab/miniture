import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import Catalog from "./pages/Catalog"
import Contacts from "./pages/Contacts"
import AboutUs from "./pages/AboutUs"
import Faqs from "./pages/Faqs"

import AdminDashboard from "./pages/AdminDashboard"

import ProtectedRoute from "./Routes/AdminRoute"
import Ecommerce from "./pages/Ecommerce"




function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/Contact" element={<Contacts />} />
          <Route path="/About-Us" element={<AboutUs />} />
          <Route path="/FAQs" element={<Faqs />} />
        </Route>

       <Route element={<ProtectedRoute />}>
  <Route path="/admin/dashboard" element={<AdminDashboard />}>
    
  
    <Route index element={<Ecommerce />} /> 
    
    <Route path="analytics" element={<div>Analytics Sub-page</div>} />
    <Route path="marketing" element={<div>Marketing Sub-page</div>} />
    <Route path="logistics" element={<div>Logistics Sub-page</div>} />
  </Route>
</Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;