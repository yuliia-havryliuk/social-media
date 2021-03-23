import AnimalItem from './AnimalItem';
import PropTypes from 'prop-types';
import React from 'react';

function AnimalsList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <AnimalItem
            name={item.name}
            shortName={item.about.name}
            color1={item.color}
            height1={item.height}
            imageUrl={item.about.url}
            quantity={item.quantity}
          />
        </li>
      ))}
    </ul>
  );
}

AnimalsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default AnimalsList;
