import LandingPage from 'pages/LandingPage';
import AboutPage from 'pages/AboutPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
      </Router>
    </>
  );
}

export default App;
