import React from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {
 /* return (
    <div>
      <div className="loader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
      </div>
      Hello, world!
      <input type = 'text'></input>
    </div>
  );*/
  const [value, setValue] = React.useState('');
  const [tasks, setTasks] = React.useState([]);
  return (
    <div className="App">
     Хуй {value} хуй
     <input type="text" value={value} onChange={e => {
       setValue(e.currentTarget.value)
     }} onKeyDown={e => {
       if (e.keyCode === 13) {
         setValue('');
         setTasks([...tasks, value]);
        }
     }}></input>
     {
       tasks.map(task => <div key={task} onClick={()=>{
         setTasks(tasks.filter(t=>t!==task))
       }}>{task}</div>)
     }
     
    </div>

    const [timer, setTimer] = React.useState(() => { currentTime: 0 });
    <div>
      {
        React.useEffect(() => { setInterval(() => { setTimer({ …timer, currentTime: timer.currentTime + 1 }) }, 1000) },[]);
      }
    </div>
  );
}

export default App;
