import * as puzzleServices from '../src/puzzle/service';

// Local Variables
let files: string[] | null;
let words: string[] | null;
let dictionary: string[] | null;
let pickedWord: string | null;
let wordAnagrams: string[] | null;

// Test Variables
const targetDirectory : string = './data/';
const targetType : string = 'json';

beforeAll(async () => {
  // files = await puzzleServices.readDirectory('./data/', 'json');
  // pickedWord = puzzleServices.picker(dictionary);
  // wordAnagrams = puzzleServices.mixer(pickedWord);
})

test("Returns the file list", async () => {
  expect (puzzleServices.getFiles(targetDirectory,targetType)).toBeDefined();
});

test("Creates the dictionary from the file list", async () => {
  const files = await puzzleServices.getFiles(targetDirectory,targetType);
  expect (puzzleServices.createDictionary(files)).toBeDefined();
});

test("Filters the directory by word length", async () => {
  const files = await puzzleServices.getFiles(targetDirectory,targetType);
  const dictionary = await puzzleServices.createDictionary(files);
  expect (puzzleServices.filterWords(dictionary, 9)?.length).toEqual(53402);
});