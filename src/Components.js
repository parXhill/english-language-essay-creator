import React, {useState, useEffect} from 'react';
import './Components.css'

export default function Components({requestEssay, activePage, setActivePage, getEssayExamples, essayPrompt, setEssayPrompt}){

    let essayFormStyle;
    let openingStyle;
    let examplesStyle;
    let loadingScreen;
    let loadingScreen2;
    let essay;
    let feedback;

    if (activePage !== 6){feedback= {display: "none"}}
    if (activePage !== 5){loadingScreen2= {display: "none"}}
    if (activePage !== 4 && activePage !== 5 && activePage !== 6){essay= {display: "none"}}
    if (activePage !== 3){loadingScreen= {display: "none"}}
    if (activePage !== 2){examplesStyle = {display: "none"}}
    if (activePage !== 1){essayFormStyle = {display: "none"}}
    if (activePage !== 0){openingStyle = {display: "none"}}


function Opening() {

    return (
    
    <div style={openingStyle} id="opening" className="container">
        <h2>Click here to create an English Language Essay</h2>
        <button onClick={() => setActivePage(1)}>Start</button>
        </div>)

};

function EssayForm() {


    return (
    
    <div style={essayFormStyle} id="essayForm" className="container">
        <h2>Select an essay prompt</h2>
        <form id="essayPromptForm">
        <label htmlFor="essayPrompt">Select an essay prompt:</label>
        <select id="essayPrompt" value={essayPrompt} onChange={(e) => setEssayPrompt(e.target.value)}>
            <option value="" disabled>Year - Source - Question</option>
            <option value="2021-vcaa-1">
              2021 - VCAA - ‘It’s just language. Who cares if it’s formal or informal, standard or non-standard?’ To what extent is this true in contemporary Australian society?
            </option>
            <option value="2021-vcaa-2">
              2021 - VCAA - ‘In contemporary Australian society, we must be careful with our use of language in public contexts.’ Discuss.
            </option>
            <option value="2021-vcaa-3">
              2021 - VCAA - ‘When interacting with others, we make deliberate language choices that reveal elements of our social and individual identities.’ To what extent is this true in contemporary Australian society?
            </option>
            <option value="2020-vcaa-1">
              2020 - VCAA - ‘Language has the power to both influence and reflect community attitudes.’ Discuss.
            </option>
            <option value="2020-vcaa-2">
              2020 - VCAA - ‘Social media and other digital platforms are changing the way we communicate.’ Discuss.
            </option>
            <option value="2020-vcaa-3">
              2020 - VCAA - ‘Formal written and spoken language are essential components of English in contemporary Australian society.’ To what extent do you agree?
            </option>
            <option value="2019-vcaa-1">
              2019 - VCAA - ‘Australian English is always enriched by the non-standard English varieties operating in contemporary Australian society.’ Discuss.
            </option>
            <option value="2019-vcaa-2">
              2019 - VCAA - ‘Some aspects of situational and cultural contexts have greater influence over an individual’s language choices than others.’ Is this true in the context of contemporary Australian society?
            </option>
            <option value="2019-vcaa-3">
              2019 - VCAA - ‘Formal language is used mainly to clarify meaning, but it can also be used to obfuscate.’ Discuss.
            </option>
            <option value="2018-vcaa-1">
              2018 - VCAA - ‘Users of Australian English must always negotiate positive and negative face needs in order to communicate successfully in the contemporary Australian context.’ Discuss.
            </option>
            <option value="2018-vcaa-2">
              2018 - VCAA - ‘In contemporary Australian society, freedom of speech is sometimes considered to be the freedom to say or write anything.’ To what extent do you agree?
            </option>
            <option value="2018-vcaa-3">
              2018 - VCAA - ‘Language use can reveal the underlying attitudes of dominant groups to a range of identities and cultures in the contemporary Australian context.’ Discuss.
            </option>
            <option value="2017-vcaa-1">
              2017 - VCAA - ‘The use of language in Australia today reflects social diversity.’ Discuss.
            </option>
            <option value="2017-vcaa-2">
              2017 - VCAA - ‘Language is a powerful tool for influencing social attitudes within contemporary Australian society.’ Discuss.
            </option>
            <option value="2017-vcaa-3">
              2017 - VCAA - ‘An understanding of Standard Australian English is needed to be able to communicate in all contexts in contemporary Australian society.’ To what extent is this statement true?
            </option>
            <option value="2016-vcaa-1">
              2016 - VCAA - ‘Those who are critical of the use of jargon do not appreciate its vital role in communication.’ Discuss.
            </option>
            <option value="2016-vcaa-2">
              2016 - VCAA - ‘The nature of digital communication is changing the way language is used today in Australia.’ Discuss.
            </option>
            <option value="2021-vate-1">
              2021 - VATE - ‘The choices that individuals make when speaking and writing often reflect their personal attitudes as well as social/ cultural contexts.’ Discuss.
            </option>
            <option value="2021-vate-2">
              2021 - VATE - ‘Australian English continues to evolve as contemporary texts in spoken and written modes both question and construct what being an Australian means.’ Discuss.
            </option>
            <option value="2021-vate-3">
              2021 - VATE - ‘In contemporary Australia, deciding which uses of language are acceptable is a continual challenge.’ To what extent do you agree?
            </option>
            <option value="2021-neap-1">
              2021 - NEAP - ‘Our personal language use reflects our identity; however, it can also perpetuate negative attitudes towards our and others’ identities.’ Discuss.
            </option>
            <option value="2021-neap-2">
              2021 - NEAP - ‘The way that language is used in society is driven primarily by a desire to maintain social harmony.’ To what extent do you agree with this statement?
            </option>
            <option value="2021-neap-3">
              2021 - NEAP - ‘In a contemporary Australian society, what role does context play in setting the linguistic boundaries of both spoken and written language?’
            </option>
            <option value="2020-insight-1">
              2020 - Insight - ‘There are no linguistic grounds for saying one language variety is better than another.’ Discuss.
            </option>
            <option value="2020-insight-2">
              2020 - Insight - ‘Changing social attitudes have influenced language use in Australia.’ To what extent is this true in the Australian context?
            </option>
            <option value="2020-insight-3">
              2020 - Insight - ‘Jargon is unnecessarily complicated language used to impress, rather than to inform, your audience.’ To what extent do you agree?
            </option>
            <option value="2020-vate-1">
              2020 - VATE - ‘In times of great stress and strain, language is an essential tool for communication to ensure the community has all the required information. However, the other functions it fulfils are equally as important.’ How is this true in Australia today?
            </option>
            <option value="2020-vate-2">
              2020 - VATE - ‘Technology, major societal events, and environmental issues all enrich our language use in many ways.’ To what extent is this true in contemporary Australian society?
            </option>
          </select>
        </form>
        <button onClick={() => setActivePage(2)}>Next</button>
    </div>)

};

function Examples() {
  
    const [formData, setFormData] = useState({
        example1: '',
        example2: '',
        example3: '',
        example4: '',
        example5: '',
        example6: '',
      });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

    const submitExamples = (event) => {
        event.preventDefault();
        getEssayExamples(formData);
        setActivePage(3);

        
      };
    

    return (
    
    <div style={examplesStyle} id="examples" className="container">
        <h2>Enter contemporary examples you would like the essay to contain</h2>
        <form id="exampleForm">
          <label htmlFor="example1">Example 1: </label>
          <input value={formData.example1} id="example1" name="example1" onChange={handleChange}></input>
          <label htmlFor="example2">Example 2: </label>
          <input value={formData.example2} id="example2" name="example2"onChange={handleChange}></input>
          <label htmlFor="example3">Example 3: </label>
          <input value={formData.example3} id="example3" name="example3"onChange={handleChange}></input>
          <label htmlFor="example4">Example 4: </label>
          <input value={formData.example4} id="example4" name="example4"onChange={handleChange}></input>
          <label htmlFor="example5">Example 5: </label>
          <input value={formData.example5} id="example5" name="example5"onChange={handleChange}></input>
          <label htmlFor="example6">Example 6: </label>
          <input value={formData.example6} id="example6" name="example6"onChange={handleChange}></input>
        </form>
        <button type="button" onClick={submitExamples}>Generate essay</button>
        <button>Back</button>
    </div>)

};

function LoadingScreen() {

  return (
  
  <div style={loadingScreen} id="loadingScreen" className="container">
      <h2>Generating essay...</h2>
      <div id="loadingWheel"></div>
      </div>)

};

function LoadingScreen2() {

  return (
  
  <div style={loadingScreen2} id="loadingScreen2" className="container">
      <h2>Generating essay...</h2>
      <div id="loadingWheel"></div>
      </div>)

};

function Essay() {

  return (
  
  <div style={essay} id="essay" className="container">
      <h2>Your Essay</h2>
      <h3>Essay Topic here</h3>
      <p>essay here</p>
      <h4>If you would like feedback on the quality of this essay, and grading based on the VCAA expected qualities, please click here.</h4>
      <button type="button">Grade essay</button>
      <button>Back</button>
      </div>)
};

function Feedback() {

  return (
  
  <div style={feedback} id="feedback" className="container">
      <h2>Feedback</h2>
      <h3>Grade here</h3>
      <p>Feedback here</p>
      <h4>Thank you for using the EL essay generator</h4>
      <button type="button">Create a new essay</button>
      <button>Back</button>
      </div>)

};



return (<>
<Opening/>
<EssayForm/>
<Examples/>
<LoadingScreen/>
<Essay/>
<LoadingScreen2/>
<Feedback/>
</>

)
}