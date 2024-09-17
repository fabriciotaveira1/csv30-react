import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RandomSort from './pages/random-sort/RandomSort.js';
import HomePage from './pages/home/Home.js';
import AboutPage from './pages/about/About.js';
import ContactPage from './pages/contact/Contact.js';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* HEADER */}
        <header className="app-header">
          <Header />
        </header>

        <main className="app-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/random-sort" element={<RandomSort />} />
          </Routes>
        </main>

        <footer className="app-footer">
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
