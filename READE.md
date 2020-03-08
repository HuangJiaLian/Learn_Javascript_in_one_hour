# Learn Javascript in one hour
This article is the walk through records of the [YouTube video](https://www.youtube.com/watch?v=W6NZfCO5SIk).

[[toc]]

## The old days went away.
Javascript can be used to develop mobile apps, not just in web browser.
Javascript can also be warped by C++, like NODE.

## Setting up the develop environment.
- Editor: VScode
- Node.js

## Let's begin

Create file called `index.html`, type `!` and the use `Tab` you will get
```html 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

Then install `Live Server` extension.

And then right-click `index.html` and choose Open in the live server.

In the `body` tag, type `h1` then `Tab`, and type `Hello World`. You
will notice the changes in the browser. But we need to write javascript code, so we have two sections to add our `script` tag.

- `head`
- `body`

But the second is much better, because:
1. The browser passes this file from top to bottom. Bad user experience.
2. The script often needs to interact with all the other elements.

There are also some exceptions. Some third-party code needs to put in 
the head section.

Add 
```html
    <script>
        // Comment something on the console
        console.log('Hello World');
    </script>
```
in to the end of body tag. Then in the browser, use shortcut `cmd +alt+i` to open console in the browser.

### Separation of Concerns
- html for content 
- javascipt  for behavior

create a new file called `index.js`. and cut all the js code in `script` tag into `index.js`. 

Then  add `src="index.js"` in the `html` `script`  tag. Like the following:

```html
<script src="index.js"></script>
```
To tell the browser where to find the javascript file.

::: tip
You can also use integrated cmd run `node index.js` in the command line to see the result. 
:::

### Variables 
Store data. Like labeled box. 
```javascript
let name = 'Jack'; 
console.log(name);

// Cannot be a reserver keyword like: if, let 
// Should be meaningful
// Cannot start with a number 
// Cannot contain a space or hyphen(-)
// Are case-sensitive

let firstName = 'Jack';
let lastName='Huang';
```

### Constant 
```javascript
///////////////
// Constant
///////////////
const interestRate = 0.3;
interestRate = 1; 
console.log(interestRate);
```

### Primitive Types
Two types:
- Primitive/Value Types
    - String
    - Number 
    - Boolean
    - undefined
    - null 

- Reference Types
    - Object 
    - Array 
    - Function

::: tip
`undefined` is a type and also a value.
:::

### Dynamic Typing 
Language can be divided into:
- Static(Statically-typed)
- Dynamic(Dynamically-typed)

In the browser console: 
```javascript
> typeof name
< "string"
> name = 1;
> typeof name
< "number"
```
::: tip 
You can use `contrl + l` to clear your console.
:::

::: tip 
There is no difference between the type of `27.1` of `27`. They are
all `number`. 
:::

### Objects
Like a person.
``` Javascript
let person = {
    name: 'Jack',
    age: 27
};

///////////////
Dot Notation
/////////////////

person.name = 'Bob'; 

// Bracket Notation
// person['name'] = 'Mary';
let selection = 'name';
person[selection] = 'Mary';

console.log(person)
``` 

### Arrays 
``` Javascript
let selectedColor = ['red','blue'];
selectedColor[2] = 1
console.log(selectedColor);
console.log(selectedColor[0]);
console.log(typeof selectedColor)
console.log(selectedColor.length)
```
### Functions
``` Javascript
// Tip: name is parameter && 'Jack' is an argument.
function greet(name, lastName){
    console.log('Hello ' + name + ' ' + lastName);
}

greet('Jack', 'Huang');
greet('Ben');
```

### Types of Functions
``` Javascript
///////////////////////
// Types of Functions
///////////////////////
// Performing a task
function greet(name, lastName){
    console.log('Hello ' + name + ' ' + lastName);
}

// Calculating a value
function square(number){
    return number * number; 
}
// Two function call
console.log(square(2))
```
