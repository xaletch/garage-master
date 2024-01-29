import React, { useRef, useEffect, useState, useCallback } from 'react';

import '../../ContentsCase/ContentsCase.scss';

import useSound from 'use-sound';
import step from '../../../../sounds/sounds';

import { ContentCaseItem } from '../../ContentsCase/ContentCaseItem';

export const CaseOpens = ({ drop, multipliedItems, translateX, winner, color, isWin }) => {
    const stripRef = useRef(null);
    const [playAudioOpens, { stop }] = useSound(step.step, { volume: 0.5 });

    useEffect(() => {
        let isAudioPlaying = false;
    
        const playAudioOpen = () => {
            if (!isAudioPlaying) {
                isAudioPlaying = true;
                playAudioOpens();
                setTimeout(() => {
                    isAudioPlaying = false;
                }, 16);
            }
        };

        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && entry.target.dataset.played !== 'true') {
              playAudioOpens();
              entry.target.dataset.played = 'true';
              console.log('entry.target: ', entry.target);
            }
          });
        }, { threshold: 0 });
      
        if (stripRef.current) {
          const cards = stripRef.current.querySelectorAll('.ContentCaseItem');
      
          cards.forEach(card => {
            observer.observe(card);
          });
      
          return () => {
            cards.forEach(card => {
              observer.unobserve(card);
            });
          };
        }
      }, [stripRef, playAudioOpens]);

    // useEffect(() => {
    //     let isAudioPlaying = false;
    
    //     const playAudioOpen = () => {
    //         if (!isAudioPlaying) {
    //             isAudioPlaying = true;
    //             playAudioOpens();
    //             setTimeout(() => {
    //                 isAudioPlaying = false;
    //             }, 16);
    //         }
    //     };
    
    //     const observer = new IntersectionObserver((entries) => {
    //         entries.forEach(entry => {
    //             if (entry.isIntersecting && !isAudioPlaying) {
    //                 playAudioOpen();
    //                 console.log('entry.target: ', entry.target);
    //             }
    //         });
    //     }, { threshold: 0 });
    
    //     if (stripRef.current) {
    //         const cards = stripRef.current.querySelectorAll('.ContentCaseItem');
    
    //         cards.forEach(card => {
    //             observer.observe(card);
    //         });
    
    //         return () => {
    //             cards.forEach(card => {
    //                 observer.unobserve(card);
    //             });
    //         };
    //     }
    // }, [stripRef, playAudioOpens]);

    return (
        <div className={`CaseOpens ${color}`} ref={stripRef}>
            <div className='CaseOpensRoulette'>
                <div className='CaseOpensContent' style={{
                    transition: !isWin ? 'transform 8s cubic-bezier(0.220, 0.350, 0.310, 0.985) 0s' : isWin ? 'transform 1.2s ease' : 'transform 0s ease',
                    transform:`translate(${translateX}px)`
                }}>
                    {multipliedItems.map((obj, index) => <ContentCaseItem {...obj} key={index} />)}
                </div>
            </div>
            <div className='arrows'>
                <div className={`arrowsTop ${color}`}></div>
                <div className={`arrowsBottom ${color}`}></div>
            </div>
            {winner && (
                drop.map((item, index) => (
                    <div className={`winnings ${color}`} key={index}>
                        <div className={`CaseShadow CaseShadow-2 ${color}`}></div>
                        <img src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                    </div>
                ))
            )}
        </div>
    )
}
