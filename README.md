

## Chingu Tier Assessment 

* This assessment was built using create-react-app, semantic-react-ui and javascript.

* Visit: https://dna-app.davidgilmoreinnis.now.sh/ to test out my solutions. 

* The app's dependencies are create-react-app and semnatic-react-ui. To build this project locally, you'll need to clone this
  repo, use yarn to add create-react-app and semantic-react-ui. Then run yarn build. 

* In the project directory, the src folder contains the files I created for the task, including:

## Encode.js

* This file converts the text input into a DNA sequence using the letters G,C,A,T. I looped through the string, found the ascii value of each character, converted the ascii value to binary and broke the binary up into 4 subsections. Each subsection was mapped to one of the 4 DNA sequence characters.

* I added a radio button so that the user can choose to have their text string represented as a DNA sequence or RNA sequence, by replacing the character 'T' with 'U'. If a user submits texts, but then toggles to a different button, they must resubmit to see the new result.

## Substring.js 

* This file searches a user supplied text string for any sequences of DNA. I accomplished this by creating a regular expression that could be any combination of the characters G,C,A,T, but at least 4. 

## Mapping.js

* This file first maps the user supplied DNA sequence to its complimentary strand. From there it loops through the sequence 4 characters at a time, converting the 4 char chunks into binary strings. Once in binary form, the string is converted to a decimal value and lastly mapped to its ascii character.

* Because of lack of time, I assumed that users would only enter proper DNA sequences in Capital letter form. 

## App.js
* This file has the menu and menu logic. I supplied a pretty simplistic routing routine for this small of a project.

## What I didn't get accomplished 

* Testing. With more time I would have liked to run unit tests on all of my components using tools such as Enzyme or Jest. 
