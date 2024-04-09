import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import images from './img.png'
import Counter_2 from './Counter-1';



function App() {
  return (
   <>
   <Counter frame={images}/>
   <Counter_2/>
   </>
  );
}

export default App;
