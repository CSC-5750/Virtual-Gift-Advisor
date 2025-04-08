import necklace from "../assets/images/necklace.jpg";
import bracelet from "../assets/images/bracelet.jpg";
import earrings from "../assets/images/earrings.jpg";
import candles from "../assets/images/candles.jpg";
import watch from "../assets/images/watch.jpg";
import ring from "../assets/images/ring.jpg";
import "./styles/GiftCard.css";

const GiftCard = () => {
  const cards = [
    {
      name: "Golden Necklace",
      image: necklace,
      description: "Elegant necklace with a touch of charm",
      price: 499.0,
    },
    {
      name: "Candles",
      image: candles,
      description: "Set the ambiance with soothing scents",
      price: 199.0,
    },
    {
      name: "Golden Bracelet",
      image: bracelet,
      description: "A bracelet that will make her feel special",
      price: 299.0,
    },
    {
      name: "Black Earrings",
      image: earrings,
      description: "A pair of earrings that will make her shine",
      price: 399.0,
    },
    {
      name: "Diamond Ring",
      image: ring,
      description: "A ring that will make her feel like royalty",
      price: 149.0,
    },
    {
      name: "Premium Watch",
      image: watch,
      description: "A watch that will make her feel like royalty",
      price: 799.0,
    },
  ];
  return (
    <div id="giftcard" className="GiftCard">
      <div className="inner-GiftCard">
        <div className="inner-GiftCard-heading">
          <h1>Recommended Gifts</h1>
        </div>
        <div className="innerCard">
          {cards.map((card, index) => (
            <div className="innerCard-item" key={index}>
              <img src={card.image} alt={card.name} />
              <h3>{card.name}</h3>
              <p>{card.description}</p>
              <p>₹{card.price}</p>
              <button type="button">Buy now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GiftCard;
