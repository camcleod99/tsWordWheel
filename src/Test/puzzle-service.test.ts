import * as puzzleServices from '../puzzle/service';
let words: string[] | null;
let pickedWord: string;
let wordAnagrams: string[];

beforeAll(async () => {
  words = await puzzleServices.maker('words');
  if (words === null) {
    throw new Error("words is null so that's not loading, something went wrong.");
  }
  pickedWord = puzzleServices.picker(words);
  // wordAnagrams = puzzleServices.picker(words);
})

test("Returns the word list", () => {
  expect(words).toBeDefined();
});

test("Returns a word picked at random", () => {
  expect(pickedWord).toBeDefined();
});

//TODO: This.
test("Returns the anagrams of the picked word", () => {
   expect(puzzleServices.mixer(pickedWord)).toBeTruthy();
});