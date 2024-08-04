import React, {useState} from 'react';
import './Components.css'


export default function Components({feedbackResponse, setExamplesData, essayResponse, activePage, setActivePage, essayPrompt, setEssayPrompt}){

    let essayFormStyle;
    let openingStyle;
    let examplesStyle;
    let loadingScreen;
    let loadingScreen2;
    let essay;
    let feedback;

if (activePage !== 6){feedback= {display: "none"}}
if (activePage !== 5){loadingScreen2= {display: "none"}}
if (activePage !== 4){essay= {display: "none"}}
if (activePage !== 3){loadingScreen= {display: "none"}}
if (activePage !== 2){examplesStyle = {display: "none"}}
if (activePage !== 1){essayFormStyle = {display: "none"}}
if (activePage !== 0 ){openingStyle = {display: "none"}}

  function Opening() {

    return (
    
      <div style={openingStyle} id="opening" className="container">
        <h2>Click here to create an English Language Essay</h2>
        <button onClick={() => setActivePage(1)}>Start</button>
        </div>)

};

function EssayForm() {

  const [promptSelector, setPromptSelector] = useState(true);
  const [promptInput, setPromptInput] = useState("");

  function handlePrompt(e){

    if (!promptSelector) {
      setEssayPrompt(promptInput);
      setActivePage(2);
    } else {
      setActivePage(2);
    }


  }

    return (
    
    <div style={essayFormStyle} id="essayForm" className="container">
        <h2>Select an essay prompt or write your own</h2>
        {promptSelector ? (<>
        <form id="essayPromptForm">
        <label htmlFor="essayPrompt">Select an essay prompt:</label>
        <select id="essayPrompt" value={essayPrompt} onChange={(e) => setEssayPrompt(e.target.value)}>
            <option value="" disabled>Year - Source - Question</option>
            <option value="‘It’s just language. Who cares if it’s formal or informal, standard or non-standard?’ To what extent is this true in contemporary Australian society?">
              2021 - VCAA - ‘It’s just language. Who cares if it’s formal or informal, standard or non-standard?’ To what extent is this true in contemporary Australian society?
            </option>
            <option value="‘In contemporary Australian society, we must be careful with our use of language in public contexts.’ Discuss.">
              2021 - VCAA - ‘In contemporary Australian society, we must be careful with our use of language in public contexts.’ Discuss.
            </option>
            <option value="‘When interacting with others, we make deliberate language choices that reveal elements of our social and individual identities.’ To what extent is this true in contemporary Australian society?">
              2021 - VCAA - ‘When interacting with others, we make deliberate language choices that reveal elements of our social and individual identities.’ To what extent is this true in contemporary Australian society?
            </option>
            <option value="‘Language has the power to both influence and reflect community attitudes.’ Discuss.">
              2020 - VCAA - ‘Language has the power to both influence and reflect community attitudes.’ Discuss.
            </option>
            <option value="‘Social media and other digital platforms are changing the way we communicate.’ Discuss.">
              2020 - VCAA - ‘Social media and other digital platforms are changing the way we communicate.’ Discuss.
            </option>
            <option value="‘Formal written and spoken language are essential components of English in contemporary Australian society.’ To what extent do you agree?">
              2020 - VCAA - ‘Formal written and spoken language are essential components of English in contemporary Australian society.’ To what extent do you agree?
            </option>
            <option value="‘Australian English is always enriched by the non-standard English varieties operating in contemporary Australian society.’ Discuss.">
              2019 - VCAA - ‘Australian English is always enriched by the non-standard English varieties operating in contemporary Australian society.’ Discuss.
            </option>
            <option value="‘Some aspects of situational and cultural contexts have greater influence over an individual’s language choices than others.’ Is this true in the context of contemporary Australian society?">
              2019 - VCAA - ‘Some aspects of situational and cultural contexts have greater influence over an individual’s language choices than others.’ Is this true in the context of contemporary Australian society?
            </option>
            <option value="‘Formal language is used mainly to clarify meaning, but it can also be used to obfuscate.’ Discuss.">
              2019 - VCAA - ‘Formal language is used mainly to clarify meaning, but it can also be used to obfuscate.’ Discuss.
            </option>
            <option value="‘Users of Australian English must always negotiate positive and negative face needs in order to communicate successfully in the contemporary Australian context.’ Discuss.">
              2018 - VCAA - ‘Users of Australian English must always negotiate positive and negative face needs in order to communicate successfully in the contemporary Australian context.’ Discuss.
            </option>
            <option value="‘In contemporary Australian society, freedom of speech is sometimes considered to be the freedom to say or write anything.’ To what extent do you agree?">
              2018 - VCAA - ‘In contemporary Australian society, freedom of speech is sometimes considered to be the freedom to say or write anything.’ To what extent do you agree?
            </option>
            <option value="‘Language use can reveal the underlying attitudes of dominant groups to a range of identities and cultures in the contemporary Australian context.’ Discuss.">
              2018 - VCAA - ‘Language use can reveal the underlying attitudes of dominant groups to a range of identities and cultures in the contemporary Australian context.’ Discuss.
            </option>
            <option value="‘The use of language in Australia today reflects social diversity.’ Discuss.">
              2017 - VCAA - ‘The use of language in Australia today reflects social diversity.’ Discuss.
            </option>
            <option value="‘Language is a powerful tool for influencing social attitudes within contemporary Australian society.’ Discuss.">
              2017 - VCAA - ‘Language is a powerful tool for influencing social attitudes within contemporary Australian society.’ Discuss.
            </option>
            <option value="‘An understanding of Standard Australian English is needed to be able to communicate in all contexts in contemporary Australian society.’ To what extent is this statement true?">
              2017 - VCAA - ‘An understanding of Standard Australian English is needed to be able to communicate in all contexts in contemporary Australian society.’ To what extent is this statement true?
            </option>
            <option value="‘Those who are critical of the use of jargon do not appreciate its vital role in communication.’ Discuss.">
              2016 - VCAA - ‘Those who are critical of the use of jargon do not appreciate its vital role in communication.’ Discuss.
            </option>
            <option value="‘The nature of digital communication is changing the way language is used today in Australia.’ Discuss.">
              2016 - VCAA - ‘The nature of digital communication is changing the way language is used today in Australia.’ Discuss.
            </option>
            <option value="‘The choices that individuals make when speaking and writing often reflect their personal attitudes as well as social/ cultural contexts.’ Discuss.">
              2021 - VATE - ‘The choices that individuals make when speaking and writing often reflect their personal attitudes as well as social/ cultural contexts.’ Discuss.
            </option>
            <option value="‘Australian English continues to evolve as contemporary texts in spoken and written modes both question and construct what being an Australian means.’ Discuss.">
              2021 - VATE - ‘Australian English continues to evolve as contemporary texts in spoken and written modes both question and construct what being an Australian means.’ Discuss.
            </option>
            <option value="‘In contemporary Australia, deciding which uses of language are acceptable is a continual challenge.’ To what extent do you agree?">
              2021 - VATE - ‘In contemporary Australia, deciding which uses of language are acceptable is a continual challenge.’ To what extent do you agree?
            </option>
            <option value="‘Our personal language use reflects our identity; however, it can also perpetuate negative attitudes towards our and others’ identities.’ Discuss.">
              2021 - NEAP - ‘Our personal language use reflects our identity; however, it can also perpetuate negative attitudes towards our and others’ identities.’ Discuss.
            </option>
            <option value="‘The way that language is used in society is driven primarily by a desire to maintain social harmony.’ To what extent do you agree with this statement?">
              2021 - NEAP - ‘The way that language is used in society is driven primarily by a desire to maintain social harmony.’ To what extent do you agree with this statement?
            </option>
            <option value="‘In a contemporary Australian society, what role does context play in setting the linguistic boundaries of both spoken and written language?’">
              2021 - NEAP - ‘In a contemporary Australian society, what role does context play in setting the linguistic boundaries of both spoken and written language?’
            </option>
            <option value="‘There are no linguistic grounds for saying one language variety is better than another.’ Discuss.">
              2020 - Insight - ‘There are no linguistic grounds for saying one language variety is better than another.’ Discuss.
            </option>
            <option value="‘Changing social attitudes have influenced language use in Australia.’ To what extent is this true in the Australian context?">
              2020 - Insight - ‘Changing social attitudes have influenced language use in Australia.’ To what extent is this true in the Australian context?
            </option>
            <option value="‘Jargon is unnecessarily complicated language used to impress, rather than to inform, your audience.’ To what extent do you agree?">
              2020 - Insight - ‘Jargon is unnecessarily complicated language used to impress, rather than to inform, your audience.’ To what extent do you agree?
            </option>
            <option value="‘In times of great stress and strain, language is an essential tool for communication to ensure the community has all the required information. However, the other functions it fulfils are equally as important.’ How is this true in Australia today?">
              2020 - VATE - ‘In times of great stress and strain, language is an essential tool for communication to ensure the community has all the required information. However, the other functions it fulfils are equally as important.’ How is this true in Australia today?
            </option>
            <option value="‘Technology, major societal events, and environmental issues all enrich our language use in many ways.’ To what extent is this true in contemporary Australian society?">
              2020 - VATE - ‘Technology, major societal events, and environmental issues all enrich our language use in many ways.’ To what extent is this true in contemporary Australian society?
            </option>
          </select>
        </form>
        <button id="writePromptButton" onClick={ ()=> setPromptSelector(false)}>Write my own prompt</button></> ) : (<>
        <input value={promptInput} onChange={(e) => setPromptInput(e.target.value)}placeholder="Write your own prompt here..."></input>
        <button id="selectPromptButton" onClick={()=> setPromptSelector(true)}>Select a prompt</button></> )}
        <div className="buttonContainer">
        <button onClick={() => setActivePage(0)}>Back</button>
        <button onClick={handlePrompt}>Next</button>
        </div>
    </div>)

};

function Examples() {
  
    const [formData, setFormData] = useState({
        contention: '',
        theme1: '',
        theme2: '',
        theme3: '',
        example1: '',
        example2: '',
        example3: '',
        example4: '',
        example5: '',
        example6: ''
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
        setExamplesData(formData);

        
      };
    

    return (
    
    <div style={examplesStyle} id="examples" className="container">
        <h2>Enter contemporary examples you would like the essay to contain</h2>
        <form id="exampleForm">
          <label htmlFor="example1">Example 1: </label>
          <input placeholder="E.g. PC changes in Roald Dahl books" value={formData.example1} id="example1" name="example1" onChange={handleChange}></input>
          <label htmlFor="example2">Example 2: </label>
          <input placeholder="E.g. Traditional aboriginal names for cities used in Channel 10 weather report for NAIDOC week" value={formData.example2} id="example2" name="example2"onChange={handleChange}></input>
          <label htmlFor="example3">Example 3: </label>
          <input placeholder="E.g. Jargon such as 'antimatter' and 'inertia in VCE Physics class" value={formData.example3} id="example3" name="example3"onChange={handleChange}></input>
          <label htmlFor="example4">Example 4: </label>
          <input placeholder="E.g. Lydia Schiavello's posh accent in the Real Housewives of Melbourne" value={formData.example4} id="example4" name="example4"onChange={handleChange}></input>
          <label htmlFor="example5">Example 5: </label>
          <input placeholder="E.g. ABC show Bluey uses diminutives such as 'chippie' and 'tradie' " value={formData.example5} id="example5" name="example5"onChange={handleChange}></input>
          <label htmlFor="example6">Example 6: </label>
          <input placeholder="E.g. I sometimes code-switch between Spanish and English with my grandmother" value={formData.example6} id="example6" name="example6"onChange={handleChange}></input>
        </form>
        <div className="buttonContainer">
        <button onClick={() => setActivePage(1)}>Back</button>
        <button type="button" onClick={submitExamples}>Generate essay</button>
        </div>
    </div>)

};

function LoadingScreen() {

  return (
  
  <div style={loadingScreen} id="loadingScreen" className="container">
      <h2>Please wait, this can take up to a minute.</h2>
      <div id="loadingWheel"></div>
      <h2>Generating essay...</h2>
      </div>)

};

function Essay() {

  const splitEssay = essayResponse.split(/\*(Introduction|BodyParagraph1|BodyParagraph2|BodyParagraph3|Conclusion)\*/);

  const getSectionContent = (section) => {
    const index = splitEssay.indexOf(section);
    if (index !== -1 && index + 1 < splitEssay.length) {
      return splitEssay[index + 1].trim(); // Get the content right after the section header
    }
    return null; // Return null if the section is not found
  };

  const introductionContent = getSectionContent("Introduction");
  const bodyParagraph1Content = getSectionContent("BodyParagraph1");
  const bodyParagraph2Content = getSectionContent("BodyParagraph2");
  const bodyParagraph3Content = getSectionContent("BodyParagraph3");
  const conclusionContent = getSectionContent("Conclusion");

  
  return (
  
  <div style={essay} id="essay" className="container">
      <h2>Your Essay</h2>
      <h3>{essayPrompt}</h3>
      <h4>Introduction</h4>
      <p>{introductionContent}</p>
      <h4>Paragraph 1</h4>
      <p>{bodyParagraph1Content}</p>
      <h4>Paragraph 2</h4>
      <p>{bodyParagraph2Content}</p>
      <h4>Paragraph 3</h4>
      <p>{bodyParagraph3Content}</p>
      <h4>Conclusion</h4>
      <p>{conclusionContent}</p>
      <h4>If you would like feedback on the quality of this essay, and grading based on the VCAA expected qualities, please click here.</h4>
      <div className="buttonContainer">
      <button onClick={() => setActivePage(2)}>Back</button>
      <button type="button" onClick={() => setActivePage(5)}>Grade essay</button>
      </div>
      </div>)
};

function LoadingScreen2() {

  return (
  
  <div style={loadingScreen2} id="loadingScreen2" className="container">
      <h2>Please wait, this can take up to a minute.</h2>
      <div id="loadingWheel"></div>
      <h2>Generating feedback...</h2>
      </div>)

};


function Feedback() {

  const splitFeedback = feedbackResponse.split(/(Grade:|Positive feedback:|Improvement tips:)/);


  const getSectionContent = (section) => {
    const index = splitFeedback.indexOf(section);
    if (index !== -1 && index + 1 < splitFeedback.length) {
      return splitFeedback[index + 1].trim(); // Get the content right after the section header
    }
    return null; // Return null if the section is not found
  };

  const gradeContent = getSectionContent("Grade:");
  const positiveFeedbackContent = getSectionContent("Positive feedback:");
  const improvementTipsContent = getSectionContent("Improvement tips:");

  return (
  
  <div style={feedback} id="feedback" className="container">
      <h2>Feedback</h2>
      <h3>Grade</h3>
      <h1>{gradeContent}</h1>
      <h3>Positive aspects</h3>
      <p>{positiveFeedbackContent}</p>
      <h3>Areas for improvement</h3>
      <p>{improvementTipsContent}</p>
      <h4>Your essay</h4>
      <h4>{essayPrompt}</h4>
      <p>{essayResponse}</p>
      <h4>Thank you for using the EL essay generator</h4>
      <div className="buttonContainer">
      <button onClick={() => setActivePage(4)}>Back</button>
      <button type="button" onClick={() => setActivePage(0)}>Create a new essay</button>
      </div>
      </div>)

};



return (<>
<Opening/>
<EssayForm/>
<Examples/>
<LoadingScreen/>
{activePage === 5 ? <LoadingScreen2/> : null}
{activePage === 6 ? <Feedback/> : null}
<Essay/>

</>

)
}