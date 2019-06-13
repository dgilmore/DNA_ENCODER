

## GSM Programming Assessment

* This assessment was built using create-react-app, semantic-react-ui and javascript.

* In the project directory, the src folder contains the files I created for the task, including:

## Encode.js
*Objective 1 & 2

* This file converts the text input into a DNA sequence using the letters G,C,A,T. I looped through the string, found the ascii value of each character, converted the ascii value to binary and broke the binary up into 4 subsections. Each subsection was mapped to one of the 4 DNA sequence characters.

* I added a radio button so that the user can choose to have their text string represented as a DNA sequence or RNA sequence, by replacing the character 'T' with 'U'. If a user submits texts, but then toggles to a different button, they must resubmit to see the new result.

## Substring.js 
*Objective 3
* This file searches a user supplied text string for any sequences of DNA. I accomplished this by creating a regular expression that could be any combination of the characters G,C,A,T, but at least 4. 

## Mapping.js
*Objective 4

* This file first maps the user supplied DNA sequence to its complimentary strand. From there it loops through the sequence 4 characters at a time, converting the 4 char chunks into binary strings. Once in binary form, the string is converted to a decimal value and lastly mapped to its ascii character.

* Because of lack of time, I assumed that users would only enter proper DNA sequences in Capital letter form. 

## What I didn't get accomplished

* I did not complete objective 5 in the 24 hour period, but I believe with just a little more time and research I would have come to a solution. I believe a recursive solution would be the most cleanest and most efficient. 

* Testing. I would have liked to run unit tests on all of my components before I submitted. I found some edge cases by naturally testing. 
