# Introduction

::: warning Warning: Educational project, work-in-progress.
Do not use this CLI in production or serious research. It’s still at quite an early stage, and thus is subject to hidden bugs and changes of functionalities. Error reporting is primitive. 

There are numerous fantastic open-source libraries and CLIs with capability far beyond mine, such as [Sage](https://www.sagemath.org/).
:::

The CLI is an calculator for arithmetic operations on some common algebraic objects. Its primary aim is to compute Bézout’s identity for integers, Gaussian integers, polynomials over rationals, and polynomials over a prime finite field. Minor features like adding and multiplying are added along the way. I hope this tiny program can take you through a very brief journey in the world of elementary number theory. 

## What is Bézout’s Identity?
Euclid’s algorithm, in its plainest form, is about finding the greatest common divisor (GCD) of two integers. In fact, any Euclidean domain (ED) would suffice. That is, an integral domain that you can do Euclidean division within, yielding a quotient and a remainder. 

The most important instances of ED are integers and polynomial rings of a field. According to Bézout’s identity, for any two elements $(F, G)$ from an ED, there is a triple $(U, V, H)$ such that $U \cdot F + V \cdot G = H$, where $H$ is the GCD of $F$ and $G$. Such a triple is produced explicitly by Euclid’s algorithm. 

::: tip Do You Know?
In Chinese, Euclid’s algorithm is usually called “辗转相除法”，which literally means “the algorithm of dividing one by the other back and forth.”
:::

Fields thus come into play. In this tiny CLI, our concern will fall upon a handful of predominantly common fields, including rational numbers (of course) and finite fields of prime modulus. The latter is simply the ring $\mathbb{Z}/p\mathbb{Z}$, whose modular arithmetic is extensively studied by Gauss in *Disquisitiones Arithmeticae* over 200 years ago.

## Euclidean Algorithm by Hand is Maddening

Consider two questions, both rooted in practice.

::: info Questions
1. Determine whether $45499231$ and $793338813$ are coprime or not.

2. Decompose the fraction $H = 1/[(x+2)^2 (x+3)^3]$ into the 
form $F/(x+2)^2 + G/(x+3)^3$.
:::

::: tip Solution to Question 1
There are two approaches. One is factorisation. If I can write them as a product of primes, the rest of work is simply to compare powers. Bad news is that the complexity of factorisation spirals rapidly. The other is to get their GCD and see if it’s 1.
:::

::: tip Solution to Question 2
This is a microcosm of the famous problem named partial fraction decomposition. If I want to evaluate the 
integral of $H$, it is vastly helpful to simplify its denominator. 

Obviously $(x+2)^2$ and $(x+3)^3$ are coprime. By Bézout’s identity, if we manage to find $(U, V)$ such that $1 = U (x+2)^2 + V (x+3)^3$ and, hence, a substitute for the numerator, we are done.

This is the algebraic style of doing things. An analytic method involving residues is available and perhaps more feasible by hand. Nevertheless, limitations are conspicuous: it works just for complex numbers, unable to cope with the finite field case. 

You may even use the method of undetermined variants, though that means solving a huge matrix in the end. See [Wikipedia](https://en.wikipedia.org/wiki/Partial_fraction_decomposition).
:::

In theory, everything goes smoothly. But to be honest, doing Euclid’s algorithm by hand is inefficient. And 
boring. You need a computer.