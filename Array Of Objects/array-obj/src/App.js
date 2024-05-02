import logo from './logo.svg';
import './App.css';
import Obj from './Obj';
function App() {

  const array=[
    {
     id:1,
     name:'vivek',
     position:'Full stack',
     salary:80000

  },
  {
    id :2,
    name:'pratik',
    position:'full stack',
    salary:85000
  },
  {
    id :3,
    name:'ayan',
    position:'full stack',
    salary:75000
  },
  {
    id :4,
    name:'jay',
    position:'full stack',
    salary:65000
  },
  {
    id :5,
    name:'neel',
    position:'full stack',
    salary:55000
  }
]
  return (

  <Obj array={array}/>
  );
}

export default App;
