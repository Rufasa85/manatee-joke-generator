# manatee-joke-generator

## simple, easy to use manatee jokes!

## example

``` javascript 
const manateeJokes = require("manatee-joke-generator");

const joke = manateeJokes.getRandomJoke();
console.log(joke);
```

## usage

`getRandomJoke()`: returns a single joke object.

```javascript
const manateeJokes = require("manatee-joke-generator");

manateeJokes.getRandomJoke()//=> {joke:"how do fish open their houses?", punchline:"manakeys!"}
```
