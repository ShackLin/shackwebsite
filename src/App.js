import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './Css/index.css';
import Default from './Layout/Default';
import Home from './Page/Home';
import AboutMe from './Page/AboutMe';
import ExerecisePage from './Page/ExerecisePage';
import AuslandPage from './Page/AuslandPage';
import MainSignUpPage from './Page/MainSignUpPage';
import GoogleSignPage from './Page/GoogleSignPage';
import LogInPage from './Page/LogInPage';

import { AuthProvider } from './ContextComponent/EmailSignUp';
import { GithubAuthProvider2 } from './ContextComponent/GithubSignUp';
import { GoogleAuthContextProvider } from './ContextComponent/GoogleSignUp';
import { DeContextProvider } from './ContextComponent/ChangeGerman';
import { NightModeProvider } from './ContextComponent/ChangeNight';

export default function App() {
  return (
    <GithubAuthProvider2>
      <AuthProvider>
        <GoogleAuthContextProvider>
          <DeContextProvider>
            <NightModeProvider>
              <BrowserRouter>
                <Routes>
                  <Route path="/">
                    <Route element={<Default />}>Home
                      <Route index element={< Home />} />
                      <Route path="mainsign" element={<MainSignUpPage />} />
                      <Route path="about" element={<AboutMe />} />
                      <Route path="ausland" element={<AuslandPage />} />
                      <Route path="ubung" element={<ExerecisePage />} />
                      <Route path="google" element={<GoogleSignPage />} />
                      <Route path="login" element={<LogInPage />} />
                    </Route>
                  </Route>
                </Routes>
              </BrowserRouter>
            </NightModeProvider>
          </DeContextProvider>
        </GoogleAuthContextProvider>
      </AuthProvider>
    </GithubAuthProvider2>
  );
}