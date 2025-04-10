import { useNavigate } from "react-router-dom";
import "./styles/AIGiftIdeas.css";

const AIGiftIdeas = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic form submission handling
    navigate("/results");
  };

  return (
    <div id="aichat" className="AI-Gift-Ideas">
      <div className="innerContainer">
        <div className="innerContainer-heading">
          <h1>AI Curated Gift Ideas</h1>
          <p>
            Our tool will help you choose the perfect gift. Fill out the form below
            with information about the recipient and budget for suggested gifts!
          </p>
        </div>
        <div className="innerContainer-form">
          <form onSubmit={handleSubmit}>
            <h3>Gifts Details</h3>
            <div className="form-group">
              <label htmlFor="relationship">Relationship</label>
              <input
                type="text"
                className="form-control"
                id="relationship"
                placeholder="Wife, Husband, Friend, etc."
                required
              />

              <label htmlFor="age">Age</label>
              <input
                type="number"
                className="form-control"
                id="age"
                placeholder="10, 24, 40, etc."
                required
              />

              <label htmlFor="occasion">Occasion</label>
              <input
                type="text"
                className="form-control"
                id="occasion"
                placeholder="Birthday, Anniversary, etc."
                required
              />

              <label htmlFor="interest">Interest</label>
              <input
                type="text"
                className="form-control"
                id="interest"
                placeholder="Sports, Music, etc."
                required
              />

              <label htmlFor="budget">Budget</label>
              <input
                type="number"
                className="form-control"
                id="budget"
                placeholder="1000, 5000, 10000, etc."
                required
              />
            </div>
            <div className="innerContainer-button">
              <button type="submit" className="btn">
                Get Gift Suggestions
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AIGiftIdeas;