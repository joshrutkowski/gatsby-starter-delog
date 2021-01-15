---
template: BlogPost
path: /counting-sheep-challenge
date: 2021-01-02T18:57:18.459Z
title: Counting Sheep
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