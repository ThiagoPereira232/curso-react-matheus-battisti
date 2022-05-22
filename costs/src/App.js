import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';

import Container from './components/layouts/Container';

function App() {
  return (
    <Router>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/company">Empresa</Link></li>
        <li><Link to="/contact">Contato</Link></li>
        <li><Link to="/newproject">Novo projeto</Link></li>
      </ul>
        <Container customClass="min-height">
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/company" element={<Company />}/>
            <Route exact path="/contact" element={<Contact />}/>
            <Route exact path="/newproject" element={<NewProject />}/>
          </Routes>
        </Container>
      <p>Footer</p>
    </Router>
  );
}

export default App;
