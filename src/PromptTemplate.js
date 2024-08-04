export default function PromptTemplate({examplesData, essayPrompt, gptRequestString, setGPTRequestString}){

setGPTRequestString(`
Based on the content given in the parenthesis below, you will write an essay in a particular format for a VCE English Language class.
(You will be given the key course knowledge outcomes and skills for this course.
You will be given guidelines on the structure of the essay.
You will be given an essay prompt.
You will be given examples to work into the body paragraphs. Elaborate on the examples to make them relevant and fit. 

You MAY be given a contention to follow and themes/topics to base your paragraphs around. If these are provided, use them, if they are empty, create your own.

Use the provided metalanguage words appropriately and naturally within the essay context whenever relevant. Provide actual examples of the language in use for each example given that illustrate the point being made.)

Key Course Knowledge Outcomes and Skills:
	1.	The features of Standard Australian English and its role in Australian society.
	2.	The ways in which a variety of identities are conveyed and reflected in Australian texts.
	3.	The evolution of Broad, General, and Cultivated Australian English accents.
	4.	How English varies according to culture, including Standard Australian English, Aboriginal Australian Englishes, and migrant ethnolects.
	5.	Attitudes within Australian society to different varieties of English, including prescriptivist and descriptivist attitudes.
	6.	How English in Australian society is influenced by global contact and modern technologies.
	7.	The role of language in conveying a perceived national identity.
	8.	Metalanguage to discuss varieties of English in Australian society.
	9.	Social and personal variation (sociolects and idiolects) in language according to factors such as age, gender, sexuality, occupation, interests, aspirations, and education.
	10.	Representations of individual and group identities in a range of texts.
	11.	The ways in which the language of individuals and the language of groups is shaped by social expectations and community attitudes.
	12.	The ways in which people draw on their linguistic repertoire to gain power and prestige, including exploiting overt and covert norms.
	13.	Code-switching as a means of demonstrating group membership and belonging.
	14.	The relationship between social attitudes and language choices.
Essay Structure:
The essay consists of five paragraphs: an introduction, three body paragraphs, and a conclusion. It is 900-1000 words long.
Introduction Structure:
	•	An unpacking of how the overall topic is relevant (two sentences).
	•	A contention that responds to the essay prompt.
	•	A brief overview of the main topics of the three body paragraphs.
Body Paragraph Structure:
Each of the three main paragraphs includes in this order:
	1.	A topic sentence that outlines one argument in response to the prompt (one sentence).
	2.	An unpacking of the topic sentence (one sentence).
	3.	An overview of Example A provided (1-2 sentences).
	4.	A linguistic framework that highlights the linguistically interesting part of Example A (1-2 sentences).
	5.	An elaboration that links Example A to the key course knowledge (2-3 sentences).
A quote from an Australian linguist that is relevant.
	6.	An overview of Example B provided (1-2 sentences).
	7.	A linguistic framework that highlights the linguistically interesting part of Example B (1-2 sentences).
	8.	An elaboration that links Example B to the key course knowledge (2-3 sentences).
	9.	A concluding statement.
Conclusion Structure:
	•	An overall concluding statement on the essay.
	•	A restating of how the three body paragraphs support the contention.
	•	A final reflection that closes the essay.
Essay Prompt:

${essayPrompt}

Contention:

 ${examplesData.contention}(If blank, create your own)

 Paragraph themes/topics:

  Body paragraph 1:	${examplesData.theme1} (If blank, create your own)
  Body paragraph 2:	${examplesData.theme2} (If blank, create your own)
  Body paragraph 3:	${examplesData.theme3} (If blank, create your own)

Examples to be used:

1. ${examplesData.example1}
2. ${examplesData.example2}
3. ${examplesData.example3}
4. ${examplesData.example4}
5. ${examplesData.example5}
6. ${examplesData.example6}


Metalanguage Section:
Use the following words as much as possible whenever relevant within the essay:

Phonetics and Phonology
	•	Speech sound production
	•	Consonants: voicing, place of articulation, manner of articulation
	•	Vowels: height, backness, roundedness
	•	Connected speech processes
	•	Assimilation, vowel reduction, elision, insertion
	•	The International Phonetic Alphabet (IPA)
	•	The transcription of English (Harrington, Cox & Evans, 1997)
	•	Prosodic features
	•	Pitch, stress, volume, tempo, intonation
	•	Phonological patterning
	•	Alliteration, assonance, consonance, onomatopoeia, rhythm, rhyme
Morphology
	•	Morphemes
	•	Root, stem
	•	Free, bound
	•	Affix (prefix, suffix, infix)
	•	Inflectional, derivational
	•	Morphological over-generalisation
	•	Word formation processes/morphological patterning
	•	Affixation
	•	Abbreviation
	•	Shortening
	•	Compounding
	•	Blending
	•	Backformation
	•	Conversion of word class
	•	Initialism, acronym
	•	Contraction
	•	Hypocoristic use of suffixes
Lexicology
	•	Word classes
	•	Nouns (including pronouns)
	•	Verbs (including auxiliary verbs and modal verbs)
	•	Adjectives
	•	Adverbs
	•	Prepositions
	•	Conjunctions (coordinators, subordinators)
	•	Determiners
	•	Interjections
	•	Function words and content words
	•	Word formation processes
	•	Neologism
	•	Borrowings
	•	Commonisation
	•	Nominalisation
	•	Word loss
	•	Obsolescence, archaism
Syntax
	•	Phrases
	•	Noun phrase, verb phrase, adjective phrase, adverb phrase, prepositional phrase
	•	Clauses
	•	Functions within the clause: subject, object, predicate, complement, adverbial
	•	Combining clauses: coordination, subordination
	•	Sentences
	•	Sentence structures: sentence fragments; simple, compound, complex, compound-complex
	•	Sentence types and their communicative function: declarative, imperative, interrogative, exclamative
	•	Word order
	•	Subject, verb, object
	•	Modifiers in a noun phrase
	•	Adverbials
	•	Active and passive voice (including agentless passives)
	•	Syntactic patterning
	•	Antithesis, listing, parallelism
Discourse and Pragmatics
	•	Paralinguistic features
	•	Vocal effects (whispers, laughter)
	•	Non-verbal communication (gestures, facial expressions, eye contact)
	•	Creakiness, breathiness
	•	Code switching
	•	Language learning
	•	Group membership and belonging
	•	Conventions for the transcription of spoken language
	•	Factors that contribute to a text’s cohesion
	•	Lexical choice (synonymy, antonymy, hyponymy, hypernymy)
	•	Collocation
	•	Information flow (clefting, front focus, end focus)
	•	Anaphoric and cataphoric reference
	•	Deictics
	•	Repetition, substitution, ellipsis
	•	Conjunctions and adverbials
	•	Factors that contribute to a text’s coherence
	•	Cohesion, inference, logical ordering, formatting, consistency and conventions
	•	Features of spoken discourse
	•	Openings and closings
	•	Adjacency pairs, minimal responses/backchannels
	•	Overlapping speech
	•	Discourse markers/particles
	•	Non-fluency features (pauses, filled pauses/voiced hesitations, false starts, repetition, repairs)
	•	Strategies in spoken discourse
	•	Topic management
	•	Turn-taking
	•	Management of repair sequences
	•	Code switching (marker of group membership and belonging)
	•	Politeness strategies
	•	Positive and negative face
	•	Positive and negative face-threatening acts
	•	Positive and negative politeness
Semantics
	•	The relation of meaning and sign
	•	Semantic domain
	•	Semantic over-generalisation
	•	Inference
	•	Etymology
	•	Semantic change
	•	Broadening, narrowing, shift
	•	Elevation, deterioration
	•	Denotation, changing connotation
	•	Semantic patterning
	•	Figurative language (irony, metaphor, oxymoron, simile, hyperbole, personification, animation, puns, lexical ambiguity)
	•	Lexical meaning (sense relations)
	•	Synonymy, antonymy
	•	Hyponymy, hypernymy
	•	Idiom
	•	Denotation, connotation
	•	Euphemism and dysphemism
	•	Aboriginal Australian Englishes (AAE)
	•	Continuum
	•	Non-standard Englishes
	•	First contact language
	•	Colonial language
	•	First Nations languages
	•	Accent: Broad, General, Cultivated
	•	Regional differences
	•	Age-related differences
	•	Social differences
	•	Code switching
	•	Codification
	•	Writing system
	•	Orthography
	•	Pronunciation
	•	Syntax
	•	Vocabulary
	•	Colloquial language
	•	Context
	•	Context-specific grapheme
	•	Creole
	•	Pidgin
	•	Critical period of language acquisition
	•	Cultural context
	•	Descriptivism
	•	Dialect
	•	Etymology
	•	Field
	•	First-language acquisition
	•	Universal Grammar
	•	Usage-based accounts
	•	Functions of language: Referential, Emotive, Conative, Phatic, Metalinguistic, Poetic

	Format your response like this *Introduction* introductioncontent *BodyParagraph1* bodyparagraph1content *BodyParagraph2* bodyparagraph2content *BodyParagraph3* bodyparagraph3content *Conclusion* conclusion
`)};