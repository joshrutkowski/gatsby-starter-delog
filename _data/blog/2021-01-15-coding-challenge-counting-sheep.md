---
template: BlogPost
path: /counting-sheep-challenge
date: 2021-01-02T19:05:21.526Z
title: "Coding Challenge: Counting Sheep"
thumbnail: https://images.unsplash.com/photo-1554755209-85e44182e019?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80
---
Another day - another challenge!

## Instructions

Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

```javascript
[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
```

## Solution

```javascript
function countSheeps(arrayOfSheep) {
  count = 0;
  
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] == true) {
      count += 1;
    }
  }
  return count;
}
```

## Explanation

With this function, we iterate over an array of sheep. If the element in the array is equal to `true`, then we increase the value of `count` by one. Finally, we return the count.\
\
[Kata Link](https://www.codewars.com/kata/54edbc7200b811e956000556) - 8 kyu