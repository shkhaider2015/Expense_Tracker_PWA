import { Grid, createMuiTheme, Theme, ThemeProvider } from '@material-ui/core';
import './App.css';
import './Components/style.css'
import { TransactionProvider } from './Reducers/TransactionContext';
import { AppOrSplash } from './Components/appORsplash';

const outerTheme = createMuiTheme({
  palette: {
    secondary: {
      main: "#780073",
    },
  },
});

function App() {

  return <TransactionProvider>
    <ThemeProvider theme={outerTheme} >
      <Grid container alignContent="center" justify="center" >
        <Grid item xs={10} sm={8} md={6} lg={4} xl={4} >
          <AppOrSplash />
        </Grid>
      </Grid >
    </ThemeProvider>
  </TransactionProvider>

}

export default App;
