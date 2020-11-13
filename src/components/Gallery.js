import React, { Component } from 'react';
import { connect } from 'react-redux';
import defaultCat from '../images/detCat.gif'

class Gallery extends Component {
  render() {
    const { imgPath, isLoading, useDefaultImg } = this.props;
    return (
      <div className="gallery-container">
        { isLoading && <div>LOADING...</div> }
        { useDefaultImg && <img src={ defaultCat } alt="default cat" /> }
        { !isLoading && !useDefaultImg && <img src={ imgPath } alt="random cat" /> }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  imgPath: state.gallery.imgURL.file,
  isLoading: state.gallery.isLoading,
  useDefaultImg: state.gallery.defaultImg,
});

export default connect(mapStateToProps)(Gallery);
