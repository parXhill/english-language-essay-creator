
import React from 'react';

export default function FeedbackTemplate({essayResponse, setFeedbackRequestString}){

setFeedbackRequestString(`Grade the essay and give feedback based on this assessment criteria:

Essay:

${essayResponse}

Assessment Criteria:

14–15
• Demonstrates confident and detailed examination of the topic, with sophisticated discussion of the social contexts of language-use and depth and breadth of sociolinguistic knowledge as appropriate
• Displays highly relevant use of evidence and examples from contemporary sociolinguistic discussions and debates, including reference to the stimulus material
• Includes excellent analysis, using highly appropriate and effective metalanguage
• Creates a tightly structured essay characterised by assured use of the features of written discourse
12–13
• Demonstrates very good understanding of the topic, with broadly ranging ideas about the social contexts of language use
• Displays relevant use of evidence and examples from contemporary sociolinguistic discussions and debates, including reference to the stimulus material
• Provides very good analysis, with appropriate and effective use of metalanguage
• Creates a well-structured essay characterised by assured use of the features of written discourse
10–11
• Demonstrates good understanding of the topic, making several points about the social contexts of language use, mostly supported by examples or evidence drawn from contemporary sociolinguistic discussion and debate
• Includes some reference to the stimulus material
• Includes analysis of ideas, mostly expressed accurately with metalanguage
• Indicates ability to utilise appropriate features of written discourse in the essay’s overall structure
8–9
• Demonstrates some understanding of the topic, with some points illustrated by examples and evidence from contemporary sociolinguistic discussion and debate, and some reference to the stimulus material
• Provides limited analysis throughout response, and uses metalanguage sporadically and/or inaccurately
• Shows mostly consistent use of features of written discourse 
6–7
• Demonstrates limited understanding of the topic, with ideas that are general, superficial and/or repetitive
• Includes few supporting examples or evidence
• Creates a descriptive rather than analytical essay, with little or no use of metalanguage
• Includes some features of written discourse, but they are not used consistently
4–5
• Demonstrates very limited understanding of the topic, with limited or no supporting examples
• Creates a descriptive response with limited or no use of metalanguage
• Uses few features of written discourse
0–3
• Demonstrates little or no understanding of the topic
• Includes ideas loosely related to the topic, but these are not developed and lack evidence and examples
• Uses minimal evidence of appropriate features of written discourse

Format your response as:

“Grade: (insert number grade here)

Positive feedback: (insert positive feedback here, max 150 words)

Improvement tips: (insert tips to improve here, max 150 words)”
`)

}

