# Parse

I'm not a expert in formal languages and do not intend to specify every syntax and
how it's implimented.
Instead, I _advise_ you follow these pattern to format inputs because these are
stably supported. If an input breaks one of them, for example missing paratheses,
it would perhaps still get recognised, but the correctness is not guaranteed.

An universal fact is that whitespaces don't affect parsing, since all ascii whitespeces
are dropped during pre-processing. e.g. `5x + 6` = `5x+6`, `5 / 7` = `5/7`. 

## Integers `Z`

Just type it straightforwardly. Examples: `0`, `1`, `35`, `-23`.

## Gauss Integers `Zi`

Use lowercase `i` for the imaginary unit. No need for parentheses. The order of real and imaginary part makes no difference. It's backward compatible with integer parsing: `21` and `-5` can be read as Gaussian Integers.

Examples: `0`, `4+5i`, `-5+i`, `7i-6`.

## Rational numbers `Q`

No need for parentheses. A negative sign, if necessary, should be placed before the numerator.
A positive sign is not required. Backward compatible with integers.

Examples: `5/6`, `-8/9`, `4546/7791`, `0`, `-7`.

## Finite Fields `F(p)`
Type an integer between `0` and `p-1`. If the integer does not fall in `[0, p-1]`, 
it will be converted into some integer in it, congruent to the input modulo `p`.

Examples (`p = 7`): `0`, `1`, `5`. In this setting `-2` is equivalent to `5`,
`7` equivalent to `0`.

## Polynomial Over a Finite Field `FPol(p)`

The order of terms do not matter, and terms at the same degree can appear more than once. 

Use `^` to specify degree. e.g. `5x^6`, `3x^2 + 1`.

If the polynomial is a constant, just type it as an element in `F(p)`, e.g. `5`, `13`, `0`.

If the polynomial has a term with coefficient `1`, you may omit the coeff. e.g. `x+1`.

::: tip Tip
Actually, `^` is optional, just as spaces. 
The parser see no difference in `6x3+7` and `6x^3 + 7`.
You can use this shortcut to type polynomials faster. Skipping the `^` part sacrifices human readability, which is why outputs always keep their `^` (and sometimes whitespace).
:::

## Polynomial Over Rational Numbers `QPol`

Use lowercase `x` for the indetermediate. If a term's coefficient is `1`, omit it, as in `x`, `x^2 + 1`.

Let's say a string is a `Pr` (positive rational), if it contains **no sign**, and is either two unsigned ints separated by a slash and wrapped in parentheses (e.g. `(7/6)`, `(3/5)`), or merely a unsigned int (e.g. `4`, `7`).

Here is a somewhat abstract format pattern for `QPol`. A `Sgn` means either `+` or `-`. If the first `Sgn` is `+`, you don't have to type it.
```
<Sgn> <Pr> <Sgn> <Pr> <Sgn> ... <Sgn> <Pr>
```

Examples:
```
- (5/13)x^6 + x^5 + 7x + (6/13)

13 x^3 - (5/9) x^3 - (10/11)
```