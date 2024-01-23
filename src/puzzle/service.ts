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
    return ["-1"];
  }
  return listing.filter(file => file.endsWith(`.${fileType}`));
}

export async function createDictionary(files: string[]): Promise<string[]> {
  let dictionary : string[] = [];
  let wordData
  for (const file of files) {
    try {
      wordData = await import(`../../data/${file}`)
      dictionary = dictionary.concat(wordData.words);
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

export function picker(words: string[]) : string {
  return words[Math.floor(Math.random() * words.length)];
}

export function createPuzzle(word: string) : string {
  let temp : string[] = [];
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
export function mixer(word: string ) : string[]  {

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


