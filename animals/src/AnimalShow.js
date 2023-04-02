import cow from "./images/cow.svg";
import cat from "./images/cat.svg";
import dog from "./images/dog.svg";
import gator from "./images/gator.svg";
import horse from "./images/horse.svg";
import heart from "./images/heart.svg";
const svgIcons = {
  cow,
  cat,
  dog,
  gator,
  horse,
};
function AnimalShow({ type, key }) {
  return (
    <div>
      <img src={svgIcons[type]} alt="animal"/>
      <img src={heart} alt="heart"/>
    </div>
  );
}
export default AnimalShow;
