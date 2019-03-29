import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setActiveCity } from '../actions';

class City extends Component {
  handleClick = () => {
    this.props.setActiveCity(this.props.city);
  }

  render() {
    let cityClass = "city";
    if (this.props.city === this.props.activeCity) {
      cityClass += " active";
    }

    return (<div
      className={cityClass}
      onClick={this.handleClick}
    >
      <p>{this.props.city.name}</p>
    </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setActiveCity },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(City);
