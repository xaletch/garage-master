import React, { useEffect, useState } from 'react';
import './Header.scss';
import link_img from '../../img/link_img';
import { Link } from 'react-router-dom';

import { useGetUserQuery } from '../../redux/cases/cases';
import { HeaderTop } from './HeaderTop';
import { HeaderWinnings } from './HeaderWinnings';

export default function Header({setHeaderOpen, setLogInOpen,HeaderOpen }) {
  const [follower, setFollower] = useState(16900);
  const [userData, setUserData] = useState(null);
  const { data, isFetching, refetch: refetchUserData, error } = useGetUserQuery(null);

  useEffect(() => {
    if (data && !isFetching) {
      setUserData(data?.data?.profile);
      console.log('update')
    }
  }, [isFetching, refetchUserData]);

  return (
    <div className='Header'>
      <HeaderTop data={data} refetchUserData={refetchUserData} isFetching={isFetching} error={error} userData={userData} />
      <HeaderWinnings />
    </div>
  )
}
