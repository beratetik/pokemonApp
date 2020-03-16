import React from "react";
import PropTypes from "prop-types";
import classes from "./PokemonImage.module.css";
import ReactImageFallback from "react-image-fallback";

const PokemonImage = ({ name, fallbackImg }) => {
  const imgSrc = name
    ? `http://pokestadium.com/sprites/xy/${name}.gif`
    : fallbackImg;
  return (
    <div className={classes.imgContainer}>
      <ReactImageFallback
        src={imgSrc}
        fallbackImage={fallbackImg}
        initialImage={fallbackImg}
        initialTimeout={1000}
        alt="cool image should be here"
        className={classes.notFoundGif}
      />
    </div>
  );
};

PokemonImage.propTypes = {
  name: PropTypes.string.isRequired,
  fallbackImg: PropTypes.string.isRequired
};

export default PokemonImage;
