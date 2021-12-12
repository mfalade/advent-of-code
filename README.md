# Advent of Code Challenge

### Solved with Typescript

A collection of my solutions to the [Advent of Code challenge](https://adventofcode.com/).

## Usage
- To create a new challenge directory, run
```
yarn mkdir <challengeDirecoryName>

# e.g yarn mkdir squidGame
```
This would create a directory named: `2021/squidGame`. The format is `<currentYear>/<dirName>`.


## Running your solutions

```
// To test both challenges
yarn test 2021/squidGame

// Optionally, you can run individual challenges like so
yarn test 2021/squidGame/challenge1.ts
yarn test 2021/squidGame/challenge2.ts
```

## Lib
I have a few utilities to help process the input data to a ready-to-consume format.
This currently reads all the input value in-memory. A follup up improvement would stream the values from the input file as opposed to loading them in-memory.

+ `inputParser.ts`: Reads the input file, formats the input, trims the input and removes empty characters.
+ `createChallengeDirectory.ts`: Bootstraps a directory for a new challenge. The created directory is pre-filled with an `index.ts`, `challenge1.ts`, `challenge2.ts`, `input.txt` and the necessary imports between all these are wired together.