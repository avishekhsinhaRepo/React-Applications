import React from 'react';
import './SessionDisplay.css';
const seasonsConfig = {
  summer: {
    text: 'Lets hit the  beach',
    iconName: 'sun'
  },
  winter: {
    text: 'Burr ! its chilly',
    iconName: 'snowflake'
  }

}
const getSeason = function (latitude) {
  const month = new Date().getMonth();
  let season;
  if (latitude > 0)
    season = month >= 1 && month <= 9 ? "summer" : "winter";
  else if (latitude < 0)
    season = latitude < 0 && month >= 1 && month <= 9 ? "winter" : "summer";
  return season;
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.latitude);
  const { text, iconName } = seasonsConfig[season];

  return (
    <div className={`seasonDisplay ${season}`}>
      <i className={`${iconName} icon massive icon-left`}></i>
      <h1 className="seasonText">{text}</h1>
      <i className={`${iconName} icon massive icon-right`}></i>
    </div>
  );
};
export default SeasonDisplay;