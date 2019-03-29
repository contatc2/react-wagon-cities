import React from 'react';
import { connect } from 'react-redux';

const ActiveCity = (props) => {
  if (!props.activeCity) {
    return null;
  }
  return (
    <div className="active-city">
      <h2>{props.activeCity.name}</h2>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}


export default connect(mapStateToProps)(ActiveCity);
