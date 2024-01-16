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

// We're using the word and mix count to see how many times the recursive function is called and
// how many words are returned.
export function mixer(word: string) : string[] {
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