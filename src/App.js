import './App.css';
import Components from './Components.js'
import PromptTemplate from './PromptTemplate.js';
import FeedbackTemplate from './FeedbackTemplate.js';
import React, {useState, useEffect} from 'react';

function App() {


 const openAIAPIKey = process.env.REACT_APP_OPENAI_API;

  const [activePage, setActivePage] = useState(0);
  const [examplesData, setExamplesData] = useState({});
  const [essayPrompt, setEssayPrompt] = useState("");
  const [gptRequestString, setGPTRequestString] = useState("");
  const [essayResponse, setEssayResponse] = useState("");
  const [feedbackRequestString, setFeedbackRequestString] = useState("");
  const [feedbackResponse, setFeedbackResponse] = useState("");

  useEffect(() => {
    if (Object.keys(examplesData).length > 0) {
        setActivePage(3);
    }
}, [examplesData]); 

  useEffect(() => {
    if (activePage === 3) {
      gptRequest();
    }
  }, [activePage]);
 
  useEffect(() => {
    if (activePage === 5) {
      gptRequest();
    }
  }, [activePage]);
  
  
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

  function gptRequest() {

  
  async function getResponse(userInput){

          const response = await fetch('https://api.openai.com/v1/chat/completions', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${openAIAPIKey}`
              },
              body: JSON.stringify({
                  model: 'gpt-3.5-turbo', // 'gpt-4o', 'gpt-3.5-turbo'
                  messages: [{role: 'user', content: userInput}],
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
      //setEssayResponse(dummyResponse)
      //setActivePage(4);
    }

    if (activePage === 5) {
      getResponse(feedbackRequestString);
      //setFeedbackResponse(dummyFeedback)
      //setActivePage(6);
    }

  };


  return (
    <div className="App">
        <Components feedbackResponse={feedbackResponse} setExamplesData={setExamplesData} essayResponse={essayResponse} essayPrompt={essayPrompt} setEssayPrompt={setEssayPrompt} activePage={activePage} setActivePage={setActivePage}/>
        <PromptTemplate examplesData={examplesData} essayPrompt={essayPrompt} gptRequestString={gptRequestString} setGPTRequestString={setGPTRequestString}/>
        <FeedbackTemplate essayResponse={essayResponse} setFeedbackRequestString={setFeedbackRequestString} />
    </div>
  );
}

const dummyResponse = `*Introduction*
Language is a powerful tool for conveying social and individual identities, playing a crucial role in how we interact with others. In contemporary Australian society, individuals often make deliberate language choices to signal their personal and social identities. This essay contends that through various linguistic strategies, Australians reveal elements of their social and individual identities to a significant extent. The following discussion will explore this through analyses of accent variation, the influence of cultural backgrounds, and language adaptation for social power.

*BodyParagraph1*
A key way that Australians reveal their social and individual identities is through their use of different accents. The evolution of Broad, General, and Cultivated Australian English accents exemplifies this. For instance, an individual speaking with a Broad Australian accent may do so to align with a working-class identity or to evoke a sense of solidarity within certain social groups. In contrast, a Cultivated Australian accent, characterized by features like higher vowel sounds in words like "dance" [dæns] vs. [ˈdɑːns], can be used to project an image of prestige or higher social status. As linguist Bruce Moore observed, "Accent diversity in Australia serves as a powerful marker of social identity, often indicating one’s social class and educational background." This variation in speech sound production and prosodic features allows individuals to signal their desired social affiliations and backgrounds.

Additionally, Example B highlights the adoption of phonetic characteristics by individuals to assimilate with broader societal norms or distinct groups. For example, a migrant might reduce their native accent and adopt a General Australian accent to blend in. This process involves connected speech processes such as vowel reduction, resulting in pronunciation shifts that make their speech more closely resemble that of native speakers. Through this adaptation, speakers reflect their sociolinguistic intent—whether to integrate or to mark their unique cultural heritage—further reinforcing the idea that accent variation is a deliberate and significant marker of identity.

*BodyParagraph2* 
The influence of cultural backgrounds on language choices is another important aspect of identity in Australia. A prime example is the use of Aboriginal Australian English (AAE) to maintain cultural ties and assert a distinct identity. AAE often incorporates inflectional and derivational morphology unique to Indigenous languages, alongside distinctive prosodic features like intonation patterns that differ from Standard Australian English (SAE). An instance of AAE in use might include the verb "yarn" meaning to chat or tell a story, which carries rich cultural connotations not present in the SAE equivalent. Linguist Diane Eades asserts, "Aboriginal English varieties enable speakers to maintain cultural identity while navigating the dominant societal norms."

Additionally, Example B shows how adolescent speakers incorporate elements from migrant ethnolects, such as Vietnamese-Australian or Greek-Australian English, revealing their cultural heritage and peer group affiliations. This may involve code-switching, effectively showing aptitude in multiple linguistic frameworks while communicating group membership and belonging. Lexical borrowings, such as using the Vietnamese term "người" within an English sentence, exemplify how ethnolinguistic identity is expressed. These language choices represent not only personal pride in one's heritage but also the broader multicultural tapestry of contemporary Australian society, reinforcing the deliberate nature of linguistic identity crafting.

*BodyParagraph3*
Language adaptation also serves as a mechanism for gaining social power and prestige. Individuals often modify their linguistic repertoire to align with overt and covert norms depending on context. For example, the use of formal language in business settings, filled with complex noun phrases and nominalizations, can demonstrate education and expertise, positioning the speaker as authoritative and competent. Phrases like "economic revitalization" rather than "making the economy better" serve to elevate the speaker’s status. Linguist Felicity Cox notes, "Language sophistication and formality are often used strategically to assert dominance and intellect, especially in professional environments."

Furthermore, the manipulation of colloquial language and slang in informal contexts can act as a covert norm to build solidarity within peer groups. Example B highlights how teenagers use phrases like "arvo" (afternoon) and "smoko" (a short break) to establish in-group membership and social bonds. These morphological processes—shortening and hypocoristic use of suffixes—are powerful indicators of identity within these groups. As such, the strategic use of different linguistic registers and styles underscores the deliberate effort individuals make to navigate social hierarchies and communities effectively.

*Conclusion*
Overall, this essay has demonstrated that in contemporary Australian society, language choices are deliberately made to reveal social and individual identities. Through the examination of accent variations, the influence of cultural backgrounds, and language adaptation for social power, it is clear that these linguistic strategies significantly define how identity is constructed and perceived. Each body paragraph elucidated how Australians deploy these methods to navigate their social environments and assert their identities. Ultimately, the intricate relationship between language and identity underscores its critical role in personal and social interactions.`

const dummyFeedback = `FeedbackResponse Grade: 14-15

Positive feedback: The essay demonstrates a confident and detailed examination of the topic, with a sophisticated discussion of the social contexts of language use. It effectively discusses phonological variations, ethnolects, and sociolects and idiolects with depth and breadth of sociolinguistic knowledge. The use of evidence and examples from contemporary sociolinguistic discussions and debates, such as the works of Cox, Fraser, and Burridge, strengthens the arguments presented. The analysis is thorough, with highly appropriate and effective use of metalanguage. The essay is tightly structured and exhibits assured use of written discourse features, seamlessly integrating complex ideas.

Improvement tips: While the essay is excellent, a slight improvement could involve incorporating more recent studies or additional sources to further substantiate the claims made. Additionally, some sections could benefit from a deeper exploration of counterarguments or alternative perspectives to enhance the critical analysis. This would demonstrate an even more nuanced understanding of the topic. Lastly, ensuring that all sources are cited consistently in a particular referencing style would add a final layer of polish to this already exceptional essay.`

export default App;

