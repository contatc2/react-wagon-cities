import React from 'react';

import City from './city';

const CityList = ({ cities }) => {
  return cities.map(city => (<City city={city} key={city.name} />));
};

export default CityList;
