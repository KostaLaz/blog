import './App.css';
import Home from './containers/Home';
import Header from './components/Header';
import Hero from './components/Hero';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ContactUs from './containers/ContactUs';
import Post from './containers/Post';
import About from './containers/About';

function App() {
  return (
    <Router>

    <div className="App">
       <Header />
       <Hero />
      <Route path="/" exact component={Home} />
      <Route path="/contact-us" exact component={ContactUs} />
      <Route path="/about-us" exact component={About} />
      <Route path='/post' exact component={Post} />
    </div>
  
    </Router>
  );
}

export default App;
