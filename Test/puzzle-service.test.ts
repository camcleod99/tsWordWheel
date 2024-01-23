import * as puzzleServices from '../src/puzzle/service';

// Test Variables
let targetDirectory : string = './data/';
let targetType : string = 'json';

let testLength : number = 9;
let testResult : number = 53402;

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

  expect (puzzleServices.filterWords(dictionary, testLength)?.length).toEqual(testResult);
});

test("Picks a random word from the words that are of length 9 for the puzzle word", async () => {
  const files= await puzzleServices.getFiles(targetDirectory, targetType)
  const dictionary= await puzzleServices.createDictionary(files)
  const words= puzzleServices.filterWords(dictionary, 9);

  // Pre-define the result variable and let a process variable take the value of the function
  let result : string;
  let process = puzzleServices.picker(words)

  // This will make the expect keyword can play nicely with the error handling
  if (process != null) {
    result = process;
  } else {
    result = "-1"
  }

  console.log(`Result Word: ${result}\nProcess Word: ${process}\nResult Length: ${result.length}`);

  // See ln 8 for the testLength variable value, 9 at last check.
  expect (result.length).toEqual(testLength);
});

test("Returns a anagram of the picked word to create the puzzle word", async () => {
  const files= await puzzleServices.getFiles(targetDirectory, targetType)
  const dictionary= await puzzleServices.createDictionary(files)
  const words= puzzleServices.filterWords(dictionary, 9);
  const pickedWord = puzzleServices.picker(words);

  let result = "";
  let process = puzzleServices.createPuzzle(pickedWord)

  const sortedPickedWord = pickedWord?.split('').sort().join('');
  const sortedProcess = process?.split('').sort().join('');

  if (process != null) {
    for(let i = 0; i < result.length; i++) {
      if (process.includes(result[i])) {
      } else {
        result = "-1"
      }
    }
  }

  console.log(`Generated:\npicked: ${pickedWord} \nresult: ${process}`)
  console.log(`Sorted:\npicked: ${sortedPickedWord} \nresult: ${sortedProcess}`);

  expect (result).not.toEqual(pickedWord);
});

//TODO: DODO
test("Returns all the words that are correct", async () => {
  const dodo = false;
  expect (dodo).toEqual(true);
});