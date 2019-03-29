// const paris = { name: "Paris", address: "16 Villa Gaudelet, 75011 Paris", slug: "paris" };

export default function(state, action) {
  if (state === undefined) {
    return null;
  }

  if (action.type === 'SET_CITY') {
    return action.payload;
  }
  return state;
}
