import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.css';
import './App.scss';

import { BrowserRouter as Router, Route } from 'react-router';

import Header from './components/Header';
import Footer from './components/Footer';

import Routes from './config/Routes';

function App() {
  return (
    <Router>
      <Route render={pros => (
        <>
          <Header {...props} />
          <Routes/>
          <Footer/>
          </>
      )}/>
    </Router>
    
  );
}

export default App;
