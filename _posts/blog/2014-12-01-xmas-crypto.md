---
layout: blogpost
title:  Introduction to Cryptography
date:   2014-12-23
permalink: /blog/xmas-crypto/
header: "/img/blog/yrs2014.jpg"
pageclass: "xmas-crypto"
tags:
- blog
---

Note: this introduction to cryptography requires you to know a few things first:

## Modulo
Modulo is the remainder of a calculation.

For example:<br>
3 × 4 mod 5 = 2<br>
(When 12 is divided by 5, the remainder is 2)

## Exponential Function
An exponential function is a function with the formula b<sup>x</sup>. Here, x is called the **exponent**.

## Hash Function
A hash function is a function that can map data of any size to data of a fixed size. This could be used to check the integrity of a downloaded file by comparing the fixed sized hashes of the server and local files, instead of having to check all bits of a large file. Another use of hash functions are for storing passwords: the hashed version of a password a user enters can be quickly checked against a hash stored in a database, but the hash is very hard to turn back into the plaintext password again.

## Co-prime
Two numbers are co-prime if the greatest number that can divide them both is one.

For example:<br>
16 and 9 are co-prime because the largest number that divides both is one.<br>
16 and 24 are not co-prime as the largest number that divides both is eight.<br>

<br><br>
<hr></hr>
<br><br>

It’s the 23<sup>rd</sup> of December, and at the North Pole, the wrapping factories have nearly finished and Santa is preparing for delivery. 

The elves are also preparing for their Christmas party, but to the surprise of the head elf, Alice, the elf biscuit supply is running low. If word gets out, the elves will go on strike so Alice needs to send a message to the delivery manager, Bob, to alert him of this pressing issue.

If Alice was to send Bob the message in plaintext over the Elfernet, another elf could intercept the message and this would cause panic.

Alice is going to use public/private key cryptography, specifically RSA, to encrypt the message to send to Bob.

But before she can encrypt the message, Bob needs to generate a public and private key pair and send his public key to Alice:

## Key pair generation

During key pair generation, two distinct prime numbers, p and q are chosen at random. The RSA algorithm is used to output the value of n, the modulus used in encryption and decryption (n = pq), e, the public key exponent, and d, the private key exponent. Smaller values of e are less secure than larger values.

Bob now has his public key (n, e) and his private key (n, d).

It is important that Bob’s private key is kept secret. Also, the values of p, q and results of other calculations during the key pair generation must be kept secret as this could be used to calculate his private key exponent, d.

## Encrypting data

Now that Bob has a key pair, he needs to send his public key (n, e) to Alice so she can encrypt the message. Note that he does not send his private key to Alice.

The message that Alice sends is padded and then converted into an integer, m, where 0 ≤ m < n. The cipher text, c, is calculated using the formula:

c ≣ m<sup>e</sup> (mod n)

Alice can then send Bob the cipher text, c, over an insecure channel (the Elfernet).

Note: often, the message is not encrypted with public/private key (asymmetric key) crypto. Instead, the message is encrypted with a symmetric key and this symmetric key in encrypted with the public key and is sent with the message.

# Decrypting data

When Bob receives the cipher text, c, he needs to decrypt it to be able to read the message, m. Bob calculates m using the formula:

m ≣ c<sup>d</sup> (mod n)

m is then converted back from an integer and the padding scheme used is reversed so Bob can read the message.

# Signing data

Bob doesn’t know whether it was Alice or someone else who sent him the message, as anybody could send him a message encrypted with his public key. 

Alice, however, can sign the message using her own public/private key pair to prove to Bob that she is in possession of her private key and that the message has not been tampered with.

She signs the message by taking a hash of it, taking the hash, h, to the power of d (mod n) (as she does when decrypting a message) and attaches this as a signature, s:
 
s ≣ h<sup>d</sup> (mod n)

When Bob receives the message with its attached signature, he can verify that the attached signature is valid by taking the signature, s, of the message and raises it to the power of e (mod n) (as he does when encrypting a message) and compares this value to the actual hash, a, of the message using the same hashing algorithm:

t ≣ s<sup>e</sup> (mod n)

t = a, if the signature is valid.

If these two values match, the sender (presumed to be Alice, see below) is in possession of Alice’s private key and the message has not been tampered with since being signed. 

However, the sender may not be Alice - it only verifies that the sender has Alice’s private key, so signing does not verify that the person is who they say they are.

<br><br>
<hr></hr>
<br><br>

Back in the North Pole, Alice has decided to use PGP (Pretty Good Privacy) to send an encrypted email to Bob. PGP uses public/private key cryptography to encrypt messages and is based on a “web of trust” system to authenticate people.

For example: <br>
- Alice has signed Charlie’s public key as she knows who Charlie is and trusts Charlie. <br>
- Charlie has signed Bob’s key as they also know and trust each other. <br>
- Therefore Alice knows that she can trust Bob’s key as Charlie also trusts the key. <br>

The Elf Christmas Party has been saved, thanks to cryptography!