import logo from './logo.svg';
import './App.css';
import ThemeComponant from './ThemeComponant';

import ThemeProvider from './ThemeProvider';

function App() {
  return (
    <div className="App">
   <ThemeProvider>
   
    <ThemeComponant/>
   </ThemeProvider>
    </div>
  );
}

export default App;
