import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeVideo from "./components/HomeVideo";
import TrendingGifts from "./components/TrendingGifts";
import AIGiftIdeas from "./components/AIGiftIdeas";
import GiftCard from "./components/GiftCard";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
        <Routes>
          <Route path="/" element={<HomeVideo />} />
          <Route path="/quiz" element={<AIGiftIdeas />} />
          <Route path="/gift-card" element={<GiftCard />} />
          <Route path="/trending-gifts" element={<TrendingGifts />} />
        </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
