# Written in the Stars: An Astrology-Based Social App
December 2020

<h3>About</h3>

* [Written in the Stars](http://astro-dating-app.herokuapp.com/)
* [Trello](https://trello.com/b/x0DLuoEy/unit-2-project-astro-dating-app)

This is a simple, bare-bones social app, centered around astrology. Originally conceptualized as a dating app, the app features an open chat room and a sign-raiting system to encourage social interaction and discussion around all things astrology.

Users will log in using their Google account (OAuth). The user can update their personal profile with a status and their sun, moon, ascendent signs, if they know them. Moon and ascendent signs are not necessary to include at this time in order to get full app functionality. A sun sign is required (all signs and their corresponding dates are listed on the home page) in order to be matched with other users of compatible signs. 

Using the rating system, users can leave anonymous reviews of the signs, including a comment and a number score (1-5).

Using the message board, users can create threads of varying (hopefully astrology-based) topics, where other users can interact by commenting on the thread.

---------------------------------------

<h3>Technology Used</h3>

* Javascript
* CSS
* HTML
* Mongoose
* Heroku
* OAuth
* Passport
* Trello
* Bootstrap
* [Stars Icon by Rois Faozi via The Noun Project](https://thenounproject.com/search/?q=star&i=3347240)
* [What is Astrology? By Ed Grabianowski](https://entertainment.howstuffworks.com/horoscopes-astrology/question749.htm)
* [Astrology Zodiac Signs](https://www.astrology-zodiac-signs.com/)

---------------------------------------

<h3>Screenshots</h3>

Landing page:
![Landing page](https://i.imgur.com/Gy6zxky.png)

User profile:
![User profile](https://i.imgur.com/sDNgfun.png)

Matches page:
![Matches page](https://i.imgur.com/MKdS6Xi.png)

Reviews page:
![Reviews page](https://i.imgur.com/ZMcibwY.png)

Message board:
![Message board](https://i.imgur.com/ZJPQf8I.png)

Original ERD:
![Original ERD](https://i.imgur.com/ySTWE2l.png)

Original user profile wireframe:
![Original user profile wireframe](https://i.imgur.com/cfNfHpA.png)

Original matches wireframe
![original matches wireframe](https://i.imgur.com/kG0puUW.png)

---------------------------------------

<h3>Getting Started</h3>

* [Written in the Stars](http://astro-dating-app.herokuapp.com/)

The first time a user logs into the app, they will be greeted with the home page that includes a brief description of astrology and summaries of the twelve signs. Using the navigation bar, users can view their profile, view their matches, view/create reviews of the signs, access the message board, and log out.

On the View Profile page, a first time user will have their name amd email auto-populated, but their status and sun/moon/ascendent signs will be blank. To edit this content, the user will click on Edit Profile in the profile view where they can add a status and change their three signs. Clicking the submit button will lead the user back to their profile with updated content.

The user can view their matches only after selecting their sun sign on their user profile, via either their View Profile page or the navigation bar. Depending on what their sun sign is, the View Matches page will populate with other users with the appropriately matched signs.

In addition, the user can either click Review Signs on their profile or navigate to Reviews on the navigation bar to be taken to the anonymous reviews page. Really love Scorpios? Indifferent to Leos? Let other users know what you think here! 

Any review can be deleted by any user, as this was designed to be a temporary review comment section. Potentially chaotic? Very much so.

Lastly, a user can navigate to the Message Board to post a discussion topic. Other users can click "See Post" to be taken directly to the post and comment on it.

---------------------------------------

<h3>Next Steps</h3>

In future iterations of this app, I plan to:

* Utilize an API so I can populate sun, moon, and ascendent sign information based on birth information.
* Incorporate a private messaging system.
* Make messages on the Message Board deletable by the user that created them.
* Allow users to choose to match/unmatch with the populated user matches.
* Incorporate room for more info on the user profile.
* Have the moon and ascendent signs influence user matches.
