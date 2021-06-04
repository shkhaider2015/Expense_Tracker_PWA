import React from 'react'
import { Grid, createMuiTheme, ThemeProvider } from '@material-ui/core';
import { Toast } from 'react-bootstrap';
import './App.css';
import './Components/style.css'
import { TransactionProvider } from './Reducers/TransactionContext';
import { AppOrSplash } from './Components/appORsplash';
import { getToken, onMessageListener } from "./config/Config";

const outerTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#780073",
    },
  },
});

function App() {

  const [isPush, setIsPush] = React.useState<boolean>(false);
  const [notification, setNotification] = React.useState({ title: 'Default Title', body: 'Default Body' });
  const [show, setShow] = React.useState<boolean>(false);

  getToken(setIsPush);

  onMessageListener().then((payload: any) => {
    setShow(true);
    setNotification({ title: payload.notification.title, body: payload.notification.body })
    console.log("This is Payload in OnMessageListner() : ", payload);
  }).catch(err => console.log('failed: ', err));

  const isPushNotificationSupported = () => {
    console.log("Is PN supported ?")
    return "serviceWorker" in navigator && "PushManager" in window;
  }
  const askUserPermission = async () => {
    var rr = await Notification.requestPermission();
    console.log("rr : ", rr)
    return rr
  }


  React.useEffect(
    () => {
      if (isPushNotificationSupported()) {
        askUserPermission()
          .then(() => {
            setIsPush(!isPush);
          })
          .catch(err => console.error("Error : ", err))
      }
      // eslint-disable-next-line
    }, []
  )


  return <TransactionProvider>
    <ThemeProvider theme={outerTheme} >
    <Toast onClose={() => setShow(false)} show={show} delay={60000} autohide animation style={{
            position: 'absolute',
            top: 20,
            right: 20,
            minWidth: 200
          }}>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">{notification.title}</strong>
              <small>just now</small>
            </Toast.Header>
            <Toast.Body>{notification.body}</Toast.Body>
          </Toast>
          
      <Grid container alignItems="center" justify="center" style={{ height: '100vh' }} >
        <Grid item xs={12} sm={8} md={6} lg={4} xl={4} className="gridx" >
         
          <AppOrSplash />
        </Grid>
      </Grid >
    </ThemeProvider>
  </TransactionProvider>

}

export default App;
