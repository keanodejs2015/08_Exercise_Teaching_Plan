#7 Exercise: Teaching Plan

In this exercise you will create your own simplified version of this electives teaching plan, based on the data retrieved from the websites api.

![Node.js Backend Development Api](https://raw.githubusercontent.com/keanodejs/08_Exercise_Teaching_Plan/master/img/Screen%20Shot%202015-10-17%20at%2018.46.53.png)
http://nodejs.clbo.dk/wp-json

Your job is to create a list like this

![Teaching Plan](https://raw.githubusercontent.com/keanodejs/08_Exercise_Teaching_Plan/master/img/Screen%20Shot%202015-10-17%20at%2018.47.40.png)

The list here is created from the posts that belongs to the curriculum category. The titles is linked to the description on the actual website (eg. #1 Introduction -> http://nodejs.clbo.dk/introduction/), The table can be done by putting “<table>” in as the first thing in the string

To obtain only posts from the Curriculum Category, you can either have a look at the api documentation here, and specially the part of retrieving posts http://wp-api.org/#posts_retrieve-posts.

Or you can 

You can choose to make use of the view engine from expressjs, to create your front end, but it is also ok for now just to create a string with all the content and the use express.js res.send method to display the content.


This exercise covers a little of many of the things we have covered so far.
You will need to have an express …, you will be reading from a web api (look at the youtube example for hints). You will be doing some basic javascript programming, loops, and string manipulation



