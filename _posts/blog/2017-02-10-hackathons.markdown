---
layout: blogpost
title:  "Hackathons"
date:   2017-02-10
permalink: /blog/hackathons/
headercredit: "https://mlh.io"
headercredittext: "Photo adapted from original by Harshpal Bhirth/MLH"
header: "/img/blog/hc2017.jpg"
tags:
- blog
---

**Hackathons are 24-hours of pure tiredness-fun.** They provide new experiences of teamwork, programming skills in new languages and working together to solve a real life project. Hacks can also solve real-world issues, and there are often a wide range of hacks - from simple jokes, to creating a new banking API or analysing large datasets.

Given this amazing wide range of hacks, it’s hard for judges to decide upon who should win prizes, comparing comedic hacks, to new innovative hacks. People attend hackathons with different intentions too: you get teams who go out of their way to get to the first prize and win a trophy, and other teams who are there to just experience new APIs and languages. Projects produced at hackathons are written very quickly, with minimal time for fixing bugs, cleaning up or any bit of documentation. And given this hacky code, it’s much less likely for the project to continue on given the large messy codebase that was produced from the project.

However, I’d argue against many of these points. Since attending multiple hackathons, I’ve loved every one, working with many new people, using languages and APIs that I’ve never used before, travelling to new places, and working on problems that I had never been made aware of before.

## HackCambridge - Knowledge Direct

[Project on GitHub](https://github.com/knowledge-direct/knowledge-direct)

Recently, I attended HackCambridge, where I worked within a team of four to create a literature search engine, helping academics enter into new research areas by providing a path of papers to take them from their current literature database to a new paper that they’d like to read and understand. We accomplished this using a combination of techniques, from web crawlers obtaining the data from PubMed, to then analysing papers that we’d obtained - looking up citations and other key metrics, to create a network of connections between papers, and then analysing these connections to find the shortest path between them. The user can then select which papers they already know, then select a number of target papers, before being shown a graph of their path to take (the shortest possible path).

Along the way we faced many challenges. From the data itself (finding a large useful dataset, and then needing to clean up any messy or incorrect data), to attempting to get React.js and Flask to work together (we ended up using Flask’s own templating instead).

Given that we had limited time on the project, we didn’t have time to implement everything that we wanted to (NLP of papers, user feedback on connections and paths, transitioning to scalable technology, and finding a bigger data set), but we had an exciting time working together on this.

## BrumHack - Git Pizza

[Project on GitHub](https://github.com/jackhughesweb/brumhack16)

At BrumHack, I worked on a simple project to collect data from Pizza Hut and Domino’s websites to find the best pizza for your money. At first, this seemed like a straightforward task to scrape the two websites, however I quickly ran into issues. One website required you to follow a series of pages and redirects to be able to get a token to read the pages, and another one presented their offers as images (which would involve using computer vision to identify what each offer was).

## BrumHack - Jekyll Editor

At BrumHack, I worked in a team of two to create an editor for Jekyll websites - providing a preview generated in a Docker instance and being able to write and save drafts without them being visible on GitHub. Unfortunately, we didn’t get much of it to work due to getting communication setup between each different component, and forgetting that Heroku existed - instead trying to configure a digital ocean instance for hours. We didn’t present what we’d worked on during the demo time - but this is something I deeply regret and have learned for future hackathons - *always* present what you’ve worked on, even if you have nothing working, as you will have still learnt things which you can share with the other attendees.

## HackKings - MovieTinder

[Project on GitHub](https://github.com/jackhughesweb/movietinder)

At HackKings, I worked in a team of four to create a web app that used a tinder style swiping interface to ask you about which movies that you like or dislike, and then recommend you with movies that you may like to watch. The biggest thing we learnt, is to agree on python versions; half of us were using Python 2 and the other half were using Python 3!

## And more...

I’ve also attended a few other hackathons, including Young Rewired State’s Festival of Code twice, which is a week long event, and I’ve met great [friends](https://teamssd.com) through it too.

Hackathons are such a good thing for CS (and other) students too - typically we learn to program either by ourselves or are taught to, but these events allow us to put this into practice, and really test us to our limits. It’s a fantastic experience, and I’d highly recommend attending one if you haven’t already, whether you’re a novice or a pro ([MLH](https://mlh.io/eu) is a good place to look).
