import cities from '../../Data/cities';

export default function setCities() {
  return {
    type: 'SET_CITIES',
    payload: cities
  };
}
