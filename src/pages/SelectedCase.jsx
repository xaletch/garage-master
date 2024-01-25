import React, { useEffect, useState } from 'react';

import '../components/OpenCase/SelectedCase.scss';

import { ReturnHomeButton } from '../components/ReturnHomeButton/ReturnHomeButton';
import { Case } from '../components/OpenCase/CaseBlock/Case';
import { ContentsCase } from '../components/OpenCase/ContentsCase/ContentsCase';

import { useParams } from 'react-router-dom';
import { useGetCaseByUrlQuery, useLazyGetOpenCaseQuery } from '../redux/cases/cases.js';
import { CaseOpen } from '../components/OpenCase/CaseOpen/CaseOpen';
import { NotificationCase } from '../components/Notification/NotificationCase';
import { Loading } from '../components/Loading/Loading';

export const SelectedCase = ({ setLogin, login }) => {
  const { url } = useParams();

  const { data: caseInfo, isLoading } = useGetCaseByUrlQuery(url);

  const [showNotification, setShowNotification] = useState(false);
  const [isOpen, setOpen] = useState(false);
  
  const [open, { data: dataWin }] = useLazyGetOpenCaseQuery();

  useEffect(() => {
    if (url) {
      window.scrollTo(0, 0);
    }
  }, [url]);
  
  const [multipliedItems, setMultipliedItems] = useState([]);
  
  const [translateX, setTranslateX] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [caseOpen, setCaseOpen] = useState(false);
  const [winner, setWinner] = useState(false);
  const [sold, setSold] = useState(false);
  const [price, setPrice] = useState();
  const [isWin, setWin] = useState(false);
  
  const shuffleItems = (itemsToShuffle) => {
    let shuffledItems = itemsToShuffle.slice();
    for (let i = shuffledItems.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledItems[i], shuffledItems[j]] = [shuffledItems[j], shuffledItems[i]];
    }
    return shuffledItems;
  };
  
  const initializeAndShuffleItems = () => {
    if (caseInfo?.data && dataWin?.data && dataWin?.data.drops.length > 0) {
      const items = caseInfo.data.items.slice();
  
      while (items.length < 30) {
        items.push(...caseInfo.data.items);
      }
  
      const additionalItem = dataWin.data.drops[0];
  
      items.push(additionalItem);
  
      let shuffledItems = shuffleItems(items);
      
      const additionalItemIndex = shuffledItems.indexOf(additionalItem);
  
      if (additionalItemIndex !== 30) {
        [shuffledItems[additionalItemIndex], shuffledItems[30]] = [shuffledItems[30], shuffledItems[additionalItemIndex]];
      }
  
      shuffledItems = shuffledItems.slice(0, 34);
      setMultipliedItems(shuffledItems);
    }
  };
  
  useEffect(() => {
    initializeAndShuffleItems();
  }, [caseInfo?.data, dataWin]);
  
  useEffect(() => {
    if (caseOpen) {
      const timer = setTimeout(() => {
        setIsSpinning(false);
        setWin(true);
      }, 8500);

      const timerWinner = setTimeout(() => {
        setWinner(true);
      }, 9680);
      return () => clearTimeout(timer, timerWinner);
    }
  }, [caseOpen]);
  
  const findLastIndexWithName = (arr, name) => {
    for (let i = arr.length - 4; i >= 0; i--) {
      if (arr[i] && arr[i].name === name) {
        return i;
      }
    }
    return -1;
  };
  
  const itemWidth = 190;
  
  const handleOpenMore = async () => {
    initializeAndShuffleItems();
    
    setTranslateX(0);

    setCaseOpen(false);
    setWinner(false);
    setWin(false);
    setSold(false);
    setOpen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (dataWin && dataWin?.data) {
        const openedItemName = dataWin.data.drops.map((item) => item.name)[0];
        const lastItemIndex = findLastIndexWithName(multipliedItems, openedItemName);
  
        const getRandomNumber = (min, max) => Math.random() * (max - min) + min;
        const random = getRandomNumber(0.66, 1.47);

        const screenCenterOffset = (5 * itemWidth) / 2;
        const cardCenterOffset = itemWidth / random;
  
        if (lastItemIndex !== -1) {
          const leftPosition = (lastItemIndex * itemWidth) - (screenCenterOffset - cardCenterOffset);
          const maxTranslate = (multipliedItems.length) * itemWidth;
          setTranslateX(-Math.min(leftPosition, maxTranslate));
        }

      }

    }, 1000);

    return () => clearTimeout(timer);
  }, [dataWin, multipliedItems, itemWidth]);

  useEffect(() => {
    if (dataWin?.data) {
      const openedItemName = dataWin.data.drops.map((item) => item.name)[0];
      const lastItemIndex = findLastIndexWithName(multipliedItems, openedItemName);
  
      const screenCenterOffset = (5 * itemWidth) / 2;
      const cardCenterOffsetWin = itemWidth / 0.95;
  
      const leftPosition = (lastItemIndex * itemWidth) - (screenCenterOffset - cardCenterOffsetWin);
      const maxTranslate = (multipliedItems.length) * itemWidth;
      setTranslateX(-Math.min(leftPosition, maxTranslate));
    }
  }, [isWin]);

  useEffect(() => {
    setPrice(dataWin?.data.drops.map((price) => price.price));
  }, [showNotification])
  
  if (isLoading) {
    return <Loading />
  }

  return (
    <div className='SelectedCase'>
        <div className='main mainWidht'>
          <ReturnHomeButton name={caseInfo?.data?.name} />
          {isOpen &&
            (
                <div className='CaseOpen'>
                  <CaseOpen 
                    open={open}
                    name={caseInfo?.data.name} 
                    item={caseInfo?.data.items}
                    color={caseInfo?.data.color}
                    dataWin={dataWin?.data.drops}
                    winner={winner}
                    translateX={translateX}
                    isSpinning={isSpinning}
                    setSold={setSold}
                    sold={sold}
                    isWin={isWin}
                    setShowNotification={setShowNotification}
                    multipliedItems={multipliedItems}
                    handleOpenMore={handleOpenMore}
                    initializeAndShuffleItems={initializeAndShuffleItems}
                  />
                </div>
            )
          }
            {!isOpen && <Case 
              setIsSpinning={setIsSpinning}
              open={open}
              name={caseInfo?.data.name}
              price={caseInfo?.data?.price}
              image={caseInfo?.data?.image}
              url={caseInfo?.data?.url}
              color={caseInfo?.data?.color}
              setOpen={setOpen}
              setTranslateX={setTranslateX}
              setCaseOpen={setCaseOpen}
              dataWin={dataWin}
              findLastIndexWithName={findLastIndexWithName}
              multipliedItems={multipliedItems}
              itemWidth={itemWidth}
              setLogin={setLogin}
            />}
            <ContentsCase items={caseInfo?.data?.items}/>
            
            {/* КЕЙСЫ, КОНТРАКТЫ, АПРГРЕЙДЫ, ПОЛЬЗОВАТЕЛЕЙ, ОНЛАЙН */}
            {/* <About /> */}

            <NotificationCase price={price} showNotification={showNotification} />
        </div>
    </div>
  )
}
