---
title: Work of Art
date: "2023-08-26"
description: Or rather, work of template
---

Apparently, using templates everywhere wasn't really a great idea after all. 
Especially in areas where data sources (aka cartridges) are not available at compile time.
Registers are a good example of it. 

To be specific, the problem is with constant expressions inside those templates which conditionally 
generate code at compile time; due to my instruction decoding implementation relying on runtime resources, 
constant expressions simply don't work.
Yes, I can still use templates without constant expressions but that's really inefficient because 
the entire if-elif-else ladder is generated anyway at compile time so it just doesnt make any sense to
keep using templates there

I still think macros have a place in the project, probably in writing cases for opcode decoding, 
I am thinking of doing it like so:
```
SLICEX0(...):
   SLICEZ0(slice=0):
        Handler
   SLICEZ1(...):
        Handler
```

Algorithmic decoding is such a tomfoolery