import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAPI } from '../actions'

class Button extends Component {
  componentDidMount() {
    const { getImage } = this.props;
    getImage();
  }

  render() {
    const { getImage } = this.props;
    return (
      <button
        type="button"
        onClick= { () => getImage() }
      >
        Click
      </button>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getImage: () => dispatch(fetchAPI()),
});

export default connect(null, mapDispatchToProps)(Button);
