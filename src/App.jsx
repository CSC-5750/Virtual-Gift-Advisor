import TrendingGifts from "./components/TrendingGifts";
import AIGiftIdeas from "./components/AIGiftIdeas";
import HomeVideo from "./components/HomeVideo";
import GiftCard from "./components/GiftCard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";




const App = () => {
  return (
    <div className="App">
      <Header />
      <HomeVideo />
      <AIGiftIdeas />
      <GiftCard />
      <TrendingGifts />
      <Footer />
    </div>
  );
};

export default App;