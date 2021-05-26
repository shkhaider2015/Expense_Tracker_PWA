import React from 'react'
import Logo from '../Images/Fram512.png'

export const SplashScreen: React.FunctionComponent = () => 
{
    return <div style={{ width : '100%', height : '100vh', display : 'grid', placeItems : 'center' }} >
        <div style={{ display : 'flex', flexDirection : 'column', alignItems : 'center' }} >
                <img alt="LOGO" src={Logo} style={{ width : '50%', height : '50%' }} />
                <span style={{ fontSize : 25, fontWeight : 'bold', background : 'background: linear-gradient(0deg, rgba(167,167,167,0.7486344879748774) 0%, rgba(120,0,115,1) 48%)', 
                WebkitBackgroundClip: 'text', WebkitTextFillColor : 'transparent' }} >Expense Tracker PWA</span>
        </div>
    </div>
}