import cities from '../../Data/cities';

export function setCities() {
  return {
    type: 'SET_CITIES',
    payload: cities
  };
}


export function setActiveCity(city) {
  return {
    type: 'SET_CITY',
    payload: city
  };
}

