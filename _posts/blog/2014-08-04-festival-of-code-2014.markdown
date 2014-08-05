---
layout: blogpost
title:  "YRS Festival of Code 2014"
date:   2014-08-04
permalink: /blog/yrs2014/
header: "/img/yrs2014.jpg"
tags:
- blog
---

Last week, I took part in the Young Rewired State Festival of Code for the first time.

Throughout the week, I worked on a game called ExploreLocal, at the Social Breakfast centre. The game uses data from Wikipedia and Flickr to provide clues to nearby places of interest, to which players have to guess the location of on a map. 

It was built using HTML5, CSS3, JavaScript, jQuery and the Google Maps JavaScript API v3 for the front-end. For the back-end, the Rails server provides an interface for adding new locations to the database and also generates new random games.

During the weekend, I travelled to Plymouth to present my game in the heats, and I managed to enter the semi-finals for the Best in Show category:

<blockquote class="twitter-tweet" lang="en"><p>Jack&#39;s <a href="https://twitter.com/hashtag/ExploreLocal?src=hash">#ExploreLocal</a> is in the &#39;best in show&#39; semi!! <a href="https://twitter.com/hashtag/YRSFoC?src=hash">#YRSFoC</a> <a href="https://twitter.com/hashtag/FestivalofCode?src=hash">#FestivalofCode</a> <a href="http://t.co/vIuYeTElGh">pic.twitter.com/vIuYeTElGh</a></p>&mdash; Nathan Coyle (@nathan_coyle) <a href="https://twitter.com/nathan_coyle/statuses/495604481619668992">August 2, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

I didn't reach the final, but I had a great week! You can watch my semi-final talk below (there is a transcription below):

<iframe width="853" height="480" src="//www.youtube.com/embed/qiZ5hQYnHTY?rel=0" frameborder="0" allowfullscreen></iframe>

<article><div class="transcript">
  <article class="transcript-toggle">[Toggle transcript]</article>
  <article class="transcript-content"><p>So how much do you know about your local area? Do you know about the places of interest and local attractions, and could you put them on a map? And how do you find out about your local area and discover less well-known attractions?</p>

<p>But I'm going to show you an easier, more fun way to do this:
Introducing ExploreLocal</p>

<p>It's a GPS-based game which uses the browser's Geolocation API to find your location. It then pulls in, from the database, the local attractions to make the game relevant to where you are. Each game has four random attractions.</p>

<p>The main part of the game is the map, which uses the Google Maps API to allow the players to move around the map and to get closer. And, also, the Google Maps API is used to drop the marker on the map and to calculate the distance between the actual location and
the guess.</p>

<p>There are also the clues, which are used to find where the location is and you can use as many as you like, in any order. And each clue costs a different amount of points as well.</p>

<p>First, there is the Wikipedia clue, which is a short snippet of information.</p>

<p>There is the Flickr clue, which is a picture of the place.</p>

<p>And finally, there is the name clue, which is the name of the place.</p>

<p>There is a points system, where the closer you get to the actual location, the more points you get. But points are also deducted from using more expensive clues. And at the end of each level, you get a clear outline of how your score was calculated.</p>

<p>There is also an awards system, so you can get bronze, silver or gold award.</p>

<p>There are also social features at the end, so you can share on Twitter and the link takes you to exactly the same game to try to beat your score.</p>

<p>In the future, I would like to optimise the game for mobile by making the game responsive and to show the actual location after guesses and to expand the prototype to the whole of the UK, as it's just for Birmingham at the moment.</p>

<p>And I'd like to give you a quick demo:</p>

<p>So the game starts off like this: you've got the information screen, telling you how to play the game.</p>

<p>I'm going to use the free clue first, which has got a picture of the new Birmingham Library on it.</p>

<p>And I'm also going to use the Wikipedia clue, which you can see on the side, which takes out the name of the location and gives you information about the history of it.</p>

<p>And there is also the name clue.</p>

<p>And now I'm going to try to find it. I'm going to guess around here and confirm my choice.</p>

<p>So I was 0.9 miles away and got 932 points.</p>

<p>And there are four different place to find out in each game.</p>

<p>And at the end of the game, it tells you the award and your final score, which you can share on Twitter and here are links to Wikipedia.</p>

<p>[JUDGE 1]: I was just thinking before, about how it could be improved in the future?</p>
<p>[ME]: Yeah, so there was the future roadmap, which I just showed you before, but also, I would like to include local businesses and have sponsored places and get money towards it as well.</p>

<p>[JUDGE 2]: How would it take before somebody would stop playing it?</p>
<p>[ME]: Most of the people which I got to play it, played it for about three or four times but at the moment, I've got 14 places in the database, so after so many games, the same places keep coming up, but if I added more places, people would play it for longer.</p>

<p>[JUDGE 1]: So, I hate Geography, but I love this, and have you thought about how this might possibly go further, such as including state capitals?</p>
<p>[ME]: So, I'd like to expand this to the UK first, then to the whole of the world, then include things such as state capitals.</p></article>
</div></article>

You can find the slides from this talk at [explore.jackhughesweb.com/slides](http://explore.jackhughesweb.com/slides), view the source code at [github.com/jackhughesweb/explorelocal](http://github.com/jackhughesweb/explorelocal) and play the game at [explore.jackhughesweb.com](http://explore.jackhughesweb.com).

At Plymouth, there was also plenty of free time to speak to other young coders, work on your projects, watch talks and listen to chiptune music. I even managed to get into a group selfie:

<blockquote class="twitter-tweet" lang="en"><p>A massive group selfie at the start of my <a href="https://twitter.com/hashtag/YRSFoC?src=hash">#YRSFoC</a> talk - a new record‽ <a href="http://t.co/Nj7THXLzo3">pic.twitter.com/Nj7THXLzo3</a></p>&mdash; Ben Nunney (@BenNunney) <a href="https://twitter.com/BenNunney/statuses/495321862315196416">August 1, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Also, there was plenty of food, including pizza! The wifi at Plymouth was great and there were plenty of sockets to charge devices.

The weekend took place at Plymouth University and the final was at Plymouth Pavilions, which showcased the best of each prize category, before the judges announced the winners:

<blockquote class="twitter-tweet" lang="en"><p>Congrats to miles per pound, city radar, let&#39;s combine, tourify, and you draw our winners of <a href="https://twitter.com/hashtag/YRSFoC?src=hash">#YRSFoC</a> <a href="https://twitter.com/hashtag/YRS2014?src=hash">#YRS2014</a> !!!!</p>&mdash; Young Rewired State (@youngrewired) <a href="https://twitter.com/youngrewired/statuses/495973681525719040">August 3, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Even though I didn't get much sleep, the whole experience was amazing and I'm looking forward to next year's Festival of Code ([sign up here](https://youngrewiredstate.org/festival-of-code-2015)).
