import './App.css';
import Components from './Components.js'
import PromptTemplate from './PromptTemplate.js';
import FeedbackTemplate from './FeedbackTemplate.js';
import React, {useState, useEffect, useCallback} from 'react';

function App() {


 const openAIAPIKey = process.env.REACT_APP_OPENAI_API;

  const [activePage, setActivePage] = useState(0);
  const [examplesData, setExamplesData] = useState({});
  const [essayPrompt, setEssayPrompt] = useState("");
  const [gptRequestString, setGPTRequestString] = useState("");
  const [essayResponse, setEssayResponse] = useState("");
  const [feedbackRequestString, setFeedbackRequestString] = useState("");
  const [feedbackResponse, setFeedbackResponse] = useState("");

  
  function sendDataToBackend(dataObject) {
    fetch('https://script.google.com/macros/s/AKfycbyw6pbMbMBuVrOLIxKiVdA_j8Efbxb-xoYyRLsBM7XPXlutCNGEXnz-4qalKmhi8-YvAw/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain'
      },
      body: JSON.stringify(dataObject),
      redirect: 'follow'
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.text();
    })
    .then(data => {
      console.log('Success:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  const gptRequest = useCallback(() => {
    async function getResponse(userInput) {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${openAIAPIKey}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo', 
          messages: [{ role: 'user', content: userInput }],
          max_tokens: 15
        })
      });
  
      if (response.ok) {
        const data = await response.json();
        sendDataToBackend(examplesData);
        sendDataToBackend(data);
  
        const stringResponse = data.choices[0].message.content;
  
        if (activePage === 3) {
          setEssayResponse(stringResponse);
          setActivePage(4);
          console.log("EssayResponse", stringResponse);
        }
  
        if (activePage === 5) {
          setFeedbackResponse(stringResponse);
          setActivePage(6);
          console.log("FeedbackResponse", stringResponse);
        }
      } else {
        console.log(`Error in getResponse: ${response.statusText}`);
      }
    };
  
    if (activePage === 3) {
      getResponse(gptRequestString);
    }
  
    if (activePage === 5) {
      getResponse(feedbackRequestString);
    }
  }, [activePage, openAIAPIKey, examplesData, gptRequestString, feedbackRequestString]);

  useEffect(() => {
    if (Object.keys(examplesData).length > 0) {
        setActivePage(3);
    }
}, [examplesData]); 

  useEffect(() => {
    if (activePage === 3) {
      gptRequest();
    }
  }, [activePage, gptRequest]);
 
  useEffect(() => {
    if (activePage === 5) {
      gptRequest();
    }
  }, [activePage, gptRequest]);

  return (
    <div className="App">
        <Components feedbackResponse={feedbackResponse} setExamplesData={setExamplesData} essayResponse={essayResponse} essayPrompt={essayPrompt} setEssayPrompt={setEssayPrompt} activePage={activePage} setActivePage={setActivePage}/>
        <PromptTemplate examplesData={examplesData} essayPrompt={essayPrompt} gptRequestString={gptRequestString} setGPTRequestString={setGPTRequestString}/>
        <FeedbackTemplate essayResponse={essayResponse} setFeedbackRequestString={setFeedbackRequestString} />
    </div>
  );
}


export default App;

