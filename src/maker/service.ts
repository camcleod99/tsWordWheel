import * as data from "../../data/words.json";

export function makeKeyWord(): string {
  const words: string[] = data.words;
  const chosenWord = words[Math.floor(Math.random() * words.length)];
  let keyWord: string = "";
  //Randomize the word
  for (let i = 0; i < chosenWord.length; i++) {
    const randomIndex = Math.floor(Math.random() * chosenWord.length);
    keyWord += chosenWord[randomIndex];
  }
  return keyWord;
}

export function makeAnagrams(keyWord : string) : string[] {
  const result : string[] = [];
  const targetLetter = keyWord[4];

  function checkIsWord(word : string) : boolean {
    // return true;
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

  permute('', keyWord);
  return result;
}