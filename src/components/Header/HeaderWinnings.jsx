import React, { useState, useEffect } from 'react'
import link_img from '../../img/link_img'

import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

import { Item } from './Winnings/Item'
import { useGetInfoQuery } from '../../redux/cases/cases';
import { WinInfoLoading } from '../Loading/WinInfoLoading/WinInfoLoading';

const dropInfo = [
  {"name": "Live", icon: link_img.live, id: "last_drop"},
  {"name": "Top", icon: link_img.top, id: "top_drop"}
]

export const HeaderWinnings = () => {
  const [online, setOnline] = useState(0);
  const [selectedDrops, setSelectedDrops] = useState("last_drop");
  
  const [liveDrop, setLiveDrop] = useState([]);
  const [topDrop, setTopDrop] = useState([]);

  const { data: InfoData, isSuccess: isInfoDataSuccess, isLoading } = useGetInfoQuery();

  useEffect(() => {
    setLiveDrop(InfoData?.data?.last_drop);
    setTopDrop(InfoData?.data?.top_drop);
  }, [isInfoDataSuccess])

  function websocket() {
    if(window.Echo !== undefined){
      return;
    }
    window.Pusher = Pusher;

    window.Echo = new Echo({
      broadcaster: 'pusher',
      key: "18xwd7j98lwfnoenqho973ee9k81wkbv",
      wsHost: "ws.aeep.ru",
      wsPort: 80,
      cluster: 'mt1',
      wssPort: 443,
      forceTLS: false,
      enabledTransports: ['ws', 'wss'],
    });
  
    window.Echo.channel('main')
      .listen('.live.drop', (drops) => {
        setTimeout(() => setLiveDrop(prev => [drops, ...prev.slice(0, 29)]), 10150);
      })
      .listen('.live.top', (topDrop) => {
        setTopDrop(topDrop);
      })
      .listen('.live.online', (e) => {
        setOnline(e.online);
      });
  }


  useEffect(() => {
    websocket();
  }, []);

  const handleCategoryInfo = (id) => {
    setSelectedDrops(id);
  }

  return (
    <div className='HeaderWinnings'>
      <div className='HeaderWinningsWrapper'>
        <div className='HeaderWinningsOnline'>
          
          <div className='onlineBlock'>
            <svg className='onlineSvg' xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M10.1185 7.81074C10.4822 7.92256 10.8575 8.00009 11.2501 8.00009C13.421 8.00009 15.1876 6.20535 15.1876 4.00009C15.1876 1.79465 13.421 0 11.2501 0C10.8575 0 10.4822 0.0775314 10.1185 0.189257C11.1504 1.13143 11.8126 2.48283 11.8126 4C11.8126 5.51717 11.1504 6.86857 10.1185 7.81074ZM1.02393 10.8181C4.44285 8.6261 9.05661 8.6261 12.4766 10.8181C13.1078 11.2221 13.5 11.9581 13.5 12.7388V16H0V12.7388C0 11.9581 0.39222 11.2221 1.02393 10.8181ZM11.8408 9.18482C13.6667 9.2864 15.4335 9.82903 16.9766 10.8181C17.6078 11.2227 18 11.9588 18 12.7388V16H14.625V12.7388C14.625 11.5692 14.0317 10.4626 13.077 9.85161C12.6808 9.59762 12.2629 9.3856 11.8408 9.18482ZM9.53433 6.82843C11.072 5.26629 11.072 2.73371 9.53433 1.17157C7.99659 -0.3904 5.5035 -0.390583 3.96585 1.17157C2.42811 2.73371 2.42811 5.26629 3.96585 6.82843C5.5035 8.39058 7.99659 8.39058 9.53433 6.82843Z" fill="white"/>
            </svg>
            <div className='name'>
              <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                <path d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z" fill="#5DEC7D"/>
              </svg>
              Online
            </div>
            <p className='onlineNumber'>{online}</p>
          </div>
        
          <div className='rouletteSelection'>
            {dropInfo.map((item, index) => (
              <div className={`item ${selectedDrops === item.id ? 'active' : ''}`} key={index} onClick={() => handleCategoryInfo(item.id)}>
                <span>
                  <img src={item.icon} alt='' />
                </span>
                {item.name}
              </div>
            ))}
          </div>
        </div>
        <div className='HeaderDropsItems'>
          {isLoading ? Array.from({ length: 30 }, (_, index) => <WinInfoLoading key={index} />) : (
            selectedDrops === "last_drop" ? 
              liveDrop?.map((item, index) => <Item
                key={index}
                rarity={item.item_rarity}
                image={item.item_image}
                caseImg={item.case_image}
                itemName={item.item_name}
                userImg={item.user_image}
                userName={item.user_name}
              />)
            :
              topDrop?.map((item, index) => <Item
                key={index}
                rarity={item.item_rarity}
                image={item.item_image}
                caseImg={item.case_image}
                itemName={item.item_name}
                userImg={item.user_image}
                userName={item.user_name}
              />)
          )}
        </div>
      </div>
    </div>
  )
}
