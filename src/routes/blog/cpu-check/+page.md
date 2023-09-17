---
title: CPU ✔
date: "2023-09-17"
description: work completed on gb.nim's CPU!
---

[ec38704](https://github.com/mooncell07/gb.nim/commit/ec387041ea793c4526c808250f94e96be60e5923) 
marks the completion of gb.nim's CPU. Its currently passing the following gb-test-roms tests: 
- All 12 individual cpu_instr tests
- instr_timing
- mem_timing

*I haven't implemented the halt bug yet because apparently it's test doesn't write to Serial Link for some reason. We will get back to it when PPU's done.*

I guess this level of accuracy is enough to safely move ahead in the territory of the Pixel Processing Unit (PPU). 

# Timer and Interrupt
Honestly, it was pretty difficult getting the right picture of the working of these two components right in my head.
There were many edge cases as well that made me want to bang my head against a wall but thanks
to people over at GitHub, i haven't lost my sanity yet; their implementation helped me
alot while writing these componenets and the emulator as a whole as well. 

# Interrupt
Interrupt handling in Gameboy works with 2 memory mapped registers, IF (Interrupt Flag) and IE (Interrupt Enable), in which the former is updated to send an interrupt request to the CPU and the latter is updated to tell the CPU if the corresponding interrupt in IF should be serviced right then and there or given a pending status. There's also an Interrupt master flag which enables and disables interrupts console-wide.

# Timer
The timer consists of 4 memory mapped registers, DIV (Divider), TIMA (Timer Counter), TMA (Timer Modulus) and TAC (Timer Control).  *in my implementation*, (as I have an unsigned 16 Bit Divider) the Divider is incremented 4 times per M-cycle. It is not configurable and every write operation to it sets it to 0. The TIMA register is an unsigned 8 bit register which gets incremented with the frequency set by the TAC register. TIMA gets incremented only if the second bit of TAC i.e. The Timer Enable flag is set AND if there's a falling edge on the "AND result" of the inverse of older DIV and the current DIV. TMA is just a register that stores the value TIMA should contain after overflowing 0xFF (hence the name: Timer Modulus).

My explanation is probably full of errors but yeah that's somewhat how both the components work or at 
least work in my head lmao.

# sike
Didn't use meta programming anywhere in the final product lol, last 2 blogs are misinformation af