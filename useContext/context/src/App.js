import './App.css';
import ThemeComponent from './ThemeComponent';
import ThemeProvider from './ThemeProvider'
import ToogleTheme from './ToogleTheme';
function App() {
  return (
  <>
  <ThemeProvider>
    <ToogleTheme/>
    <ThemeComponent/>
  </ThemeProvider>
  </> 
  );
}

export default App;
