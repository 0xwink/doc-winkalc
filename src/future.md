# Future Forecast

## Non Prime-Modulus Finite Fields
An pleasant fact to know is the uniqueness of finite fields. Finite fields enjoy a more historical name, Galois fields (GF). 

::: Theorem
If a field `F` is finite, then it has exactly `p^n` elements, where `p` is a prime number and `n` is a positive integer. In such a case, `p` is equal to the characteristic.

If two finite field `F` and `G` has the same number of elements, then they are isomorphic. Be careful: such an isomorphism is neither unique nor canonical. The subtlety is encoded in the automorphism group of a GF, which happens to be the Galois group with respect to its prime subfield. You can look up some external resources about this, such as this MO post.
:::

This allows us to abstractly write a field of `p^n` elements as `GF(p^n)` unambiguously. As `GF(p)` cases have been taken care of, `GF(p^n)` cases are trickier. The program has to find an irreducible polynomial of `GF(p)`, and such a polynomial admits no natural, canonical choice. This feature is something nice to have, but not scheduled in near future. 

::: Note
The family of `GF(2^n)` have proved outstandingly useful in modern cryptographic schema.
:::

## Organize the APIs into a Library

Worth a try, but I sincerely think there are already plenty of cryptographic and mathematical libs, be it in C++, Go or Rust, with optimised performance. I don't intend to add to that list. That be said, the polynomial parser and displayer really took me a handful of days to get it straight though, so others may find them useful. If a library is decided to ship, API reference would take a while to draft still.

## More Than A + B = C?

There are various computing demands in algebra and number theory, for example, factorisation and elliptic curves. Irreducibility of polynomials has been mentioned. To support these features will be tempting yet challenging, especially if you want to do things neatly. To be clear, hard-ware optimisations and sandbox security are out of my concern (and capability) when it comes to this education-oriented project, since such improvements often come with artificial shortcuts and obscure ASM code. Therefore, it's not made for production-scale code and won't be -- please consider RustCrypto etc. instead!