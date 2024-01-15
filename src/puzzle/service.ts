async function loadWords(fileName: String) : Promise<string[] | null>{
  try {
    const wordData = await import(`../../data/${fileName}.json`)
    return wordData.words;
  }
  catch (error) {
    console.error(error);
    return null;
  }
}
export function maker(fileName: string) : Promise<string[] | null> {
  return loadWords(fileName);
}

export function picker(words: string[]) : string {
  return words[Math.floor(Math.random() * words.length)];
}

// Uses the recursive function from maker/services.ts to make the whole list of anagrams.
// We can also force "word-fullness", i.e.: It's a word if it has at least one vowel
// by not passing in words into the final result if it fails the "Is a word" test
export function mixer(word: string) : null{
  // Let's Report the number of anagrams we're making
  // let count = 0;
  // Let's also report the number of anagrams that are words
  // let wordCount = 0;

  // TODO: The Recursive Function

  // TODO: The Recursive Function Call

  // TODO: Return the result
  return null
}