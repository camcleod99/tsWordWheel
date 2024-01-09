# Milestones for camwordwheel

## Terms
    "KeyWord"
        The nine letter word that is the basis of the puzzle

    "Target Letter" 
        The fifth (middle) letter in the Keyword. It's the letter all words in the solutation have to have.
    
    "Legal"
        A word that is able to be used in the word game. 

        A legal word;
            1. Has at least four letters in it
            2. Has the Target Letter in it.
            3. Can return a point value in scrabble

## Milestones

### 0.0.2 - MAKER Legal - TODO

### 0.0.1 - Maker Init - ONGOING

    The Maker service Creates a 9 letter word and notes the forth letter as the "target" letter. The word it creates is not legal (Has a point value in Scrabble).

    From this word, a list of words that contain a combanation of letters and the terget letter is produced and output to a JSON file. These words are, again, not legal.

    Tests 
    1. Creates a Key Word of eight letters
    2. As 1 and returns the 5th letter as the "Target Letter"
    3. Creates a list of words from the result of above
    4. Each Word in the list has the "Target Letter"
    5. The List of words has at least three other letters in the Code Word
    6. The list can be outputted into a json file
