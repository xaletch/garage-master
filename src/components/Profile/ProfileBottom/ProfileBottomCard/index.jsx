import React from 'react'

export const ProfileBottomCard = ({ img, color }) => {
    return (
        <div className={`ProfileBottomCard ${
            color === '9830b3' ? 'c1' :
            color === '3092bb' ? 'c2' :
            color === 'c9405d' ? 'c3' :
            color === '1dd87e' ? 'c4' :
            color === 'de7422' ? 'c5' :
         ''}
         `}>
            <div className="ProfileBottomBlockRing" style={{ border: `2px solid #${color}` }}>
                <img src={img} alt="" />
            </div>
            <div className='ProfileBottomBlockDescription'>
                <p className='name'>AWP</p>
                <span className='categoryName'>Валентность</span>
            </div>
        </div>
    )
}
