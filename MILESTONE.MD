# Milestones

## Terms
**"KeyWord"**
    
The nine-letter word that is the basis of the puzzle

**"Target Letter"**
    
The fifth (middle) letter in the Keyword. It's the letter all words in the solution have to have.

**"Legal"**

A word that can be used in the game 

***A legal word follows the three rules;***
1. Has at least four letters in it
2. Has the Target Letter in it.
3. Can return a point value in scrabble

## Milestones

##  0.0.5 - WEBSITE APP CREATION - TODO
The website is made interactive. It loads the puzzle and allows the user to check their 
answers.

- [ ] The website is made interactive
- [ ] The website loads the puzzle
- [ ] The website allows the user to check their answers
- [ ] The website displays the answers

##  0.0.3 - WW Express - TODO
Loads a web page that displays the word wheel. 

The frontend waits for the word-wheel to generate the codeword and then displays the puzzle as a word wheel.

- [x] Use puzzleService to generate a puzzle
- [x] Install Express to access the service and get the puzzle
- [x] Make Basic Website that displays the puzzle
- [ ] Express Servers the Website
- [ ] Express Serves the API

### 0.0.2—WW2 Legal - DONE
Continuing from 0.0.1. 

The maker service will now find the legal words from the created list of words.
There are two possible solutions to this;
    
1. Use an API Service - Wordnik
2. Use a local dictionary to check the words

Whilst the API is the best method, it might not be the most practical, so at this milestone the local directory will 
be used.

#### Tests
- [x] Directories are loaded
- [x] Wordlist is checked against directories
- [x] Legal words are returned
 
#### Notes
- There was some internal consternation about how quickly the program worked in terms of finding the correct words. 
Then I realized that it was faster to filter the list of correct words based on the word lists
- Trying really hard to hold back my want to refactor this code right now otherwise I will not be able to get going.

### 0.0.1—WW1 Functional - DONE
#### Description
The Maker service Creates a nine-letter word and notes the forth letter as the "target" letter. The word it creates is 
not legal (Has a point value in Scrabble).

From this word, a list of words that contain a combination of letters and the target letter is produced and output 
to a JSON file. 

It has to be emphasized that these words are, again, not legal.

#### Tests 
- [x] Creates a Key Word of nine letters
- [x] returns the fifth letter as the "Target Letter"
- [x] Creates a list of words from the result of above
- [x] Each Word in the list has the "Target Letter"
- [x] The List of words has at least three other letters in the Code Word
- [x] The list can be outputted into a json file

#### Notes
- This was the first attempt at this milestone.  
- As such, the tests are not accurate to how this was executed.
- As this is a portfolio project, it is prudent to move forward regardless.