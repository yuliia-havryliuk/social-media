import defaultImage from './../default-image.jpg';
import PropTypes from 'prop-types';
import React from "react";
const AnimalItem = ({
  name,
  shortName,
  color1,
  height1 = 'unknown',
  imageUrl = defaultImage,
  quantity,
}) => {
  //або ж
  // const { name, shortName, color1, height1, image } = props; // деструктуризація -  щоб не писати щоразу props ми пишимо лиш пропси
  // з виклику компоненти і юзаємо їх без {props.color1} ітд
  return (
    <div>
      <h2>{name}</h2>
      <h3>{shortName}</h3>
      <p>{color1}</p>
      <p>{height1}</p>
      <img src={imageUrl} alt={name} width="300" />
      <p>Тваринок є: {quantity < 20 ? `меньше 20.` : `більше 20.`}</p>
    </div>
  );
};

AnimalItem.propTypes = {
  name: PropTypes.string,
  shortName: PropTypes.string,
  color1: PropTypes.string,
  height1: PropTypes.number,
  imageUrl: PropTypes.string,
  quantity: PropTypes.number,
};
export default AnimalItem;
