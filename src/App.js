import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import BookingpPart from './components/BookingpPart';
import OverView from './components/OverView';
import Footer from './components/Footer';
import {
  BrowserRouter as Router, Switch,
} from "react-router-dom";
import PopUp from './components/PopUp';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <BookingpPart />
        <OverView />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
