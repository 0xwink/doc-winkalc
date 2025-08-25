# Syntax

```CLI
> [:ALG] :OP {:OPERANT1} {:OPERANT2}
```

::: tip Remark
`>` appears automatically at the start of each round of dialogue. Don't type it manually. 

Brackets (`[]` and `{}`) are necessary in order to make the parser work properly. Because we allow whitespaces present inside a formula of `:OPERANT`, the parser cannot tell where to truncate between arguments without brackets' help. 

`:ALG` and `:OP` are not case-sensitive. As to `:OPERANTS`, keep `x` in polynomial and `i` in complex numbers in lowercase, otherwise the parser may throw an error.
:::

::: details Examples
Here we omit the outputs. 
I advise you have a look at the examples section, where host much more instances with 
output attached.
```CLI
> [Z] Add {1} {2}
> [Q] Div {4/7} {6/13}
> [QPol] Divmod {9x^2+12x+1} {x+3}
> [FPol(7)] Bezout {6x^4 + x^3 + 2} {x^5 + 5x^13 + 4}
> [Zi] Mul {18 + 3i} {7i + 16}
```
:::

# `:OP`
`:OP` means operations. In some sense, it's the main component of a command. Following are all supported arguments:

```
Add, Sub, Mul, Div, Divmod, Bezout
```

`Add`, `Sub`, `Mul` mean addition (+), subtraction (-), multiplication (*) respectively. They are available for any `:ALG`. 

`Div` only makes sense if `:ALG` is a field. Similarly, `Divmod` and `Bezout` are valid only if `:ALG` is a ring. 


# `:ALG`
Currently, following algebraic structures are supported, divided into two categories, rings and fields. 
See the respective page for a detailed description on how commands take effect mathematically in each case. 

Fields:
``` Z, Q, F(p)```

Here, `Z` stands for integers. `Q` stands for rationals. `F(p)` is the finite field of `p` elements, in 
which `p` must be specified as a positive prime number. `F(13)`, `F(19)` are accepted, while `F(10)`, `F(0)`, `F(-7)`, and `F()` are not.
