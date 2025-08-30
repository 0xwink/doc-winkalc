# Examples

## Addition, Subtraction, Multiplication

``` 
> [Z] sub {5} {7}
Result: -2

> [Q] add {17/39} {-21/53}
Result: 82/2067

> [F(7)] mul {5} {6}
Result: 5 * 6 = 2 mod 7.

> [Zi] mul {5+ 3i} {6i - 1}
Result: -23+27i
```

## Division and Euclidean Division

```
> [Q] div {774/569} {-88/7}
Result: -2709/25036

> [F(1453)] div {1204} {476}
Result: 1204 / 476 = 88 mod 1453.

> [QPol] divmod {9x^4 - 11x+ (31/29)} {3x^2 - 71}
Result: F / G = Q ... R, where
F = 9x^4 - 11x + (31/29),
G = 3x^2 - 71,
Q = 3x^2 + 71,
R = - 11x + (146220/29).
```

## Bézout's identity

As you can see, the complexity of `[QPol] bezout` escalates quickly. It's already a nightmare to compute it by hand when both operands are of degree four. As for degrees higher than six,
even a modern CPU can be helpless. 

```
> [Z] bezout {123801} {44997}
Result: U * F + V * G = H, where
U = -2658,
F = 123801,
V = 7313,
G = 44997,
[GCD] H = 3.

> [QPol] bezout {7x^4 + x^2 - 1} {11 x^4 - 3x + 8x2 + 2}
Result: U * F + V * G = H, where
U = (175527/153746)x^3 - (17325/153746)x^2 + (11028/76873)x - (50063/76873),
F = 7x^4 + x^2 - 1,
V = - (111699/153746)x^3 + (11025/153746)x^2 + (51243/153746)x + (13405/76873),
G = 11x^4 + 8x^2 - 3x + 2,
[GCD] H = 1.

> [FPol(7)] bezout {x^11 + 5x^9 + 2x^3 + 6} {x^11 - x^8 + 4x^7 + x + 3}
Result: U * F + V * G = H mod 7, where
U = x^10 + x^9 + 5x^6 + x^4 + 6x^3 + 4x^2 + 2,
F = x^11 + 5x^9 + 2x^3 + 6,
V = 6x^10 + 6x^9 + 2x^8 + x^7 + 5x^6 + 6x^5 + 2x^4 + 2x^3 + 3x^2 + 2x + 1,
G = x^11 + 6x^8 + 4x^7 + x + 3,
[GCD] H = 1.

> [Zi] bezout {21 - 337i} {628 + 73i}
Result: U * F + V * G = H, where
U = 21-42i,
F = 21-337i,
V = 23+10i,
G = 628+73i,
[GCD] H = 1.
```