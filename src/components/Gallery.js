import React, { Component } from 'react';
import { connect } from 'react-redux';

class Gallery extends Component {
  render() {
    const { imgPath, isLoading } = this.props;
    return (
      <div className="gallery-container">
        { !isLoading && <img src={ imgPath } alt="random cat" /> }
        { isLoading && 'LOADING...' }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  imgPath: state.gallery.imgURL.file,
  isLoading: state.gallery.isLoading,
});

export default connect(mapStateToProps)(Gallery);
