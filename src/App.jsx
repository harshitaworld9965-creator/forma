import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Journal from "./components/Journal.jsx";

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <Header />

      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Journal />
      </main>
    </>
  );
}

export default App;