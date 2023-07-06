---
title: Azaka Rewrite
date: "2023-07-6"
description: 2 years of my dear project, Azaka.
---

*(Ahhh finally a new blog here...)*

# 0.4.2

Last week, I worked on [Azaka](https://github.com/mooncell07/Azaka), a project of mine that "wraps" the [API](https://en.wikipedia.org/wiki/API) of the Visual Novel database. Just to clarify, "wrapping" is a term used to simplify communication between the user and the database through middleware.

It took me this long because I essentially rewrote my entire codebase from the ground up, including the documentation. To be honest, it wasn't a normal rewrite where I could copy-paste some good code from the latest stable version. It was more of a migration-type rewrite since I was transitioning the codebase from a decade-old API that relied on a basic TCP connection to the new REST API. This meant that the entire codebase needed to be rewritten.

I should also mention that the new API itself had some really odd conventions, particularly regarding filtering. Overall, I strongly believe that GraphQL would have been a better option. Or maybe not, I don't know what led the developer(s) to choose this route honestly.

Anyways, the migration took longer than expected, and I still have some documentation and list management left to do. The rewrite itself isn't all that great either, but at this point, I just want to move on. I don't know why I still have so much love for this project, considering I've worked on it for two whole years and literally nobody uses it.

This project has seen me go through a lot. I still remember working on it late at night, even on New Year's Eve. It's also the project that gave me my first [CPython contribution](https://github.com/python/cpython/pull/30958) (!!), so you can probably tell how invested I was in it.

Also i love how even after all these years Azaka still has not received a single major version release,
wonder will we ever leave the minor hell xS


# Near Future

Moving on, the next project I will be working on is most probably the tl reader i was talking about in the previous blog but let's see.
