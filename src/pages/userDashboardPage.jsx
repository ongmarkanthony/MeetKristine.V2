import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../components/header';
import Footer from '../components/footer';

function UserDashboard() {
  return (
    <> 
    <Router>
        <Routes>
            <Route path="./components/header" element={<Header />} />
            <Route path="./components/footer" element={<Footer />} />
        </Routes>
    </Router>
    </> 
  )
}

export default UserDashboard;