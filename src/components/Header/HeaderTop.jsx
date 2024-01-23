import React, { useState, useEffect } from 'react'
import link_img from '../../img/link_img'

import { useFetchSteamLoginUrlMutation } from '../../redux/cases/cases';
import { Link } from 'react-router-dom';

export const HeaderTop = ({ data, isFetching, refetchUserData, error, userData }) => {

  // REGISTER STEAM
  const isAuth = document.cookie?.split('; ').find(row => row?.startsWith('access_token='));
  useEffect(() => {
      setTimeout(() => {
          refetchUserData(); 
      }, 500);
  }, [isAuth]);

  if (error?.data?.error) {
    document.cookie = 'access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  }

  const [fetchSteamLoginUrl] = useFetchSteamLoginUrlMutation();
  const [steamLoginErr, setSteamLoginErr] = useState();
  
  const handleSteamLogin = async () => {
      try {
          const { data } = await fetchSteamLoginUrl({ type: "steam" });
          window.location.href = data.data.redirect_url;
      } catch (error) {
          setSteamLoginErr('Неудалось получить ссылку')
      }
  };

  return (
    <div className='HeaderTop'>
      <div className='inner'>
        <div className='HeaderLeftLine'>
          <svg xmlns="http://www.w3.org/2000/svg" width="897" height="65" viewBox="0 0 897 65" fill="none">
            <path d="M892.355 -625H896.632L411.429 65.2595H407.152L892.355 -625Z" fill="#DF6D03"/>
            <path d="M877.813 -625H882.09L396.887 65.2595H392.61L877.813 -625Z" fill="#DF6D03"/>
            <path d="M863.273 -625H867.55L382.346 65.2595H378.069L863.273 -625Z" fill="#DF6D03"/>
            <path d="M848.731 -625H853.008L367.805 65.2595H363.528L848.731 -625Z" fill="#DF6D03"/>
            <path d="M834.19 -625H838.468L353.264 65.2595H348.987L834.19 -625Z" fill="#DF6D03"/>
            <path d="M819.649 -625H823.926L338.723 65.2595H334.447L819.649 -625Z" fill="#DF6D03"/>
            <path d="M805.108 -625H809.385L324.181 65.2595H319.906L805.108 -625Z" fill="#DF6D03"/>
            <path d="M790.567 -625H794.844L309.64 65.2595H305.364L790.567 -625Z" fill="#DF6D03"/>
            <path d="M776.026 -625H780.302L295.099 65.2595H290.823L776.026 -625Z" fill="#DF6D03"/>
            <path d="M761.485 -625H765.761L280.559 65.2595H276.282L761.485 -625Z" fill="#DF6D03"/>
            <path d="M746.944 -625H751.22L266.017 65.2595H261.74L746.944 -625Z" fill="#DF6D03"/>
            <path d="M732.403 -625H736.679L251.476 65.2595H247.199L732.403 -625Z" fill="#DF6D03"/>
            <path d="M717.862 -625H722.138L236.935 65.2595H232.658L717.862 -625Z" fill="#DF6D03"/>
            <path d="M703.32 -625H707.597L222.394 65.2595H218.117L703.32 -625Z" fill="#DF6D03"/>
            <path d="M688.779 -625H693.056L207.853 65.2595H203.576L688.779 -625Z" fill="#DF6D03"/>
            <path d="M674.238 -625H678.515L193.312 65.2595H189.035L674.238 -625Z" fill="#DF6D03"/>
            <path d="M659.697 -625H663.974L178.77 65.2595H174.493L659.697 -625Z" fill="#DF6D03"/>
            <path d="M645.156 -625H649.433L164.229 65.2595H159.952L645.156 -625Z" fill="#DF6D03"/>
            <path d="M630.614 -625H634.891L149.688 65.2595H145.411L630.614 -625Z" fill="#DF6D03"/>
            <path d="M616.073 -625H620.35L135.147 65.2595H130.87L616.073 -625Z" fill="#DF6D03"/>
            <path d="M601.532 -625H605.809L120.606 65.2595H116.329L601.532 -625Z" fill="#DF6D03"/>
            <path d="M586.991 -625H591.268L106.065 65.2595H101.788L586.991 -625Z" fill="#DF6D03"/>
            <path d="M572.45 -625H576.727L91.5234 65.2595H87.2471L572.45 -625Z" fill="#DF6D03"/>
            <path d="M557.909 -625H562.186L76.9821 65.2595H72.7064L557.909 -625Z" fill="#DF6D03"/>
            <path d="M543.368 -625H547.645L62.4409 65.2595H58.1645L543.368 -625Z" fill="#DF6D03"/>
            <path d="M528.827 -625H533.104L47.8995 65.2595H43.6238L528.827 -625Z" fill="#DF6D03"/>
            <path d="M514.285 -625H518.562L33.3592 65.2595H29.0822L514.285 -625Z" fill="#DF6D03"/>
            <path d="M499.744 -625H504.021L18.8183 65.2595H14.5413L499.744 -625Z" fill="#DF6D03"/>
            <path d="M485.203 -625H489.48L4.27702 65.2595H0L485.203 -625Z" fill="#DF6D03"/>
          </svg>
        </div>
        <div className='HeaderCenterLine'>
          <svg xmlns="http://www.w3.org/2000/svg" width="839" height="65" viewBox="0 0 839 65" fill="none">
            <path opacity="0.6" fillRule="evenodd" clipRule="evenodd" d="M2.38308 64.9999H0L496.635 -641H499.029L2.38308 64.9999ZM10.4834 64.9999H8.10027L504.736 -641H507.119L10.4834 64.9999ZM18.5627 64.9999H16.1901L512.826 -641H515.219L18.5627 64.9999ZM26.6734 64.9999H24.2904L520.926 -641H523.309L26.6734 64.9999ZM34.7528 64.9999H32.3802L529.016 -641H531.409L34.7528 64.9999ZM42.8635 64.9999H40.4804L537.116 -641H539.499L42.8635 64.9999ZM50.9429 64.9999H48.5702L545.206 -641H547.589L50.9429 64.9999ZM59.0536 64.9999H56.6705L553.306 -641H555.689L59.0536 64.9999ZM67.1329 64.9999H64.7603L561.396 -641H563.779L67.1329 64.9999ZM75.2437 64.9999H72.8501L569.496 -641H571.879L75.2437 64.9999ZM83.323 64.9999H80.9504L577.586 -641H579.958L83.323 64.9999ZM91.4338 64.9999H89.0402L585.686 -641H588.069L91.4338 64.9999ZM99.5131 64.9999H97.1405L593.776 -641H596.149L99.5131 64.9999ZM107.613 64.9999H105.23L601.876 -641H604.259L107.613 64.9999ZM115.703 64.9999H113.331L609.966 -641H612.339L115.703 64.9999ZM123.803 64.9999H121.42L618.067 -641H620.45L123.803 64.9999ZM131.893 64.9999H129.521L626.156 -641H628.529L131.893 64.9999ZM139.994 64.9999H137.61L634.257 -641H636.64L139.994 64.9999ZM148.083 64.9999H145.711L642.346 -641H644.719L148.083 64.9999ZM156.173 64.9999H153.79L650.447 -641H652.83L156.173 64.9999ZM164.273 64.9999H161.901L658.536 -641H660.909L164.273 64.9999ZM172.363 64.9999H169.98L666.637 -641H669.009L172.363 64.9999ZM180.464 64.9999H178.091L674.727 -641H677.099L180.464 64.9999ZM188.553 64.9999H186.171L682.827 -641H685.199L188.553 64.9999ZM196.654 64.9999H194.281L690.917 -641H693.289L196.654 64.9999ZM204.743 64.9999H202.361L699.017 -641H701.39L204.743 64.9999ZM212.844 64.9999H210.471L707.107 -641H709.479L212.844 64.9999ZM220.933 64.9999H218.551L715.207 -641H717.58L220.933 64.9999ZM229.034 64.9999H226.661L723.297 -641H725.669L229.034 64.9999ZM237.124 64.9999H234.741L731.397 -641H733.77L237.124 64.9999ZM245.224 64.9999H242.841L739.487 -641H741.859L245.224 64.9999ZM253.314 64.9999H250.931L747.566 -641H749.96L253.314 64.9999ZM261.414 64.9999H259.031L755.677 -641H758.05L261.414 64.9999ZM269.504 64.9999H267.121L763.756 -641H766.15L269.504 64.9999ZM277.604 64.9999H275.221L771.867 -641H774.24L277.604 64.9999ZM285.694 64.9999H283.311L779.946 -641H782.34L285.694 64.9999ZM293.794 64.9999H291.411L788.057 -641H790.43L293.794 64.9999ZM301.884 64.9999H299.501L796.137 -641H798.53L301.884 64.9999ZM309.984 64.9999H307.601L804.237 -641H806.62L309.984 64.9999ZM318.074 64.9999H315.691L812.327 -641H814.72L318.074 64.9999ZM326.174 64.9999H323.791L820.427 -641H822.81L326.174 64.9999ZM334.264 64.9999H331.881L828.517 -641H830.9L334.264 64.9999ZM342.365 64.9999H339.982L836.617 -641H839L342.365 64.9999Z" fill="url(#paint0_linear_1_404)"/>
            <defs>
              <linearGradient id="paint0_linear_1_404" x1="-747.5" y1="-332.5" x2="1254" y2="452" gradientUnits="userSpaceOnUse">
                <stop offset="0.554901" stopColor="#A7510D"/>
                <stop offset="0.894095" stopColor="#180838"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className='HeaderRightLine'>
          <svg xmlns="http://www.w3.org/2000/svg" width="277" height="65" viewBox="0 0 277 65" fill="none">
            <path opacity="0.6" fillRule="evenodd" clipRule="evenodd" d="M2.38308 64.9999H0L496.635 -641H499.029L2.38308 64.9999ZM10.4834 64.9999H8.10027L504.736 -641H507.119L10.4834 64.9999ZM18.5627 64.9999H16.1901L512.826 -641H515.219L18.5627 64.9999ZM26.6734 64.9999H24.2904L520.926 -641H523.309L26.6734 64.9999ZM34.7528 64.9999H32.3802L529.016 -641H531.409L34.7528 64.9999ZM42.8635 64.9999H40.4804L537.116 -641H539.499L42.8635 64.9999ZM50.9429 64.9999H48.5702L545.206 -641H547.589L50.9429 64.9999ZM59.0536 64.9999H56.6705L553.306 -641H555.689L59.0536 64.9999ZM67.1329 64.9999H64.7603L561.396 -641H563.779L67.1329 64.9999ZM75.2437 64.9999H72.8501L569.496 -641H571.879L75.2437 64.9999ZM83.323 64.9999H80.9504L577.586 -641H579.958L83.323 64.9999ZM91.4338 64.9999H89.0402L585.686 -641H588.069L91.4338 64.9999ZM99.5131 64.9999H97.1405L593.776 -641H596.149L99.5131 64.9999ZM107.613 64.9999H105.23L601.876 -641H604.259L107.613 64.9999ZM115.703 64.9999H113.331L609.966 -641H612.339L115.703 64.9999ZM123.803 64.9999H121.42L618.067 -641H620.45L123.803 64.9999ZM131.893 64.9999H129.521L626.156 -641H628.529L131.893 64.9999ZM139.994 64.9999H137.61L634.257 -641H636.64L139.994 64.9999ZM148.083 64.9999H145.711L642.346 -641H644.719L148.083 64.9999ZM156.173 64.9999H153.79L650.447 -641H652.83L156.173 64.9999ZM164.273 64.9999H161.901L658.536 -641H660.909L164.273 64.9999ZM172.363 64.9999H169.98L666.637 -641H669.009L172.363 64.9999ZM180.464 64.9999H178.091L674.727 -641H677.099L180.464 64.9999ZM188.553 64.9999H186.171L682.827 -641H685.199L188.553 64.9999ZM196.654 64.9999H194.281L690.917 -641H693.289L196.654 64.9999ZM204.743 64.9999H202.361L699.017 -641H701.39L204.743 64.9999ZM212.844 64.9999H210.471L707.107 -641H709.479L212.844 64.9999ZM220.933 64.9999H218.551L715.207 -641H717.58L220.933 64.9999ZM229.034 64.9999H226.661L723.297 -641H725.669L229.034 64.9999ZM237.124 64.9999H234.741L731.397 -641H733.77L237.124 64.9999ZM245.224 64.9999H242.841L739.487 -641H741.859L245.224 64.9999ZM253.314 64.9999H250.931L747.566 -641H749.96L253.314 64.9999ZM261.414 64.9999H259.031L755.677 -641H758.05L261.414 64.9999ZM269.504 64.9999H267.121L763.756 -641H766.15L269.504 64.9999ZM277.604 64.9999H275.221L771.867 -641H774.24L277.604 64.9999ZM285.694 64.9999H283.311L779.946 -641H782.34L285.694 64.9999ZM293.794 64.9999H291.411L788.057 -641H790.43L293.794 64.9999ZM301.884 64.9999H299.501L796.137 -641H798.53L301.884 64.9999ZM309.984 64.9999H307.601L804.237 -641H806.62L309.984 64.9999ZM318.074 64.9999H315.691L812.327 -641H814.72L318.074 64.9999ZM326.175 64.9999H323.791L820.427 -641H822.81L326.175 64.9999ZM334.264 64.9999H331.881L828.517 -641H830.9L334.264 64.9999ZM342.365 64.9999H339.982L836.617 -641H839L342.365 64.9999Z" fill="black"/>
          </svg>
        </div>

        <div className='wrapper'>
          {!userData?.balance ? (
            <button className='replenishBtn'>
              <span>
                <img src={link_img.replenishSvg} alt='' />
              </span>
              пополнить
            </button>
          ) : (
            <button className='replenishBtn balance'>
              <span>
                <img src={link_img.replenishSvg} alt='' />
              </span>
              {userData?.balance} руб.
            </button>
          )}

          <div className='buttonsRight'>
            {isAuth ? (
              <Link to="/profile" className='ProfileImg'>
                <img src={userData?.avatar_img} alt=''/>
              </Link>
            ) 
            : (
              <button className='loginBtn' onClick={handleSteamLogin}>
                <span>
                  <img src={link_img.steamSvg} alt='' />
                </span>
                войти
              </button>
            )}

            <div className='languages'>
              <div className='selectedLang'>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 0H22V1.07692H0V0ZM0 2.15385H22V3.23077H0V2.15385ZM0 4.30769H22V5.38462H0V4.30769ZM0 6.46154H22V7.53846H0V6.46154ZM0 8.61539H22V9.69231H0V8.61539ZM0 10.7692H22V11.8462H0V10.7692ZM0 12.9231H22V14H0V12.9231Z" fill="#BD3D44"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 1.07692H22V2.15385H0V1.07692ZM0 3.23077H22V4.30769H0V3.23077ZM0 5.38462H22V6.46154H0V5.38462ZM0 7.53846H22V8.61539H0V7.53846ZM0 9.69231H22V10.7692H0V9.69231ZM0 11.8462H22V12.9231H0V11.8462Z" fill="white"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 0H8.79991V7.53833L0 7.53846V0Z" fill="#192F5D"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M0.733314 0.322647L0.813371 0.620581H1.07249L0.862852 0.80474L0.942932 1.10267L0.733292 0.918543L0.523697 1.10267L0.603753 0.80474L0.394136 0.620581H0.653235L0.733314 0.322647ZM2.19996 0.322647L2.28004 0.620581H2.53916L2.32952 0.80474L2.4096 1.10267L2.19996 0.918543L1.99036 1.10267L2.07042 0.80474L1.8608 0.620581H2.1199L2.19996 0.322647ZM3.66667 0.322647L3.74673 0.620581H4.00585L3.79621 0.80474L3.87629 1.10267L3.66667 0.918543L3.45705 1.10267L3.53711 0.80474L3.32749 0.620581H3.58661L3.66667 0.322647ZM5.13329 0.322647L5.21335 0.620581H5.47245L5.26283 0.80474L5.34289 1.10267L5.13329 0.918543L4.92365 1.10267L5.00373 0.80474L4.79409 0.620581H5.05321L5.13329 0.322647ZM6.59998 0.322647L6.68004 0.620581H6.93916L6.72952 0.80474L6.8096 1.10267L6.59996 0.918543L6.39036 1.10267L6.47042 0.80474L6.2608 0.620581H6.5199L6.59998 0.322647ZM8.06667 0.322647L8.14673 0.620581H8.40585L8.19621 0.80474L8.27629 1.10267L8.06667 0.918543L7.85703 1.10267L7.93713 0.80474L7.72749 0.620581H7.98661L8.06667 0.322647ZM1.46667 1.07651L1.54673 1.37444H1.80585L1.59621 1.55857L1.67631 1.85653L1.46667 1.6724L1.25705 1.85653L1.33711 1.55857L1.12749 1.37444H1.38661L1.46667 1.07651ZM2.93329 1.07651L3.01335 1.37444H3.27245L3.06283 1.55857L3.14289 1.85653L2.93329 1.6724L2.72365 1.85653L2.80373 1.55857L2.59409 1.37444H2.85321L2.93329 1.07651ZM4.39998 1.07651L4.48004 1.37444H4.73916L4.52952 1.55857L4.6096 1.85653L4.39996 1.6724L4.19036 1.85653L4.27042 1.55857L4.0608 1.37444H4.3199L4.39998 1.07651ZM5.86667 1.07651L5.94673 1.37444H6.20585L5.99621 1.55857L6.07629 1.85653L5.86667 1.6724L5.65703 1.85653L5.73715 1.55857L5.52751 1.37444H5.78664L5.86667 1.07651ZM7.33329 1.07651L7.41335 1.37444H7.67245L7.46283 1.55857L7.54289 1.85653L7.33329 1.6724L7.12365 1.85653L7.20373 1.55857L6.99409 1.37444H7.25321L7.33329 1.07651ZM0.733314 1.83034L0.813371 2.12827H1.07249L0.862852 2.31243L0.942932 2.61037L0.733292 2.42624L0.523697 2.61037L0.603753 2.31243L0.394136 2.12827H0.653235L0.733314 1.83034ZM2.19996 1.83034L2.28004 2.12827H2.53916L2.32952 2.31243L2.4096 2.61037L2.19996 2.42624L1.99036 2.61037L2.07042 2.31243L1.8608 2.12827H2.1199L2.19996 1.83034ZM3.66667 1.83034L3.74673 2.12827H4.00585L3.79621 2.31243L3.87629 2.61037L3.66667 2.42624L3.45705 2.61037L3.53711 2.31243L3.32749 2.12827H3.58661L3.66667 1.83034ZM5.13329 1.83034L5.21335 2.12827H5.47245L5.26283 2.31243L5.34289 2.61037L5.13329 2.42624L4.92365 2.61037L5.00373 2.31243L4.79409 2.12827H5.05321L5.13329 1.83034ZM6.59998 1.83034L6.68004 2.12827H6.93916L6.72952 2.31243L6.8096 2.61037L6.59996 2.42624L6.39036 2.61037L6.47042 2.31243L6.2608 2.12827H6.5199L6.59998 1.83034ZM8.06667 1.83034L8.14673 2.12827H8.40585L8.19621 2.31243L8.27629 2.61037L8.06667 2.42624L7.85703 2.61037L7.93713 2.31243L7.72749 2.12827H7.98661L8.06667 1.83034ZM1.46667 2.58417L1.54673 2.88213H1.80585L1.59621 3.06626L1.67631 3.36423L1.46667 3.1801L1.25705 3.36423L1.33711 3.06626L1.12749 2.88213H1.38661L1.46667 2.58417ZM2.93329 2.58417L3.01335 2.88213H3.27245L3.06283 3.06626L3.14289 3.36423L2.93329 3.1801L2.72365 3.36423L2.80373 3.06626L2.59409 2.88213H2.85321L2.93329 2.58417ZM4.39998 2.58417L4.48004 2.88213H4.73916L4.52952 3.06626L4.6096 3.36423L4.39996 3.1801L4.19036 3.36423L4.27042 3.06626L4.0608 2.88213H4.3199L4.39998 2.58417ZM5.86667 2.58417L5.94673 2.88213H6.20585L5.99621 3.06626L6.07629 3.36423L5.86667 3.1801L5.65703 3.36423L5.73713 3.06626L5.52749 2.88213H5.78661L5.86667 2.58417ZM7.33329 2.58417L7.41335 2.88213H7.67245L7.46283 3.06626L7.54289 3.36423L7.33329 3.1801L7.12365 3.36423L7.20373 3.06626L6.99409 2.88213H7.25321L7.33329 2.58417ZM0.733314 3.33803L0.813371 3.63597H1.07249L0.862852 3.82012L0.942932 4.11806L0.733292 3.93393L0.523697 4.11806L0.603753 3.82012L0.394136 3.63597H0.653235L0.733314 3.33803ZM2.19996 3.33803L2.28004 3.63597H2.53916L2.32952 3.82012L2.4096 4.11806L2.19996 3.93393L1.99036 4.11806L2.07042 3.82012L1.8608 3.63597H2.1199L2.19996 3.33803ZM3.66667 3.33803L3.74673 3.63597H4.00585L3.79621 3.82012L3.87629 4.11806L3.66667 3.93393L3.45705 4.11806L3.53711 3.82012L3.32749 3.63597H3.58661L3.66667 3.33803ZM5.13329 3.33803L5.21335 3.63597H5.47245L5.26283 3.82012L5.34289 4.11806L5.13329 3.93393L4.92365 4.11806L5.00373 3.82012L4.79409 3.63597H5.05321L5.13329 3.33803ZM6.59998 3.33803L6.68004 3.63597H6.93916L6.72952 3.82012L6.8096 4.11806L6.59996 3.93393L6.39036 4.11806L6.47042 3.82012L6.2608 3.63597H6.5199L6.59998 3.33803ZM8.06667 3.33803L8.14673 3.63597H8.40585L8.19621 3.82012L8.27629 4.11806L8.06667 3.93393L7.85703 4.11806L7.93713 3.82012L7.72749 3.63597H7.98661L8.06667 3.33803ZM1.46667 4.09186L1.54673 4.38983H1.80585L1.59621 4.57396L1.67631 4.87192L1.46667 4.68779L1.25705 4.87192L1.33711 4.57396L1.12749 4.38983H1.38661L1.46667 4.09186ZM2.93329 4.09186L3.01335 4.38983H3.27245L3.06283 4.57396L3.14289 4.87192L2.93329 4.68779L2.72365 4.87192L2.80373 4.57396L2.59409 4.38983H2.85321L2.93329 4.09186ZM4.39998 4.09186L4.48004 4.38983H4.73916L4.52952 4.57396L4.6096 4.87192L4.39996 4.68779L4.19036 4.87192L4.27042 4.57396L4.0608 4.38983H4.3199L4.39998 4.09186ZM5.86667 4.09186L5.94673 4.38983H6.20585L5.99621 4.57396L6.07629 4.87192L5.86667 4.68779L5.65703 4.87192L5.73713 4.57396L5.52749 4.38983H5.78661L5.86667 4.09186ZM7.33329 4.09186L7.41335 4.38983H7.67245L7.46283 4.57396L7.54289 4.87192L7.33329 4.68779L7.12365 4.87192L7.20373 4.57396L6.99409 4.38983H7.25321L7.33329 4.09186ZM0.733314 4.84572L0.813371 5.14366H1.07249L0.862852 5.32782L0.942932 5.62575L0.733292 5.44162L0.523697 5.62575L0.603753 5.32782L0.394136 5.14366H0.653235L0.733314 4.84572ZM2.19996 4.84572L2.28004 5.14366H2.53916L2.32952 5.32782L2.4096 5.62575L2.19996 5.44162L1.99036 5.62575L2.07042 5.32782L1.8608 5.14366H2.1199L2.19996 4.84572ZM3.66667 4.84572L3.74673 5.14366H4.00585L3.79621 5.32782L3.87629 5.62575L3.66667 5.44162L3.45705 5.62575L3.53711 5.32782L3.32749 5.14366H3.58661L3.66667 4.84572ZM5.13329 4.84572L5.21335 5.14366H5.47245L5.26283 5.32782L5.34289 5.62575L5.13329 5.44162L4.92365 5.62575L5.00373 5.32782L4.79409 5.14366H5.05321L5.13329 4.84572ZM6.59998 4.84572L6.68004 5.14366H6.93916L6.72952 5.32782L6.8096 5.62575L6.59996 5.44162L6.39036 5.62575L6.47042 5.32782L6.2608 5.14366H6.5199L6.59998 4.84572ZM8.06667 4.84572L8.14673 5.14366H8.40585L8.19621 5.32782L8.27629 5.62575L8.06667 5.44162L7.85703 5.62575L7.93713 5.32782L7.72749 5.14366H7.98661L8.06667 4.84572ZM1.46667 5.59956L1.54673 5.89752H1.80585L1.59621 6.08165L1.67631 6.37961L1.46667 6.19548L1.25705 6.37961L1.33711 6.08165L1.12749 5.89752H1.38661L1.46667 5.59956ZM2.93329 5.59956L3.01335 5.89752H3.27245L3.06283 6.08165L3.14289 6.37961L2.93329 6.19548L2.72365 6.37961L2.80373 6.08165L2.59409 5.89752H2.85321L2.93329 5.59956ZM4.39998 5.59956L4.48004 5.89752H4.73916L4.52952 6.08165L4.6096 6.37961L4.39996 6.19548L4.19036 6.37961L4.27042 6.08165L4.0608 5.89752H4.3199L4.39998 5.59956ZM5.86667 5.59956L5.94673 5.89752H6.20585L5.99621 6.08165L6.07629 6.37961L5.86667 6.19548L5.65703 6.37961L5.73713 6.08165L5.52749 5.89752H5.78661L5.86667 5.59956ZM7.33329 5.59956L7.41335 5.89752H7.67245L7.46283 6.08165L7.54289 6.37961L7.33329 6.19548L7.12365 6.37961L7.20373 6.08165L6.99409 5.89752H7.25321L7.33329 5.59956ZM0.733314 6.35342L0.813371 6.65135H1.07249L0.862852 6.83551L0.942932 7.13344L0.733292 6.94931L0.523697 7.13344L0.603753 6.83551L0.394136 6.65135H0.653235L0.733314 6.35342ZM2.19996 6.35342L2.28004 6.65135H2.53916L2.32952 6.83551L2.4096 7.13344L2.19996 6.94931L1.99036 7.13344L2.07042 6.83551L1.8608 6.65135H2.1199L2.19996 6.35342ZM3.66667 6.35342L3.74673 6.65135H4.00585L3.79621 6.83551L3.87629 7.13344L3.66667 6.94931L3.45705 7.13344L3.53711 6.83551L3.32749 6.65135H3.58661L3.66667 6.35342ZM5.13329 6.35342L5.21335 6.65135H5.47245L5.26283 6.83551L5.34289 7.13344L5.13329 6.94931L4.92365 7.13344L5.00373 6.83551L4.79409 6.65135H5.05321L5.13329 6.35342ZM6.59998 6.35342L6.68004 6.65135H6.93916L6.72952 6.83551L6.8096 7.13344L6.59996 6.94931L6.39036 7.13344L6.47042 6.83551L6.2608 6.65135H6.5199L6.59998 6.35342ZM8.06667 6.35342L8.14673 6.65135H8.40585L8.19621 6.83551L8.27629 7.13344L8.06667 6.94931L7.85703 7.13344L7.93713 6.83551L7.72749 6.65135H7.98661L8.06667 6.35342Z" fill="white"/>
                </svg>
              </div>
              <span className='arrow'>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="5" viewBox="0 0 10 5" fill="none">
                  <path d="M10 0L5 4.54545L0 0H10Z" fill="white"/>
                </svg>
              </span>
            </div>

            <button className='sound'>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18" fill="none">
                <path d="M0 12.5271V5.46378C0.0739063 5.04779 0.340742 4.99751 0.733906 4.99794C1.81586 4.99966 2.89967 4.99937 3.98535 4.99708C3.99941 4.99709 4.01295 4.9917 4.02316 4.98204C5.67374 3.42264 7.32374 1.86409 8.97316 0.306404C9.12613 0.16201 9.22425 0.077923 9.2675 0.0541437C9.515 -0.0820857 9.87637 0.0502759 9.96789 0.322305C9.98938 0.386767 10.0001 0.513399 10.0001 0.7022C10.0004 6.23504 10.0004 11.768 10.0001 17.3011C10.0001 17.5951 9.97519 17.8344 9.70578 17.9548C9.43894 18.0738 9.24086 17.9419 9.0316 17.7446C7.36355 16.1698 5.6968 14.5955 4.03133 13.0217C4.01471 13.0057 3.9948 12.9977 3.9716 12.9977C2.82777 12.9977 1.68294 12.9978 0.537109 12.9981C0.233177 12.9981 0.0541406 12.8411 0 12.5271Z" fill="white"/>
                <path d="M22 8.77541V9.22793C21.906 12.2874 20.8685 14.959 18.8873 17.2427C18.7286 17.4258 18.6055 17.5366 18.5178 17.5753C18.2454 17.6952 18.0404 17.5388 17.8368 17.3355C17.7036 17.2023 17.5702 17.0689 17.4367 16.9354C17.2757 16.7744 17.1793 16.6514 17.1475 16.5663C17.0831 16.3944 17.122 16.2246 17.2644 16.057C17.5924 15.6705 17.8757 15.3124 18.1143 14.9827C18.2816 14.7515 18.437 14.5108 18.5805 14.2607C20.8136 10.3702 20.3848 5.55661 17.4406 2.14529C17.1536 1.81266 16.9559 1.5445 17.3125 1.18481C17.4893 1.0066 17.6667 0.829692 17.8449 0.654069C17.9859 0.515404 18.1004 0.432607 18.1887 0.405676C18.4108 0.337776 18.5887 0.419857 18.7468 0.596483C20.8199 2.91023 21.9043 5.63654 22 8.77541Z" fill="white"/>
                <path d="M17.9867 8.63144C18.0774 10.7978 17.3314 12.9659 15.8924 14.5903C15.7311 14.7722 15.5517 14.8289 15.354 14.7605C15.1057 14.6741 14.798 14.2976 14.5922 14.0909C14.4412 13.9391 14.3511 13.8211 14.3219 13.7368C14.2398 13.5018 14.349 13.3294 14.5105 13.1309C15.5517 11.8515 16.0991 10.2348 15.9822 8.57901C15.8817 7.16085 15.3665 5.8931 14.4366 4.77576C14.3003 4.61217 14.26 4.44529 14.3159 4.27511C14.395 4.03402 14.783 3.71386 14.9901 3.50887C15.2114 3.29013 15.3905 3.13456 15.6793 3.24887C15.7572 3.27982 15.84 3.34628 15.9277 3.44828C17.1763 4.90512 17.9064 6.70876 17.9867 8.63144Z" fill="white"/>
                <path d="M11.7812 10.0096C12.1338 9.15817 12.055 8.34179 11.5448 7.56051C11.33 7.23176 11.4722 7.02892 11.7279 6.77193C11.8726 6.6261 12.0175 6.48042 12.1627 6.33488C12.3054 6.19163 12.4214 6.10511 12.5108 6.07531C12.7832 5.98464 12.9774 6.13462 13.1394 6.35852C14.2596 7.90474 14.2845 9.98299 13.2 11.5533C13.0096 11.8288 12.8129 12.0385 12.482 11.9091C12.4024 11.8779 12.3067 11.8061 12.195 11.6938C11.9999 11.4976 11.8048 11.3019 11.6097 11.1068C11.211 10.7084 11.6316 10.3702 11.7812 10.0096Z" fill="white"/>
              </svg>
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}
