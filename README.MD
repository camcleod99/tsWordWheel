[![Jest Testing](https://github.com/camcleod99/CamWordWheel/actions/workflows/ci.yml/badge.svg)](https://github.com/camcleod99/CamWordWheel/actions/workflows/ci.yml)

# CamCodeWheel 
# Milestone 2 : 24-01-25

## Specification

This app is designed to use a list of nine-letter words to create a wheel of letters to be used in a puzzle.
The puzzle is to find as many words as possible from the letters on the wheel using a middle letter.

The service chooses a random nine-letter word from a list of words, randomizes the word and then returns the middle 
letter as the "target" letter.

As of Milestone 2, this service is purely running on CLI.

## Prerequisites

- NPM (Developed using NPM 10.2.4)

## Installation

```
CLI
- $ git clone camcleod99/CamWordWheel
- $ cd CamWordWheel
- $ npm init
```

## Running

As of Milestone 2, the app is still in the alpha phase, therefore, the program runes entirely via the Jest Test Suite
Therefore, at root, run the following command;

```
CLI
- [ROOT]
-- $npm test
```

## Things of Note

- Word List is used with thanks from [dwrl/english-words](https://github.com/dwyl/english-words)