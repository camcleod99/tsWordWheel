// Load the readline module from Node.js
import * as fs from 'fs';
import * as util from 'util';
const readDir = util.promisify(fs.readdir);

 export async function getFiles(dirPath: string, fileType: string): Promise<string[]>{
  let listing : string[] = [];
  try{
    listing = await readDir(dirPath);
  } catch (error) {
    console.error(`Er 11: Problem reading directory: ${error}`);
    return [];
  }
  return listing.filter(file => file.endsWith(`.${fileType}`));
}

export async function createDictionary(files: string[] | null): Promise<string[] | null> {
  if (files != null) {
    let dictionary : string[] = [];
    let wordData
    for (const file of files){
      try {
        wordData = await import(`../../data/${file}`)
        dictionary = dictionary.concat(wordData.words);
      } catch (error) {
        console.error(error);
      }
    }
    return dictionary;
  }
  return null;
}

export function filterDictionary(dictionary: string[] | null, length: number) : string[] | null {
  if (dictionary != null) {
    return dictionary?.filter(word => word.length === length);
  }
  return null;
}

export function readDirectory(dirPath: string, fileType: string) : Promise<string[]>{
  return getFiles(dirPath, fileType);
}

export function filterWords(directory: string[] | null, length: number) : string[] | null {
   if (directory === null) {
     return null;
   } else {
     return directory?.filter(word => word.length === length);
   }
}

export function picker(words: string[] | null) : string | null {
  if (words != null){
    return words[Math.floor(Math.random() * words.length)];
  }
  else {
    return null;
  }
}

export function createPuzzle(word: string | null) : string | null {
  let temp : string[] = [];
  let wordArray : string[] = [];

  if (word !== null) {
    temp = word.split('');
    let random : number = 0;

    for (let i: number = 0; i < word.length; i++) {
      random = Math.floor(Math.random() * temp.length);
      wordArray[i] = temp[random];
      temp.splice(random, 1);
    }
    return wordArray.join('');
  }

  return null
}

// Uses the recursive function from maker/services.ts to make the whole list of anagrams.
// We can also force "word-fullness", i.e.: It's a word if it has at least one vowel
// by not passing in words into the final result if it fails the "Is a word" test

// We're using the word and mix count to see how many times the recursive function is called and
// how many words are returned.
export function mixer(word: string | null) : string[] | null {
  // Catch word being null, call the whole thing off and return null.
  if (word === null){
    return null;
  }

  let result : string[] = [];
  const targetLetter : string = word[4];

  function checkIsWord(word : string) : boolean {
    const vowels : string = "aeiou";
    for (let i = 0 ; i < word.length ; i++) {
      for (const vowel of vowels) {
        if (word[i] === vowel) {
          return true;
        }
      }
    }
    return false;
  }

  function permute(currentWord : string, remainingLetters : string) {
    if (currentWord.length >= 4 && currentWord.includes(targetLetter) && checkIsWord(currentWord)) {
      result.push(currentWord);
    }

    if (remainingLetters.length === 0) {
      return;
    }

    for (let i = 0; i < remainingLetters.length; i++) {
      const nextLetter = remainingLetters[i];
      const newWord = currentWord + nextLetter;
      const newRemaining = remainingLetters.slice(0, i) + remainingLetters.slice(i + 1);
      permute(newWord, newRemaining);
    }
  }

  permute('', word);
  return [...new Set(result)];
}