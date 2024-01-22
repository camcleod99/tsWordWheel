import * as puzzleServices from '../src/puzzle/service';
import {createDictionary} from "../src/puzzle/service";

// Local Variables
let files: string[] | null;
let words: string[] | null;
let dictionary: string[] | null;
let pickedWord: string | null;
let wordAnagrams: string[] | null;

beforeAll(async () => {
  files = await puzzleServices.readDirectory('./data/', 'json');
  dictionary = await puzzleServices.createDictionary(files);
  pickedWord = puzzleServices.picker(dictionary);
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