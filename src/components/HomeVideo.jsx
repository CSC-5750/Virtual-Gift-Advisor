import video from "../assets/video/Home_video.mp4";
import "./styles/HomeVideo.css";

const HomeVideo = () => {
  return (
    <>
      <div className="video-background">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="video-text">
        <h1>Your Personal Gift Advisor</h1>
        <p>
          <b>AI</b>-Powered Gifting: Where Thoughtfulness Meets Innovation
        </p>
      </div>
      <div className="expand-more">
        <span className="material-symbols-outlined">expand_more</span>
      </div>
    </>
  );
};

export default HomeVideo;
