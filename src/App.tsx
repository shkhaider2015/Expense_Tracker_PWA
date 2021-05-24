import { Grid } from '@material-ui/core';
import './App.css';
import { MyPaper } from './Components/MyPaper';
import './Components/style.css'
import { TransactionProvider } from './Reducers/TransactionContext';

function App() {
  return <Grid container alignContent="center" justify="center" style={{ backgroundColor : '#fcfcfc' }} >
    <Grid item xs={10} sm={8} md={6} lg={4} xl={4} >
      <TransactionProvider>
        <MyPaper />
      </TransactionProvider>
    </Grid>
  </Grid>

}

export default App;
