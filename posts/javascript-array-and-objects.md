---
title: 'The dangers of using arrays and objects in Javascript'
tags: ["javascript", "nodejs"]
published: true
date: '2020-01-06'
---

<img width="560px" height="315px" src="../src/images/itsOkItsFine.png"/>

Array and objects are awesome ways to store your data. However, sometimes we tend to forget the dangers of saving the data to new arrays/objects. Why do we need to know this ? If you're handling large arrays and modifying them after storing the data in a new array, then you could unintentionally change the new array. This unintentional situation will lead to hours/days to debug 💩💩💩

For example:

```javascript
const current = ['Roberto','Ted','Michael'];
const temp = current;
current[0] = 'Bob';
console.log(temp);
```

Can you guess what the output will be ? The answer is:  💩

```javascript
['Bob', 'Ted', 'Michael']
```

Why did the value in `temp` change when the code clearly shows I only made a change to `current` ?

The reason is that when you store `current` into `temp`, you're not actually storing the values... you're actually storing the pointer that is pointing to the section in memory where the values reside.

So, how can we avoid situations like this ?

This easiest way is to use the spread operator `...` This operator "expands the array into elements" 

[More Details on Spread syntax (...)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

Lets use the same example with the spread operator:

```javascript
const current = ['Roberto','Ted','Michael'];
const temp = [...current];
current[0] = 'Bob';
console.log(temp);
```

Can you guess what the output will be ? the answer is: 🥳

```javascript
['Roberto','Ted','Michael']
```

What if we want to just use the same array ?

We can use functional programming for that 😎

```javascript
const current = ['Roberto','Ted','Michael'];
current.map(name => name === 'Roberto' ? 'Bob' : name);
console.log(current);
//output: ['Bob','Ted','Michael']; 
```

These test cases can also be applied to objects:

```javascript
const current2 = {1: 'Roberto',2: 'Ted',3: 'Michael'};
const temp2 = {...current};
current[1] = 'Bob';
console.log(temp);
```

Now you know 😍

Also, if you are using React with Redux, this information will prove beneficial since you will be handling data using global state. I will provide more information on that on a different blog 😉

