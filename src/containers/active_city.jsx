import React from 'react';
import { connect } from 'react-redux';

const ActiveCity = (props) => {
  if (!props.activeCity) {
    return null;
  }
  return (
    <div className="active-city">
      <h3>{props.activeCity.name}</h3>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}


export default connect(mapStateToProps)(ActiveCity);
