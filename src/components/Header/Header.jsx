import React, { useEffect, useState } from 'react';
import './Header.scss';

import { useGetUserQuery } from '../../redux/cases/cases';
import { HeaderTop } from './HeaderTop';
import { HeaderWinnings } from './HeaderWinnings';

export default function Header({ setLogin, login, isMuted, setMuted }) {
  const [follower, setFollower] = useState(16900);
  const [userData, setUserData] = useState(null);
  const { data, isFetching, refetch: refetchUserData, error, isLoading } = useGetUserQuery(null);

  useEffect(() => {
    if (data && !isFetching) {
      setUserData(data?.data?.profile);
      console.log('update')
    }
  }, [isFetching, refetchUserData]);

  return (
    <div className='Header'>
      <HeaderTop
        refetchUserData={refetchUserData}
        error={error}
        userData={userData}
        setLogin={setLogin}
        login={login}
        isMuted={isMuted}
        setMuted={setMuted}
        isLoading={isLoading}
      />
      <HeaderWinnings />
    </div>
  )
}
