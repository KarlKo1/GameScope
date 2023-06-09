import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { smallImage } from "../util";
import playstation4 from "../assets/playstation4.svg";
import playstation5 from "../assets/playstation5.svg";
import steam from "../assets/steam.svg";
import xbox from "../assets/xbox.svg";
import xboxOne from "../assets/xbox-one.svg";
import nintendo from "../assets/nintendo.svg";
import apple from "../assets/apple.svg";
import gamepad from "../assets/gamepad.svg";
import macos from "../assets/macos.svg";
import starEmpty from "../assets/star-empty.svg";
import starHalf from "../assets/star-half.svg";
import starFull from "../assets/star-full.svg";

const GameDetail = ({ pathId }) => {
  const navigate = useNavigate();
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      navigate("/");
    }
  };

  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation4;
      case "PlayStation 5":
        return playstation5;
      case "Xbox Series S/X":
        return xbox;
      case "Xbox One":
        return xboxOne;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "macOS":
        return macos;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };

  const getStars = () => {
    const stars = [];
    const rating = game.rating;
    let starShape = "";
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        starShape = starFull;
      } else if (i > rating && i - rating < 0.5) {
        starShape = starHalf;
      } else {
        starShape = starEmpty;
      }
      stars.push(<img src={starShape} alt="star" key={i}></img>);
    }
    return stars;
  };

  const { screenShots, game, isLoading } = useSelector(
    (state) => state.details
  );
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathId}>
            <Stats>
              <motion.img
                className="card-top-background-image"
                src={smallImage(game.background_image, 1280)}
                alt={game.background_image}
              />
              <StatsDetail>
                <div className="rating">
                  <motion.h3 layoutId={`title ${pathId}`}>
                    {game.name}
                  </motion.h3>
                  {game.publishers.map((publisher) => (
                    <p className="publisher-name" key={publisher.name}>
                      {publisher.name}
                    </p>
                  ))}
                  <Stars>
                    {getStars()}
                    <p>({game.rating})</p>
                  </Stars>
                  <Urls>
                    <a href={game.website} target="_blank">
                      {game.website}
                    </a>
                    {game.genres.map((genre) => (
                      <Genre className="genre" key={genre.name}>
                        {genre.name}
                      </Genre>
                    ))}
                  </Urls>
                </div>
                <Info>
                  <Platforms>
                    {game.platforms?.map((data) => (
                      <img
                        key={data.platform.id}
                        src={getPlatform(data.platform.name)}
                        alt={data.platform.name}
                        title={data.platform.name}
                      ></img>
                    ))}
                  </Platforms>
                </Info>
              </StatsDetail>
              <Ratings>
                {game.ratings.map((rating) => (
                  <div key={rating.title}>
                    <p>{rating.title}</p>
                    <div
                      className="ratings-count-bar"
                      style={{
                        width: `${rating.count}px`,
                      }}
                    ></div>
                  </div>
                ))}
              </Ratings>
            </Stats>

            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screenShots.results?.map((screenShot) => (
                <img
                  src={smallImage(screenShot.image, 1280)}
                  alt="game screenshot image"
                  key={screenShot.id}
                ></img>
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  padding: 1rem;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #b10101;
  }
  &::-webkit-scrollbar-track {
    background-color: var(--body_color);
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Stats = styled(motion.div)`
  width: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
  height: 80vh;
  background-position: center;
  position: relative;
  @media (max-width: 768px) {
    height: 50vh;
    padding: 0;
  }
`;

const StatsDetail = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  display: flex;
  padding: 1rem;
  position: absolute;
  top: 0;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
  a {
    color: white;
    display: block;
  }
  @media (max-width: 768px) {
    img {
      width: 1rem;
      height: 1rem;
    }
  }
`;

const Urls = styled(motion.div)`
  @media (max-width: 768px) {
    display: none;
  }
`;

const Stars = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  width: 75%;
  flex-wrap: wrap;
  img {
    margin-left: 3rem;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Ratings = styled(motion.div)`
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid white;
  padding: 1rem 2rem;
  margin: 1rem;
  border-radius: 1rem;
  min-width: 360px;
  max-width: 25%;
  position: absolute;
  bottom: 0;
  @media (max-width: 768px) {
    min-width: 250px;
    margin: 0 0 0.5rem 0;
    padding: 0.25rem 0.75rem;
  }
  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @media (max-width: 768px) {
      justify-content: space-between;
    }
    p {
      margin: 0.5rem 1rem;
      color: white;
      flex-basis: 50%;
      @media (max-width: 768px) {
        margin: 0;
      }
    }
    .ratings-count-bar {
      background: white;
      height: 0.5rem;
      max-width: 40%;
    }
  }
`;

const Description = styled(motion.div)`
  padding: 4rem 6rem;
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const Genre = styled(motion.p)`
  display: inline-block;
  margin: 0.5rem 0.5rem 0.5rem 0rem;
  border: 1px solid white;
  padding: 0.25rem 0.5rem;
  font-size: clamp(0.75rem, 2.5vw, 1rem);
`;

export default GameDetail;
