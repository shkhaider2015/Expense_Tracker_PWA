import { Grid } from '@material-ui/core';
import './App.css';
import './Components/style.css'
import { TransactionProvider } from './Reducers/TransactionContext';
import { AppOrSplash } from './Components/appORsplash';

function App() {

  return <TransactionProvider> 
  <Grid container alignContent="center" justify="center" style={{ backgroundColor: '#fcfcfc' }} >
    <Grid item xs={10} sm={8} md={6} lg={4} xl={4} >
    

<AppOrSplash />
  </Grid>
  </Grid >
    </TransactionProvider>

}

export default App;
