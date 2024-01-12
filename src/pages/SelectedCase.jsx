import React, { useEffect, useState } from 'react';

import '../components/OpenCase/SelectedCase.scss';

import About from '../components/About/About';
import { ReturnHomeButton } from '../components/ReturnHomeButton/ReturnHomeButton';
import { Case } from '../components/OpenCase/CaseBlock/Case';
import { ContentsCase } from '../components/OpenCase/ContentsCase/ContentsCase';

import { useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';
import { useGetCaseByUrlQuery, useLazyGetOpenCaseQuery, useGetUserItemsQuery, useGetUserQuery } from '../redux/cases/cases';
import { CaseOpen } from '../components/OpenCase/CaseOpen/CaseOpen';

export const SelectedCase = () => {
  const { url } = useParams();

  const { data: caseInfo, isLoading } = useGetCaseByUrlQuery(url);
  const [isOpen, setOpen] = useState(false);

  const [open, { data: dataWin }] = useLazyGetOpenCaseQuery();
  useEffect(() => {
    if (url) {
      window.scrollTo(0, 0);
    }
  }, [url]);

  const [multipliedItems, setMultipliedItems] = useState([]);
  const { start_price, end_price, page } = useSelector((state) => state.filterCase);

  const {refetch: refetchUserItems } = useGetUserItemsQuery({ start_price, end_price, page });
  const { refetch: refetchUserData } = useGetUserQuery(null);

  const [translateX, setTranslateX] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [winner, setWinner] = useState(false);
  const [caseOpening, setCaseOpening] = useState(false);
  const [sold, setSold] = useState(false);

  const shuffleItems = (itemsToShuffle) => {
      let shuffledItems = itemsToShuffle.slice();
      for (let i = shuffledItems.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledItems[i], shuffledItems[j]] = [shuffledItems[j], shuffledItems[i]];
      }
      return shuffledItems;
  };
    
  const initializeAndShuffleItems = () => {
      if (caseInfo?.data.items) {
          const filledMultipliedItems = [];
          for (let i = 0; i < 66; i++) {
              filledMultipliedItems.push(caseInfo?.data.items[i % caseInfo?.data.items.length]);
          }
          const shuffledItems = shuffleItems(filledMultipliedItems);
          setMultipliedItems(shuffledItems);
      }
  };

  useEffect(() => {
    initializeAndShuffleItems()
  }, [caseInfo?.data.items]);

  useEffect(() => {
    if(isSpinning) {
      const timer = setTimeout(() => {
        setIsSpinning(false);
        setWinner(true);
      }, 8100);
      return () => clearTimeout(timer);
    }
  }, [isSpinning]);

  const findLastIndexWithName = (arr, name) => {
    for (let i = arr.length - 3; i >= 30; i--) {
      if (arr[i].name === name) {
        return i;
      }
    }
    return -1;
  }

  const itemWidth = 190;

  const handleOpenMore = async () => {
    // await open(url);
    initializeAndShuffleItems();
    setTranslateX(0);
    setWinner(false);
    // setSold(false);
    setCaseOpening(false);
    setOpen(false);
      
    // refetchUserItems({ start_price, end_price, page });
    // refetchUserData();
  }

  useEffect(() => {
    setTimeout(() => {
      if (dataWin && dataWin?.data) {
        const openedItemName = dataWin?.data.drops.map((item) => item.name)[0];
        const lastItemIndex = findLastIndexWithName(multipliedItems, openedItemName);
           
        console.log(multipliedItems);
        console.log('openedItemName: ', openedItemName)
        console.log('lastItemIndex: ', lastItemIndex)

        const screenCenterOffset = (5 * itemWidth) / 2;
        const cardCenterOffset = itemWidth / 1;
        console.log('screenCenterOffset', screenCenterOffset);
        console.log('cardCenterOffset', cardCenterOffset);

        if (lastItemIndex !== -1) {
          const leftPosition = (lastItemIndex * itemWidth) - (screenCenterOffset - cardCenterOffset);
          const maxTranslate = (multipliedItems.length - 5) * itemWidth; // Максимальное смещение
          setTranslateX(-Math.min(leftPosition, maxTranslate)); // Предотвращение смещения за пределы коллекции
          setIsSpinning(true);
          
          // const leftPosition = lastItemIndex * itemWidth - 140;
          console.log(lastItemIndex * itemWidth);
          setTranslateX(-leftPosition);
                    
          console.log('leftPosition: ',leftPosition);

          setIsSpinning(true);
        }
      }
    }, 1000);
  }, [dataWin, caseOpening]);
  
  if (isLoading) {
    return <h3 style={{marginTop: '400px', marginBottom: '400px', textAlign: 'center', fontSize: '24px'}}>Loading...</h3>;
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
                    setTranslateX={setTranslateX}
                    isSpinning={isSpinning}
                    setSold={setSold}
                    sold={sold}
                    multipliedItems={multipliedItems}
                    handleOpenMore={handleOpenMore}
                    initializeAndShuffleItems={initializeAndShuffleItems}
                  />
                </div>
            )
          }
            {!isOpen && <Case open={open} name={caseInfo?.data.name} price={caseInfo?.data?.price} image={caseInfo?.data?.image} url={caseInfo?.data?.url} color={caseInfo?.data?.color} setOpen={setOpen} />}
            <ContentsCase items={caseInfo?.data?.items}/>
            
            {/* КЕЙСЫ, КОНТРАКТЫ, АПРГРЕЙДЫ, ПОЛЬЗОВАТЕЛЕЙ, ОНЛАЙН */}
            {/* <About /> */}
        </div>
    </div>
  )
}
