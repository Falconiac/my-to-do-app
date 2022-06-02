import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

//Sobald Ihr Projekt eingerichtet ist und React Router
//als Abhängigkeit installiert ist, öffnen Sie die Datei
//src/index.js in Ihrem Texteditor. Importieren Sie
//BrowserRouter aus react-router-dom am Anfang der Datei
//und verpacken Sie Ihre App in einen <BrowserRouter>:

//const root = ReactDOM.createRoot(
//document.getElementById("root")
// );
//root.render(
<React.StrictMode>
  <Router>
    <App />
  </Router>
</React.StrictMode>;
// );

//-------------------------------------------------------

//Jetzt können Sie den React Router überall in Ihrer
//Anwendung verwenden! Für ein einfaches Beispiel öffnen
//Sie src/App.js und ersetzen Sie das Standard-Markup durch einige Routen:

import { Routes, Route, Link } from "react-router-dom";

//function App() {
//return ( <<<<<<<<<------------Nach dem RETURN !!!!!
//<div className="App">
//<h1>Welcome to React Router!</h1>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="about" element={<About />} />
</Routes>;
//</div>
//);
//}

//-------------------------------------------------------

// Erstellen Sie nun, immer noch in src/App.js, Ihre Routenkomponenten:

// App.js
function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}
