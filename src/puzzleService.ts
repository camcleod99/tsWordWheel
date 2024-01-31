// Load the readline module from Node.js
import fs from "fs";
import util from "util";

//const fs = require('fs');
//const util = require('util');
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

export function filterWords(directory: string[], length: number) : string[] {
  return directory?.filter(word => word.length === length);
}

export function picker(words: string[]) : string | null {
   if (words.length === 0) {
    return null;
   } else {
     return words[Math.floor(Math.random() * words.length)];
   }
}

export function createPuzzle(word: string) : string {
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

// Uses the recursive function from maker/services.ts to make the whole list of anagrams.
// We can also force "word-fullness", i.e.: It's a word if it has at least one vowel
// by not passing in words into the final result if it fails the "Is a word" test

// We're using the word and mix count to see how many times the recursive function is called and
// how many words are returned.
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