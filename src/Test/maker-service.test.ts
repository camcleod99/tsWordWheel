import * as makerServices from '../maker/service';

// TODO: Tests for "WordPicker" function
test('Returns Word at random from dataset and randomizes it', () => {
  expect(makerServices.makeKeyWord()).toBeDefined();
  expect(makerServices.makeKeyWord()).toHaveLength(9);
});

// TODO: Test for "makeAnagram" function
test('Returns an non empty array of anagrams', () => {
  const keyword = makerServices.makeKeyWord();
  const resultAnagrams = makerServices.makeAnagrams(keyword);
  expect(resultAnagrams.length).toBeGreaterThan(0)
});
