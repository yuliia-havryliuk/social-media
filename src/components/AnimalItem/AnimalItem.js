import defaultImage from './default-image.jpg';
import PropTypes from 'prop-types';
import React from 'react';
import s from './AnimalItem.module.css'
const AnimalItem = ({
  name,
  //about, //треба оголосити about, в який ми потім залазимо і достаємо name i url - в випадку зі spread
  shortName,
  color,
  height = 'unknown',
  imageUrl = defaultImage,
  quantity,
}) => {
  //або ж
  // const { name, shortName, color1, height1, image } = props; // деструктуризація -  щоб не писати щоразу props ми пишимо лиш пропси
  // з виклику компоненти і юзаємо їх без {props.color1} ітд
  return (
    <div className={s.container}>
      <h2>{name}</h2>
      <h3>{shortName}</h3>
      <p>{color}</p>
      <p>{height}</p>
      <img src={imageUrl} alt={name} width="300" />
      <p>Тваринок є: {quantity < 20 ? `меньше 20.` : `більше 20.`}</p>
    </div>
  );
};

AnimalItem.propTypes = {
  name: PropTypes.string,
  shortName: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.number,
  imageUrl: PropTypes.string,
  quantity: PropTypes.number,
};
export default AnimalItem;
