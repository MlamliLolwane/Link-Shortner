import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import About from './views/About.jsx';
import Contact from './views/Contact.jsx';
import Home from './views/authenticated/Home.jsx';
import AuthenticatedAbout from './views/authenticated/AuthenticatedAbout.jsx';
import AuthenticatedContact from './views/authenticated/AuthenticatedContact.jsx';
import AuthenticatedLink from './views/authenticated/AuthenticatedLink.jsx';
import Referrer from './views/authenticated/Referrer.jsx';
import ViewLink from './views/authenticated/ViewLink.jsx';
import AddLink from './views/authenticated/AddLink.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="authenticated/home" element={<Home />} />
        <Route path="authenticated/about" element={<AuthenticatedAbout />} />
        <Route path="authenticated/contact" element={<AuthenticatedContact />} />
        <Route path="authenticated/links" element={<AuthenticatedLink />} />
        <Route path="authenticated/links/view" element={<ViewLink />} />
        <Route path="authenticated/referrers" element={<Referrer />} />
        <Route path="authenticated/add-link" element={<AddLink />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
