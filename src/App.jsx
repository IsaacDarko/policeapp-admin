import { useState } from 'react';
import { Home, Dashboard, AllUsers, NewUser, UserProfile, Reports } from './pages';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() { 
  return (
    
      <div className='bg-primary w-full overflow-hidden'>
        
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<AllUsers />} >
              <Route path="/users/new" element={<NewUser />} />
              <Route path="/users/profile" element={<UserProfile />} />
            </Route>
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </Router>

      </div>

  )
}

export default App
