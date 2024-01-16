import * as puzzleServices from '../src/puzzle/service';
let words: string[] | null;
let pickedWord: string;
let wordAnagrams: string[];

beforeAll(async () => {
  words = await puzzleServices.maker('words');
  if (words === null) {
    throw new Error("words is null so that's not loading, something went wrong.");
  }
  pickedWord = puzzleServices.picker(words);
  wordAnagrams = puzzleServices.mixer(pickedWord);
})

test("Returns the word list", () => {
  expect(words).toBeDefined();
});

test("Returns a word picked at random", () => {
  expect(pickedWord).toBeDefined();
});

test("Returns the anagrams of the picked word", () => {
  console.log(pickedWord);
  console.log(wordAnagrams);
  expect(wordAnagrams).toBeDefined();
});