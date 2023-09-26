import { useState } from 'react';
import { Home, Dashboard, AllUsers, NewUser, UserProfile, Reports } from './pages';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { SignedIn, SignedOut, RedirectToSignIn, SignIn, SignUp, UserButton } from "@clerk/clerk-react";
import './App.css';

function App() { 
  return (
    
      <div className='bg-primary w-full overflow-hidden'>

        <Router>

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/sign-in/*" element={<SignIn routing="path" path="/sign-in" />}/>
            <Route path="/sign-up/*" element={<SignUp routing="path" path="/sign-up" />}/>

            <Route path="/dashboard" element={
              <>
                <SignedIn>
                  <Dashboard />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>      
            } />

            <Route path="/users" element={
              <>
                <SignedIn>
                  <AllUsers />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
                  
            } >

              <Route path="/users/new" element={
                <>
                  <SignedIn>
                    <NewUser />
                  </SignedIn>
                  <SignedOut>
                    <RedirectToSignIn />
                  </SignedOut>
                </>
              
              } />

              <Route path="/users/profile" element={
                <>
                  <SignedIn>
                    <UserProfile />
                  </SignedIn>
                  <SignedOut>
                    <RedirectToSignIn />
                  </SignedOut>
                </>
              } />
            </Route>

            <Route path="/reports" element={
              <>
                <SignedIn>
                  <Reports />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            
            } />
          </Routes>

        </Router>

      </div>

  )
}

export default App
