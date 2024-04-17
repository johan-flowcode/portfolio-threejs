import { Router, Switch, Route } from 'wouter';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';



// Importa otras páginas según sea necesario

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Projects" component={Projects} />
        <Route path="/Contact" component={Contact} />

        {/* Agrega rutas adicionales aquí */}
      </Switch>
    </Router>
  );
}

export default App;