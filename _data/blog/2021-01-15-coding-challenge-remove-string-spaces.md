---
template: BlogPost
path: /removing-string-spaces
date: 2021-01-01T18:08:01.416Z
title: "Coding Challenge: Remove String Spaces"
---
Starting off the new year solving code challenges on [Codewars](https://codewars.com). Follow along!

## Instructions

Remove the spaces from the string, then return the resultant string.

## Solution

```javascript
const noSpace = x => x.replace(/\s+/g, '')
```

## Explanation

This function removes spaces from `x` and replaces them with an empty string. Using regex expressions, `\s+` means "one or more spaces", and the `/g ` flag means "replace all occurrences". 

For example, if we test our code:

```javascript
var str = '  A B  C   D EF ';
const noSpace = x => x.replace(/\s+/g, '') 
noSpace(str) //returns 'ABCDE'
```

[Kata Link](https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript) - 8kyu