# Guess the keys and press them

## A fun little game made with JavaScript, SCSS/CSS3, and HTML

There is a pattern to the keys you have to press. Together they make a name or
word. Can you guess what it is? Type your answer in the input provided and hit
return. If you don't guess correctly, you will receive an error message. If you
do, a secret phrase will be revealed!

For a more detailed explanation of the game, please read my post on my
**Developer Blog** entitled
[Guess the keys](https://www.mariadcampbell.com/blog/guess-the-keys/). Don't
worry, there is a link to bring you back to the live game on **Github
gh-pages**!

## Tests and coverage

The game's modules are covered by a `Vitest` test suite, with coverage tracked
through `Istanbul`. As of this writing, coverage sits at 100% across statements,
branches, functions, and lines.

To run the tests once:

```shell
npm run test:run
```

To run the tests with a coverage report:

```shell
npm run coverage
```

Enjoy the game and let me know what you think!
