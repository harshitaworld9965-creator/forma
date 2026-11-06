import "./App.css";

function App() {
  return (
    <div className="site">
      <header className="navbar">
        <a className="logo" href="#">forma.</a>

        <nav className="nav-links">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
        </nav>

        <a className="button button-small" href="#pricing">
          Get Started
        </a>
      </header>
    </div>
  )
}

export default App;