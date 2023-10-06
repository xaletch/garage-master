import React from 'react';

import link_img from '../../img/link_img';

import './ButtonScrollToTop.scss';

export const ButtonScrollToTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <div className='ButtonScrollToTop' onClick={handleScrollToTop}>
      <img src={link_img.scroll_top} alt=''/>
    </div>
  )
}
