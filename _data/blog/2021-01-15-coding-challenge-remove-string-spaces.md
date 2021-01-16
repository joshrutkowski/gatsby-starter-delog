---
template: BlogPost
path: /removing-string-spaces
date: 2021-01-01T18:08:01.416Z
title: "Coding Challenge: Remove String Spaces"
thumbnail: https://images.unsplash.com/photo-1505676745438-db5586a18848?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80
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