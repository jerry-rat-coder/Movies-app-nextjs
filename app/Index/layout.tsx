import React from 'react'
import NavBar from './components/Navbar'
import getCurrentUser from '../actions/getCurrentUser'
import Billboard from './components/Billboard';
import InfoModal from './components/InfoModal';


async function IndexLayout({
  children
}: {
  children: React.ReactNode,
}) {
  const currentUser  = await getCurrentUser();

  // const billBoardData = useBillboard();

  return (
    <div className=' h-full w-full'>
        <InfoModal />
        <NavBar data={ currentUser as Record<string, any> } />
        <Billboard  />
        {children}
    </div>
  )
}

export default IndexLayout