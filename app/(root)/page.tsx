import TotalBalanceBox from '@/components/TotalBalanceBox';
import HeaderBox from '@/components/HeaderBox'
import React from 'react'
import RightSidebar from '@/components/RightSidebar';

const Home = () => {

    const loggedIn = {firstName: 'Vagarth', lastName: 'Pandey', email: 'vagarth419@gmail.com'};

  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox type="greeting" title="Welcome" user={loggedIn?.firstName || 'Guest'} subtext="Manage your expenses" />
                <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1720} />
            </header>
            {/* recent transactions */}
        </div>
        <RightSidebar user={loggedIn} tranbsactions={[]} banks={[{currentBalance: 120.01}, {currentBalance: 500.00}]} />
    </section>
  )
}

export default Home