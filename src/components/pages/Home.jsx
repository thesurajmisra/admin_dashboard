import React from 'react'
import FeaturedInfo from '../featuredInfo/FeaturedInfo'
import './home.css'
import { userData } from '../../dummyData'
import Chart from '../charts/Chart'
import WidgetSm from '../widgetSm/WidgetSm'
import WidgetsLg from '../widgetsLg/WidgetsLg'

const Home = () => {
    return (
        <>
            <div className="home">
            <FeaturedInfo/>
            <Chart data={userData} grid title="User Analytics" dataKey="Active User"/>
            <div className="homeWidgets">
                <WidgetSm/>
                <WidgetsLg/>
            </div>
            </div>
        </>
    )
}

export default Home
