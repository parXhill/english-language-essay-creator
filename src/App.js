import './App.css';
import Components from './Components.js'
import PromptTemplate from './PromptTemplate.js';
import React, {useState} from 'react';

function App() {


  const [activePage, setActivePage] = useState(0);
  const [examplesData, setExamplesData] = useState({});
  const [essayPrompt, setEssayPrompt] = useState("");
  const [gptRequestString, setGPTRequestString] = useState("");

  console.log(gptRequestString);

  function getEssayExamples(formData){
    setExamplesData(formData);
  }

  return (
    <div className="App">
       <button onClick={()=>setActivePage(activePage + 1)}>Click</button>
        <Components essayPrompt={essayPrompt} setEssayPrompt={setEssayPrompt} getEssayExamples={getEssayExamples} activePage={activePage} setActivePage={setActivePage}/>
        <PromptTemplate examplesData={examplesData} essayPrompt={essayPrompt} gptRequestString={gptRequestString} setGPTRequestString={setGPTRequestString}/>
    </div>
  );
}

export default App;

