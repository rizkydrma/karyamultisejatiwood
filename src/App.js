import LandingPage from 'pages/LandingPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Route exact path="/">
          <LandingPage />
        </Route>
      </Router>
    </>
  );
}

export default App;
