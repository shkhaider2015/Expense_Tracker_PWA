import './App.css';
import { MyPaper } from './Components/MyPaper';
import './Components/style.css'
import { TransactionProvider } from './Reducers/TransactionContext';

function App() {
  return <div className="rootDiv" >
    <TransactionProvider>
      <MyPaper />
    </TransactionProvider>
  </div>
}

export default App;
