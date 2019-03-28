import React from 'react';

import CityList from '../containers/city_list';


const App = () => {
  return (
    <div className="app">
      <div className="cities">
        <CityList />
      </div>
    </div>
  );
};

export default App;
