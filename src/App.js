import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import RandomSort from './pages/random-sort/RandomSort.js';

function App() {
  return (
    // HEADER
    <div className="app-container">
      <header className="app-header">
        <Header />
      </header>
      <main className="app-content">
        <RandomSort />
      </main>
      <footer className="app-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
