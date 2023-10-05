import React, { useState } from 'react'
import HeaderBottomCard from './HeaderBottomCards'
import link_img from '../../img/link_img'
import './Headerbottom.scss'
import Slider from 'react-slick';

export default function HeaderBottom() {
  const [func,setFunc]=useState(false)
  let lol = window.innerWidth
  console.log(lol);
  if (window.innerWidth > 3000) {
    lol = Math.floor(lol / 110) - 10
  }
  else if (window.innerWidth > 2000) {
    lol = Math.floor(lol / 110) - 10
  }
  else if (window.innerWidth > 1000) {
    lol = Math.floor(lol / 110) - 2
  }
  else if (window.innerWidth > 900) {
    lol = Math.floor(lol / 110)
  }
  else if (window.innerWidth > 800) {
    lol = Math.floor(lol / 110) + 2
  }
  else if (window.innerWidth > 600) {
    lol = Math.floor(lol / 110) + 2
  }
  else if (window.innerWidth > 100) {
    lol = Math.floor(lol / 110)
  }
  else {
    lol = Math.floor(lol / 110)
  }
  const settings = {
    // dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: lol,
    slidesToScroll: Math.floor(lol / 3)
  };
  return (
    <div className='HeaderBottom' style={{zIndex:func?'10':''}}>
      <Slider {...settings} className="">
        <HeaderBottomCard func={setFunc} img={link_img.gun} color={'9830b3'} />
        <HeaderBottomCard func={setFunc} img={link_img.gun} color={'9830b3'} />
        <HeaderBottomCard func={setFunc} img={link_img.gun} color={'3092bb'} />
        <HeaderBottomCard func={setFunc} img={link_img.gun} color={'c9405d'} />
        <HeaderBottomCard func={setFunc} img={link_img.gun} color={'1dd87e'} />
        <HeaderBottomCard func={setFunc} img={link_img.gun} color={'de7422'} />
        <HeaderBottomCard func={setFunc} img={link_img.gun} color={'c9405d'} />
        <HeaderBottomCard func={setFunc} img={link_img.gun} color={'1dd87e'} />
        <HeaderBottomCard func={setFunc} img={link_img.gun} color={'de7422'} />
        <HeaderBottomCard func={setFunc} img={link_img.gun} color={'9830b3'} />
        <HeaderBottomCard func={setFunc} img={link_img.gun} color={'9830b3'} />
        <HeaderBottomCard func={setFunc} img={link_img.gun} color={'3092bb'} />
        <HeaderBottomCard func={setFunc} img={link_img.gun} color={'c9405d'} />
        <HeaderBottomCard func={setFunc} img={link_img.gun} color={'1dd87e'} />
        <HeaderBottomCard func={setFunc} img={link_img.gun} color={'de7422'} />
        <HeaderBottomCard func={setFunc} img={link_img.gun} color={'c9405d'} />
        <HeaderBottomCard func={setFunc} img={link_img.gun} color={'1dd87e'} />
        <HeaderBottomCard func={setFunc} img={link_img.gun} color={'de7422'} />
        <HeaderBottomCard func={setFunc} img={link_img.gun} color={'9830b3'} />
        <HeaderBottomCard func={setFunc} img={link_img.gun} color={'9830b3'} />
        <HeaderBottomCard func={setFunc} img={link_img.gun} color={'3092bb'} />
        <HeaderBottomCard func={setFunc} img={link_img.gun} color={'c9405d'} />
        <HeaderBottomCard func={setFunc} img={link_img.gun} color={'1dd87e'} />
        <HeaderBottomCard func={setFunc} img={link_img.gun} color={'de7422'} />
        <HeaderBottomCard func={setFunc} img={link_img.gun} color={'c9405d'} />
        <HeaderBottomCard func={setFunc} img={link_img.gun} color={'1dd87e'} />
        <HeaderBottomCard func={setFunc} img={link_img.gun} color={'de7422'} />
      </Slider>
    </div>
  )
}





