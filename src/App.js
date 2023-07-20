
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./home.js"
import BuyOne from "./buy-one.js"
import BuyTwo from "./buy-two.js"
import BuyThree from "./buy-three.js"
import Reviews from "./reviews.js"
import MakeReview from "./make-review.js"
import OurGames from "./our-games.js"
import AboutUs from "./about-us.js"
import AboutUs2 from "./about-us-2.js"
import PageNotFound from "./page-not-found.js"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy-one" element={<BuyOne />} />
          <Route path="/buy-two" element={<BuyTwo />} />
          <Route path="/buy-three" element={<BuyThree />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/make-review" element={<MakeReview />} />
          <Route path="/our-games" element={<OurGames />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/about-us-2" element={<AboutUs2 />} />
          <Route path='*' element= {<PageNotFound/>} />
        </Routes>
      </Router>

{/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
  */}

    </div>
  );
}

export default App;
