// Load the readline module from Node.js
import fs from "fs";
import util from "util";
const readDir = util.promisify(fs.readdir);

/**
 * Get the list of files from the target directory.
 * This confirms that the directory exists and the files are available.
 * @param dirPath - Path of the directory to read
 * @param fileType - filetype to filter based on
 * @returns String[] - List of files in the directory
 */
 export async function getFiles(dirPath: string, fileType: string): Promise<string[]>{
  let listing : string[] = [];
  try{
    listing = await readDir(dirPath);
  } catch (error) {
    console.error(`Er 11: Problem reading directory: ${error}`);
    return ["-1"];
  }
  return listing.filter(file => file.endsWith(`.${fileType}`));
}

/**
 * Create a dictionary from the list of files.
 * Adds the contents of the Word array in each JSON file to the dictionary.
 * Returns an array with ["-1"] if there is an error for later error handling.
 * @param files - List of files to read
 * @returns String[] - List of words from the files
 * @throws Error - If there is an error reading the file
 */
export async function createDictionary(files: string[]): Promise<string[]> {
  let dictionary : string[] = [];
  let wordData
  for (const file of files) {
    try {
      wordData = await import(`./data/${file}`)
      dictionary = dictionary.concat(wordData["words"]);
    } catch (error) {
      console.error(`Er 25: Problem reading file ${file}: ${error}`);
      return ["-1"]
    }
  }
  return dictionary;
}

/**
 * Filter the words in the directory based on the length of the word.
 * @param directory
 * @param length
 */
export function filterWords(directory: string[], length: number) : string[] {
  return directory?.filter(word => word.length === length);
}

/**
 * Randomly pick a word from the list of words.
 * @param words
 */
export function picker(words: string[]) : string | null {
   if (words.length === 0) {
    return null;
   } else {
     return words[Math.floor(Math.random() * words.length)];
   }
}

/**
 * Create a puzzle from the word.
 * @param word
 */
export function createPuzzle(word: string | null) : string | null {
  if (word === null) {
    return null;
  }

  let temp : string[] ;
  let wordArray : string[] = [];
  let random : number = 0;
  temp = word.split('');

  for (let i: number = 0; i < word.length; i++) {
    random = Math.floor(Math.random() * temp.length);
    wordArray[i] = temp[random];
    temp.splice(random, 1);
  }

  return wordArray.join('');
}

/**
 * List the possible answers for the puzzle word.
 * Uses the recursive function from maker/services.ts to make the whole list of anagrams.
 * We can also force "word-fullness", i.e.: It's a word if it has at least one vowel
 * by not passing in words into the final result if it fails the "Is a word" test
 *
 * We're using the word and mix count to see how many times the recursive function is called and
 * how many words are returned.
 * @param word
 * @param dictionary
 */
export function listAnswers(word: string, dictionary: string[] ) : string[]  {
  let result : string[] = [];
  const targetLetter : string = word[4];
  const puzzleAsArray : string[] = word.split('');
  const filteredDictionary : string[] = dictionary.filter(entry => entry.includes(targetLetter))

  function countLetters(str: string): Record<string, number> {
    const counts: Record<string, number> = {};
    for (const letter of str) {
      if (!counts[letter]) {
        counts[letter] = 0;
      }
      counts[letter]++;
    }
    return counts;
  }

  function canFormWord(word: string, letters: string[]): boolean {
    const wordCounts = countLetters(word);
    const letterCounts = countLetters(letters.join(''));

    for (const letter in wordCounts) {
      if (wordCounts[letter] > (letterCounts[letter] || 0)) {
        return false;
      }
    }
    return true;
  }

  for (const entry of filteredDictionary) {
    if (canFormWord(entry, puzzleAsArray)) {
      result.push(entry);
    }
  }

  return result
 }

 /** Create Puzzle
  * @ returns JSON object with the puzzle word, the anagram of the puzzle word and a list of possible answers
  */

 /** Working On **/

 export async function createPuzzleWord(): Promise<{ puzzleWord: string, anagram: string | null, answers: string[] }> {
   const files = getFiles("./src/data", "json");
   const dictionary = createDictionary(await files);
   const words = filterWords(await dictionary, 9);
   const pickedWord = picker(words);
   const puzzleWord = createPuzzle(pickedWord);
   if (puzzleWord === null) {
     throw new Error("Puzzle word is null");
   }
   const answers = listAnswers(puzzleWord, await dictionary);
   return {puzzleWord, anagram: pickedWord, answers};
 }
