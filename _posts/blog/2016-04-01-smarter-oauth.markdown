---
layout: blogpost
title:  "Smarter OAuth"
date:   2016-04-01
permalink: /blog/smarter-oauth/
tags:
- blog
---

OAuth is designed to make logging on to services easy - just login through a provider instead of having to choose a new password to use, and forget about having to create a new account. And for the server, you don’t have to worry about securely hashing passwords, or sending out password reset/email verification emails, or rate limiting logins.

However OAuth has its downsides. 

## Issue #1: Trust

The first is trust - this involves you needing to trust the OAuth provider that you choose, as they can login to your account at any point since they manage the entire login process. This is not easily solved at all, and is typically why services offer the creation of an account without having to authenticate with a provider. However, lets say that you use Gmail for your emails - you then need to decide if you trust Google enough to use them as a provider, or whether you should create a standard account instead. In this situation though, Google has access to your emails and could in theory use a password reset mechanism to gain access to your account - this would ideally be tamper evident (your password being changed could be a flag that unauthorised access was gained), however they would have already gained access your your account.

## Issue #2: Downtime

Another issue with OAuth is a provider’s authentication service going down - this is easily solved by linking an account with multiple providers, and then authenticating with another provider that is working at that time, but this brings on another issue: which provider do I use?

## Issue #3: Choosing a Provider To Use

It’s a familiar sight with web services when authenticating to see three large coloured buttons: dark blue, light blue and red, all stating “Log in with X”. Which one should I use? Which one do I normally use? Should I stick with that or go with another one? Do I have an account here already? Which one did I use when I signed up?

Or in other situations, you’re presented with a single “Log in with X” button. Simple, no choice needed. So you click on the button, which pops up a little dialog box: “Service Y would like to access your account information. This includes: your name, email address, friends, relationship status, the last five photos your posted, your entire message history with all of your friends, and to send your friends game requests”. And at the end of this dialog box, there is a large call-to-action button inviting you to authorise the app. No thanks. 

(As much as poor scoping choices is an issue here, I'll instead be looking at the issue of leaving your service’s authentication to go down whenever website X goes down).

## A Possible Solution

### Taking away choice

To go back to the problem of solving user confusion of which provider to choose, it's best to take away the choice of the user except for when signing up.

To start, we'll ask for something unique that can identify an account (eg. a username or email address), and then check if that unique key is connected to an account:

![Form asking for user's email address](/img/blog/smarter-oauth/1-login.png)

#### New accounts

Assuming that the user doesn’t have an account, they are shown a second page, asking them to choose or type in the name of a provider that they wish to use (only providers that we support are allowed to be used).

![Form asking for a provider when creating an account](/img/blog/smarter-oauth/2-new.png)

The user is then authenticated with their chosen provider, and they are then logged in.

#### Exisiting account

On the other hand, we might check the email address and find that the user already has an account. Then we can then automatically redirect them to their chosen provider (or ask them to choose from a list if they have more than one connected) and let them log in.

![Form asking for a provider when to login to an existing account](/img/blog/smarter-oauth/3-existing.png)

#### Unique keys

You may have noticed that this solution has introduced a new problem: what if the user types in one email address, but the account they authenticate with uses *another* email address? 

This doesn't matter here: the initial email is just a unique key used to identify an account and could be easily swapped with a username or something else. What we are doing here is *looking up the unique key in the database*, to find out if an account exists or not: 

- *if not*, we create a new user account with a new authentication method
- *if it does exist*, we ask the user to login with any of the authentication methods linked with the account. 

So one account (containing one unique key), has many authentication methods.

#### Users forgetting their key

Another problem with this solution is: what if the user forgets their unique key. This is also simple to solve: a “forgot my username/email” link, which just asks them to choose a provider and authenticate with them, then either log them in to the linked account or ask them to try again.

![Form asking for a provider when to login to an existing account](/img/blog/smarter-oauth/4-forgot.png)
 
### But what if I don't want to use a provider?

You could instead offer a standard username and password account, or even create a provider that sends out "magic link" emails that companies like Slack use for login.

## Summary

This solution attempts to solve all three of the issues I set out:

- Trust - you have a much larger choice about who you authenticate with, however you still need to place trust with whoever you go with (and with your email provider too, if you use the "magic link" emails)
- Downtime - by connecting more providers to your account (once you are logged in), you can still gain access to your account if a provider goes down
- Choosing a provider to use - here we are letting the user choose a provider to use on sign up, but then reminding them about which one they used to sign up with when they want to log in