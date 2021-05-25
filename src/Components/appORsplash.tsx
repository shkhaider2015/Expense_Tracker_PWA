import React from 'react'
import { TransactionContext } from '../Reducers/TransactionContext';
import { MyPaper } from './MyPaper';
import { SplashScreen } from './SplashScreen';

export const AppOrSplash: React.FunctionComponent = () => {
    const { changeOccur } = React.useContext(TransactionContext);
    const [isReady, setIsReady] = React.useState<boolean>(false);


    React.useEffect(
        () => {
            if (!isReady) {
                changeOccur()
                console.log("App : change occur called !")
                setTimeout(() => {
                    setIsReady(!isReady)
                }, 3000);
            }
            // eslint-disable-next-line
        }, [isReady]
    )

    return isReady ? <MyPaper /> : <SplashScreen />


}