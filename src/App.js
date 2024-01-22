import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/static/header/Header';
import Footer from './components/static/footer/Footer';

// import pages
import Home from './components/pages/home/Home';
import Features from './components/pages/features/Features';
import Pricing from './components/pages/pricing/Pricing';
import Faq from './components/pages/faq/Faq';
import About from './components/pages/about/About';

import AdminPanel from './components/admin/Admin_Panel';
function App() {
  return (
    <div className="container-app">
      <Router>
        <Header />
        <main className='container h-60'>
          <Routes>
            <Route exact path='' element={<Home />} />
            <Route path='features' element={<Features />} />
            <Route path='pricing' element={<Pricing />} />
            <Route path='faq' element={<Faq />} />
            <Route path='about' element={<About />} />
            <Route path='admin/*' element={<AdminPanel />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
