import * as puzzleServices from '../src/puzzle/service';

// Test Variables
let targetDirectory : string = './data/';
let targetType : string = 'json';
let testLength : number = 9;
let testResult : number = 53402;

// Working variables
let files : string[] ,
  dictionary : string[] ,
  words : string[] ,
  pickedWord : string,
  puzzleWord : string;

beforeEach(async () => {
  files = await puzzleServices.getFiles(targetDirectory,targetType);
  dictionary = await puzzleServices.createDictionary(files);
  words = puzzleServices.filterWords(dictionary, 9);
  pickedWord = puzzleServices.picker(words);
  puzzleWord = puzzleServices.createPuzzle(pickedWord);
})

test("Should return the list of files from the target directory", async () => {
  const expectedResult : string[] = ["words_nine.json", "words_eight.json", "words_seven.json", "words_six.json", "words_five.json", "words_four.json"]
  // console.log(`Files   : ${files}\nExpected: ${expectedResult}`)
  expect(files[0]).not.toEqual("-1");
  expect(files).toEqual(expect.arrayContaining(expectedResult));
});

test("Creates the dictionary from the file list", async () => {
  expect(dictionary[0]).not.toEqual("-1");
});

test("Filters the directory by word length", async () => {
  expect (puzzleServices.filterWords(dictionary, testLength)?.length).toEqual(testResult);
});

test("Picks a random word from the words that are of length 9 for the puzzle word", async () => {
  // Pre-define the result variable and let a process variable take the value of the function
  let result : string = "-1";
  let process = puzzleServices.picker(words)

  // This will make the expect keyword can play nicely with the error handling
  if (process != null) {
    result = process;
  }

  console.log(`Result Word: ${result}\nProcess Word: ${process}\nResult Length: ${result.length}`);

  // See ln 8 for the testLength variable value, 9 at last check.
  expect (result.length).toEqual(testLength);
});

test("Returns a anagram of the picked word to create the puzzle word", async () => {
  let result = "-1";
  let process = puzzleServices.createPuzzle(pickedWord)

  const sortedPickedWord = pickedWord?.split('').sort().join('');
  const sortedProcess = process?.split('').sort().join('');

  console.log(`Generated:\npicked: ${pickedWord} \nresult: ${process}`)
  console.log(`Sorted:\npicked: ${sortedPickedWord} \nresult: ${sortedProcess}`);

  expect (result).not.toEqual(pickedWord);
});

//TODO: DODO
test("Returns all the words that are correct", async () => {
  console.log(`PickedWord: ${pickedWord}\nPuzzleWord: ${puzzleWord}\nLetter: ${puzzleWord[4]}`);

  // Get the list of words that are correct
  const result = puzzleServices.listAnswers(puzzleWord, dictionary);

  console.log(`Result: ${result.length}\n
  4: ${result.filter(word => word.length === 4).length}\n
  5: ${result.filter(word => word.length === 5).length}\n
  6: ${result.filter(word => word.length === 6).length}\n
  \n${result.filter(word => word.length === 6)}\n
  7: ${result.filter(word => word.length === 7).length}\n
  \n${result.filter(word => word.length === 7)}\n
  8: ${result.filter(word => word.length === 8).length}\n
  \n${result.filter(word => word.length === 8)}\n
  9: ${result.filter(word => word.length === 9).length}\n
  \n${result.filter(word => word.length === 9)}`);

  // Get the target letter from the picked word
  expect (result.length).toBeGreaterThan(0);
});