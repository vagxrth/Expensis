import TotalBalanceBox from '@/components/TotalBalanceBox';
import HeaderBox from '@/components/HeaderBox'
import React from 'react'

const Home = () => {

    const loggedIn = {firstName: 'Vagarth'};

  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox type="greeting" title="Welcome" user={loggedIn?.firstName || 'Guest'} subtext="Manage your expenses" />
                <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1720} />
            </header>
        </div>
    </section>
  )
}

export default Home