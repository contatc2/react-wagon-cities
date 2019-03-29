import React from 'react';
import { connect } from 'react-redux';

const ActiveCity = (props) => {
  if (!props.activeCity) {
    return null;
  }
  const imageUrl = `https://www.lewagon.com/api/v1/cities/${props.activeCity.slug}/cover?`;
  return (
    <div className="active-city">
      <h2>{props.activeCity.name}</h2>
      <p>{props.activeCity.address}</p>
      <img src={imageUrl} alt=""/>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}


export default connect(mapStateToProps)(ActiveCity);
