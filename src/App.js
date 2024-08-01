import './App.css';
import Components from './Components.js'
import React, {useState} from 'react';

function App() {

  const [activePage, setActivePage] = useState(0);

  function generateEssay(){

  }

  return (
    <div className="App">
       <button onClick={()=>setActivePage(activePage + 1)}>Click</button>
        <Components generateEssay={generateEssay} activePage={activePage} setActivePage={setActivePage}/>
    </div>
  );
}

export default App;
