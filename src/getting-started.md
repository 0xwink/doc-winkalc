# Getting Started
We will quickly go through the setup and use our CLI to solve the previous problems.

## Installing winkalc
I assume you have had Rust and Git installed on your device. 

Open the terminal, navigate to your favorite working directory, and clone the source code:

``` sh
git clone https://github.com/0xwink/winkalc

cd winkalc
```

Afterwards, use Cargo to build the binary and run it:

::: code-group

``` sh [Bash/Zsh]
cargo build --release

cd target/release

chmod +x winkalc

./winkalc
```

``` sh [Powershell]
cargo build --release

cd target/release

./winkalc.exe
```
:::

::: tip Optional
Because the binary can be executed independently, you may now move the binary anywhere you see fit, for example a PATH directory like `~/.local/bin/`. By doing this you successfully install the CLI
as one of your user apps, so that you may run it through a single spell in Bash:
``` sh
winkalc
```
:::

## Resolving the Problem 1
Run winkalc and enter an instruction. (Don't copy the leading `>`!)
```
> [Z] bezout {45499231} {793338813}
```
You will see an output like this:
```
Result: U * F + V * G = H, where
U = -372586328,
F = 45499231,
V = 21368413,
G = 793338813,
[GCD] H = 1.
```

The GCD of the numbers is one. Thus they are coprime.

## Resolving the Problem 2
We don’t support automatic expansion of polynomials yet. So you need to first
mannually expand `(x+2)^2` and `(x+3)^3` using the binomial theorem.

```
> [QPol] bezout {x^2+4x+4} {x^3+9x^2+27x+27}
Result: U * F + V * G = H, where
U = 3x^2 + 20x + 34,
F = x^2 + 4x + 4,
V = - 3x - 5,
G = x^3 + 9x^2 + 27x + 27,
[GCD] H = 1.
```

We basically have `U * F + V * G = 1`. 
Dividing it by `F * G` yields `V / F + U / G = 1 / (F * G)`. 

In formulae, we obtain
$$ \frac{1}{(x+2)^2 (x+3)^3} = \frac{-3x-5}{(x+2)^2} +\frac{3x^2+20x+34}{(x+3)^3}. $$

If you like, we can even further decompose the fractions:
```
> [QPol] divmod {-3x-5} {x+2}
Result: F / G = Q ... R, where
F = - 3x - 5,
G = x + 2,
Q = - 3,
R = 1.

> [QPol] divmod {3x^2+20x+34} {x^2+6x+9}
Result: F / G = Q ... R, where
F = 3x^2 + 20x + 34,
G = x^2 + 6x + 9,
Q = 3,
R = 2x + 7.

> [QPol] divmod {2x+7} {x+3}
Result: F / G = Q ... R, where
F = 2x + 7,
G = x + 3,
Q = 2,
R = 1.
```

These calculations means 
$$ -3x-5 = -3(x+2) +1, $$
$$ 3x^2+20x+34 = 3(x+3)^2 + 2(x+3) + 1. $$

In conclusion, the ultimate partial fraction decomposition is
$$ \frac{1}{(x+2)^2 (x+3)^3} = \frac{-3}{x+2} + \frac{1}{(x+2)^2} + 
\frac{3}{x+3} + \frac{2}{(x+3)^2} + \frac{1}{(x+3)^3}.$$

Beautiful, isn’t it? Admittedly, current process is not fully automated. In the future, a completely automatic PFD algorithm may be implemented.