import './App.css';
import Components from './Components.js'
import React, {useState} from 'react';
import {promptTemplate} from './promptTemplate';

//console.log(promptTemplate)





function App() {




  const [activePage, setActivePage] = useState(0);
  const [examplesData, setExamplesData] = useState({});
  const [essayPrompt, setEssayPrompt] = useState("");

  console.log(examplesData);
  console.log(essayPrompt)


  function getEssayExamples(formData){
    setExamplesData(formData);
  }

  return (
    <div className="App">
       <button onClick={()=>setActivePage(activePage + 1)}>Click</button>
        <Components essayPrompt={essayPrompt} setEssayPrompt={setEssayPrompt} getEssayExamples={getEssayExamples} activePage={activePage} setActivePage={setActivePage}/>
    </div>
  );
}

export default App;

