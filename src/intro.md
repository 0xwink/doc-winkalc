# What is this calculator for?

The calculator is part of my personal program for educational purpose, in which I try to simulate a production workflow touching on both front-end and back-end development. This project includes a Rust CLI for some basic algorithm in number theory, a document site based upon the markdown-to-html framework Vitepress, as well as exercising elementary Git, shell script and Vercel for the sake of deployment. Although the code is no big deal, if not juvenile, I do hope you can learn something if you are a newcomer to these tech-stacks.

::: danger
Do not use this CLI in production or serious research. It's still at quite an early stage, and thus is subject to hidden bugs and changes of functionalities. The error reporting is primitive too.
:::

The CLI is an calculator for arithmetic operations on some common algebraic objects. During my college Algebra courses I was assigned homework involving recursive Euclidean division, only to find it boring and prone to error. The algorithm is ingeniously elegant and efficient, but does not suit human brains. As my interest and career outlook shift to computers, I chose my first serious program to be a light-weight arithmetic calculator.

Euclidean division, in its plainest form, is about finding the GCD (greatest common divisor) of two integers. In fact, any Euclidean domain (ED) would suffice. That is, an integral domain that you can do Euclidean division within, yielding a quotient and a remainder. The most important cases of such rings are integers and polynomial rings of a field. What's more, the algorithm actually tells more: according to Bézout's identity, for any two elements `(F, G)` from an ED, one knows a pair `(U, V)` such that `U * F + V * G = GCD`, thanks to Euclidean algorithm.  

::: Do you know?
In Chinese, Euclid's algorithm is usually called "辗转相除法"，which literally means "the method of dividing one by the other back and forth."
:::

Fields thus come into play. In this tiny CLI, I focus on implementing several predominantly common fields, including rationals and finite fields of prime modulus. The latter is simply the ring `Z/pZ`, whose modular arithmetic is extensively studied by Gauss in *Disquisitiones Arithmeticae* over 200 years ago.