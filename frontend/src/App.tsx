import './App.css';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Clock from './components/Clock/Clock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Clock />
        </LocalizationProvider>
      </header>
    </div>
  );
}

export default App;
