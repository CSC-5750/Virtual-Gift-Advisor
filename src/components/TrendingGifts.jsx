import StylishSunglasses from "../assets/images/Stylish-Sunglasses.jpg";
import small_name_print from "../assets/images/small_name_print.jpg";
import DiamondBracelet from "../assets/images/Diamond-Bracelet.jpg";
import small_dice_set from "../assets/images/small_dice_set.jpeg";
import LuxuryPerfume from "../assets/images/Luxury-Perfume.jpg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import small_pillow from "../assets/images/small_pillow.jpg";
import small_shirts from "../assets/images/small_shirts.jpg";
import TrendyWatch from "../assets/images/Trendy-Watch.jpg";
import small_pillo from "../assets/images/small_pillo.jpeg";
import TeddyBear from "../assets/images/Teddy-Bear.jpg";
import small_mug from "../assets/images/small_mug.jpg";
import BeerMug from "../assets/images/Beer-Mug.jpg";
import "@splidejs/react-splide/css/skyblue";
import mug from "../assets/images/mug.jpg";
import "./styles/TrendingGifts.css";

const TrendingGifts = () => {
  const trendingGifts = [
    {
      image: TrendyWatch,
    },
    {
      image: LuxuryPerfume,
    },
    {
      image: StylishSunglasses,
    },
    {
      image: DiamondBracelet,
    },
    {
      image: BeerMug,
    },
    {
      image: TeddyBear,
    },
    {
      image: mug,
    },
    {
      image: small_dice_set,
    },
    {
      image: small_mug,
    },
    {
      image: small_name_print,
    },
    {
      image: small_pillow,
    },
    {
      image: small_shirts,
    },
    {
      image: small_pillo,
    },
  ];

  const splideOptions = {
    type: "loop",
    autoplay: true,
    pauseOnHover: true,
    perMove: 1,
  };
  return (
    <div id="trendinggifts" className="trending-gifts-carousel">
      <div className="inner-gift-container">
        <div className="inner-gift-heading">
          <h1>Trending Gifts</h1>
        </div>
        <Splide options={splideOptions}>
          {trendingGifts.map((gift, index) => (
            <SplideSlide key={index}>
              <div className="trending-gift">
                <div className="trending-inner-gift">
                  <img src={gift.image} alt={gift.name} loading="lazy" />
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default TrendingGifts;
