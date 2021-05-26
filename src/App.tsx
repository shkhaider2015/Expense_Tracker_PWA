import { Grid, createMuiTheme, ThemeProvider } from '@material-ui/core';
import './App.css';
import './Components/style.css'
import { TransactionProvider } from './Reducers/TransactionContext';
import { AppOrSplash } from './Components/appORsplash';

const outerTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#780073",
    },
  },
});

function App() {

  return <TransactionProvider>
    <ThemeProvider theme={outerTheme} >
      <Grid container alignItems="center" justify="center" style={{ height : '100vh' }} >
        <Grid item xs={12} sm={8} md={6} lg={4} xl={4} className="gridx" >
          <AppOrSplash />
        </Grid>
      </Grid >
    </ThemeProvider>
  </TransactionProvider>

}

export default App;
