function App() {
  return(
    <>
    <a className="skip-link" href="#main-content">
      Skip to content
    </a>

    <main id="main-content" tabIndex={-1}>
      <section
      className="section container"
      aria-labelledby="intro-title"
      >
        <p className="eyebrow">
          A personal film & television journal
        </p>

        <h1 id="intro-title">AFTERHOURS</h1>
        <p> An archive of things that stayed with me.</p>
      </section>
    </main>
    </>
  );
}

export default App;