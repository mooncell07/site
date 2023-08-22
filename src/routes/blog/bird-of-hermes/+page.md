---
title: The bird of Hermes is my name
date: "2023-08-22"
description: eating my wings to make me tame.
---
This week, I started working on "gb.nim", a project of mine on Gameboy emulation. It's more of a partial rewrite as i already have an implementation of the CPU running (it's passing all the tests too).I am planning to blog through the entire journey but knowing my laziness, i am not going to promise anything.

Why rewrite, you might wonder? The answer is simple: the current codebase has become unmanageable. Code redundancy is everywhere, and navigating through different opcode handlers is really painful. In my (now old) implementation, Addressing Modes are primarily used to disambiguate instruction parameter spec; an highly compatible approach for most cases, but apparently not for emulating whatever this thing "LR35902" is. This CPU's architecture simply lacks formal addressing modes, many opcodes require their own special modes for whatever reason. 
Predictably, this design choice has resulted in scalability problems, hence the rewrite.

Back to the code redundancy part, this time I am putting extra effort into dynamic code generation to reduce redundancy, especially in opcode handlers. Additionally, I am also planning to algorithmically decode instructions this time, which ofc comes with its own tradeoffs but i guess i will take the risk. Maintaining stable 60 FPS is the ultimate goal and machines today generally forgive low IQ code. 


Only if I could rewrite my life the way i rewrite every project I do. Bye