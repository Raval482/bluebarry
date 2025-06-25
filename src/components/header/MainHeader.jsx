import React from 'react'
import Header1 from './Header1'
import Header2 from './Header2'
import TabletHeader from './TabletHeader'
import Header3 from './Header3'
import MobileHeader from './MobileHeader'

const MainHeader = () => {
    return (
        <div>
            <Header1 />
            <Header2 />
            <Header3 />
            <TabletHeader />
            <MobileHeader />
        </div>
    )
}

export default MainHeader