import React from 'react'
import link_img from '../../../img/link_img'

export const WinInfoLoading = () => {
  return (
    <div className='DropItem'>
        <div className='inner'>
            <img className='DropItemLoading' src={link_img.gunLoading} alt='loading' />
        </div>
    </div>
  )
}
