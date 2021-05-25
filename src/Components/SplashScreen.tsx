import React from 'react'


export const SplashScreen: React.FunctionComponent = () => 
{
    return <div style={{ width : '100%', height : '100vh', display : 'grid', placeItems : 'center' }} >
        <div>
                <span style={{ fontSize : 20, fontWeight : 'bold' }} >Expense Tracker PWA</span>
        </div>
    </div>
}