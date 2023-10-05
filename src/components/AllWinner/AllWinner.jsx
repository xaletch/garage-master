import React from 'react'
import './AllWinner.scss'
import WinnerCard from './winnerCard'
import link_img from '../../img/link_img'
import DailyGiveaway from './DailyGiveaway/DailyGiveaway'
export default function AllWinner({setHeaderOpen}) {
  return (
    <div className='AllWinner'>
        <div className="main mainWidht">
            <div className="offers">
                <div className="offersTop">
                    <button onClick={()=>setHeaderOpen(true)} className='orangeBtn'>Быстрый перевод <img src={link_img.arrowRight} alt="" /></button>
                </div>
                <div className="winnerCardMain">
                    <div className="winnerCardMainTop">
                        <a className='showAll' href="#"><img  src={link_img.winnersBlockkrown} alt="" /> Посмотреть все</a>
                    </div>
                    <WinnerCard color={'8b2ca5'}/>
                    <WinnerCard color={'3092bb'}/>
                    <WinnerCard color={'3092bb'}/>
                </div>
                <div className="offersBottom">
                    <button className='orangeBtn'>Все предложения <img src={link_img.arrowRight} alt="" /></button>
                </div>
            </div>
            <div className="DailyGiveawayMain">
                <DailyGiveaway color={'1dd87e'}/>
                {/* <div className="radial"></div> */}
                <DailyGiveaway color={'9830b3'}/>
            </div>
        </div>
    </div>
  )
}
