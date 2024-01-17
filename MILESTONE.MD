# Milestones

## Terms
**"KeyWord"**
    
The nine-letter word that is the basis of the puzzle

**"Target Letter"**
    
The fifth (middle) letter in the Keyword. It's the letter all words in the solutation have to have.

**"Legal"**

A word that can be used in the game 

***A legal word follows the three rules;***
1. Has at least four letters in it
2. Has the Target Letter in it.
3. Can return a point value in scrabble

## Milestones

### 0.0.2 - WW2 Legal - TODO
#### Description
Continuing from 0.0.1. 

The maker service will now find the legal words from the created list of words.
There are two possible solutions to this;
    
1. Use an API Service - Wordnik
2. Use a local dictionary to check the words

Whilst the API is the best method, it might not be the most practical, so at this milestone the local directory will 
be used.

#### Tests
1. **TODO** - Directories are loaded
2. **TODO** - Wordlist is checked against directories
3. **TODO** - Legal words are returned
 
#### Notes
- lopsom

### 0.0.1 - WW1 Functional - DONE
#### Description
The Maker service Creates a nine-letter word and notes the forth letter as the "target" letter. The word it creates is 
not legal (Has a point value in Scrabble).

From this word, a list of words that contain a combination of letters and the terget letter is produced and output 
to a JSON file. 

It has to be emphasized that these words are, again, not legal.

#### Tests 
1. **DONE** - Creates a Key Word of nine letters
2. **DONE** - returns the 5th letter as the "Target Letter"
3. **DONE** - Creates a list of words from the result of above
4. **DONE** - Each Word in the list has the "Target Letter"
5. **DONE** - The List of words has at least three other letters in the Code Word
6. **DONE** - The list can be outputted into a json file

#### Notes
- This was the first attempt at this milestone.  
- As such, the tests are not accurate to how this was executed.
- As this is a portfolio project, it is prudent to move forward regardless.