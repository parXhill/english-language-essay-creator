import './App.css';
import Components from './Components.js'
import PromptTemplate from './PromptTemplate.js';
import React, {useState, useEffect} from 'react';

function App() {

 
 let stringResponse;
 const openAIAPIKey = process.env.REACT_APP_OPENAI_API;

  const [activePage, setActivePage] = useState(0);
  const [examplesData, setExamplesData] = useState({});
  const [essayPrompt, setEssayPrompt] = useState("");
  const [gptRequestString, setGPTRequestString] = useState("");
  const [essayResponse, setEssayResponse] = useState("");

  useEffect(() => {
    if (activePage === 3) {
      requestEssay();
    }
  }, [activePage]);
  
  function requestEssay() {
    console.log("test this")
  
  async function getResponse(){

          const userInput = gptRequestString;
          const response = await fetch('https://api.openai.com/v1/chat/completions', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${openAIAPIKey}`
              },
              body: JSON.stringify({
                  model: 'gpt-4o',  //gpt-3.5-turbo
                  messages: [{role: 'user', content: userInput}],
                  max_tokens: 20
              })
          });
  
          if (response.ok) {
              const data = await response.json();
              stringResponse = data.choices[0].message.content;
              setEssayResponse(stringResponse);
              setActivePage(4);
              //setTimeout(()=> {outputBox.value = stringResponse;}, 3500)
              //setTimeout(() => {loading.style.display = 'none'}, 3500)
  
          } else {
              console.log(`Error in getResponse: ${response.statusText}`);
          }
      };
  getResponse();
  };

  function getEssayExamples(formData){
    setExamplesData(formData);
  }

  return (
    <div className="App">
       <button onClick={()=>setActivePage(activePage + 1)}>Click</button>
        <Components essayResponse={essayResponse} requestEssay={requestEssay} essayPrompt={essayPrompt} setEssayPrompt={setEssayPrompt} getEssayExamples={getEssayExamples} activePage={activePage} setActivePage={setActivePage}/>
        <PromptTemplate examplesData={examplesData} essayPrompt={essayPrompt} gptRequestString={gptRequestString} setGPTRequestString={setGPTRequestString}/>
    </div>
  );
}

export default App;

