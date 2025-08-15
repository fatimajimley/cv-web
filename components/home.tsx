import Avatar from "./avatar";
import ParticleBackground from "./ParticleBackground";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="particles">
          <ParticleBackground />
        </div>
        <Avatar />
        <div className="title">
          <h1>NALLELY</h1>
          <h1>JIMÉNEZ</h1>
          <h5>DESARROLLADORA WEB</h5>
        </div>
      </div>
      <style jsx>{`
        .home {
          position: relative;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          align-items: center;
          min-height: 100vh;
          overflow: hidden;
          background-repeat: no-repeat;
          background-size: cover;
          background-image: url("./images/background.png");
        }
        .particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
        }
        .title {
          position: relative;
          z-index: 1;
          width: 400px;
          height: 400px;
          text-align: center;
        }
        .title h1 {
          color: #fff;
          text-shadow: 7px 7px 7px #363333;
          font-size: 75px;
          margin: 0;
        }
        .title h5 {
          color: #fff;
          text-shadow: 7px 7px 7px #363333;
          font-size: 30px;
          margin: 0;
        }
        @media (min-width: 768px) {
            .title h1 {
              font-size: 100px;
            }
        }
        @media (min-width: 1024px) {
          .title h1 {
            font-size: 100px;
          }
        }
      `}</style>
    </>
  );
};

export default Home;
