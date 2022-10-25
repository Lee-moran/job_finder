FINDER job seekers - An interactive image/job sharing app
==================================

* * *

ABOUT THE WEBSITE:
------------------

* * * 

[Link to deployed site]()

_Finder_ is a public online blog-styled media platford where users can create a profile and post their images along with a title and content. Users can also view other users profiles, comment, like  them! This interactive platform is designed to provide a a rich online community as users interact with each others posts. Its idea is to give job seekers the oportunity to network and learn from with posfessional in a new way.

* * * 

## Main Technologies
- HTML, CSS, JavaScript
- React.js
- Bootstrap.js
- Django REST Framework


## TARGET AUDIENCE:

* * *

This platform targets people who want to network with professional and learn more about careers. Anyone who wants to can create a profile can post images and content and connect with others! The search feature allows for people to find content they are interested on, follow the profiles and even learn from the learn page.
  
* * *

## STRATEGY:

Create an aesthetically pleasing, simple yet fast open source user interface content sharing app that is easy to navigate. The site allows users to create their profile (including avatar, username), and upload their own content including photos, titles and decriptions. Users can also view and interact with other users posts: liking, commenting. interact through our learn page.

The site will allow for user authentification, and basic CRUD functionality.

The goal is to create  code that is clear and allows you to update with ease.

## STRUCTURE:
HOMEPAGE - landing page, This is the page that initially loads when you first arrive at the site. Without LOGGED OUT
LOGO: link to home page.
NAVBAR:Home,about,signIn,signUp.
ABOUT: Giving consumers the options and info before creating an account.
SIGNUI/SIGNUP: Ability to create a profile, excisting user ability to signIn.
<img width="1209" alt="Screenshot 2022-10-20 at 15 30 39" src="https://user-images.githubusercontent.com/92300148/197823295-f21a9458-3b64-4f4a-ae84-ff92baee98df.png">

LANDING PAGE:
Once logged in....
Only difference is in the Navbar: App name, AddPost, learn, search, Liked, about, Sign Out, and Profile link and avatar.
![Screenshot 2022-10-25 at 16 48 59](https://user-images.githubusercontent.com/92300148/197823481-733907f8-062e-4883-9439-be9777ad0cb3.png)


ADDPOST - gives loggedIn users the ability to create a post and share an image it to be like and viewed by others.
LEARN - gives loggedIn users access to professional resourse, learning techniques.
SEARCH - ability to search post by title or content.
LIKED - shows the pics you have liked.

## user stories 

## wirerframe 

## Fonts and Color scheme
Exo & Ubuntu are the primary fonts I wanted to use because there soft and complamentarty. Giving of a sense of peace. the stroke in these font work well together.


<img width="240" alt="Roboto" src="https://user-images.githubusercontent.com/92300148/197821882-9a871df6-6c0b-4de1-8d4c-e392f35bb547.png">

Roboto
As a fall back I used Roboto and sans serif  as the standard. Good idea to have a fall back so your content is viewable. "https://fonts.google.com/specimen/Roboto"

In terms of the color scheme I went with something slightly different. Wanting to incorperate greens and blues as there assicated with seeking jobs, money, growth..
contrasting and vibrant colors on a white canvas.

<img width="605" alt="color shades" src="https://user-images.githubusercontent.com/92300148/197821548-5e7681c8-25b1-449c-a772-cce546c1f60e.png">

### DIFFCULITIES & ERRORS

Had some major difficulties with this project, this is the third one ive made now and get a common problem across the board. CORS policy..(checked my code against the walkthrough and with tutor supposrt, checked Heroku and the urls etc. As you can tell the site is still incomplete thought i managed to slove the problem but keep running into errors relating to Dj-auth-user/registration/ etc  wasnt able to fully wrape my head around these areas.. Got help sometimes from tutor support managed to slove some errors but always came back short... restarted the project after some of the fontawsome icons wouldnt appear..  updated my kits etc.  As everything was working then suddenly didnt.. got as far as edit on one of the projects.

Im at a stage where im continuing on to trying and get a full operational site.

ISSUES:
SignOut function not working - wont signOut a user.
When creating a post - press create, it doesnt seem to create (404 error).
PostPage - therefore doesnt display the post.. just the avatar default image.


CORS- resolve signIn and signUp - 
Main urls.py 
add to the back end replacing current..
ALLOWED_HOST = {*}
at the bottom on the page 
CORS_ALLOW_ALL_ORIGINS = True

FRONTEND - 
created a new variable linking to heroku, deployed app 
everytime a GET or POST method called i added (backend + '/posts/',
seemed to only resolve the signin and signup.

'link to these site'

Manged to retrieve a functioning app, still some errors but this one has alot more to it.
Issues 
some of the styling isnt being applied or its just not working. eg Most Followed Profiles spacing.
![Screenshot 2022-10-25 at 16 48 25](https://user-images.githubusercontent.com/92300148/197822802-90cad2c4-d49b-404a-a8f6-5935c63d37ee.png)

Add post - has an extra field to it 
![Screenshot 2022-10-25 at 16 48 35](https://user-images.githubusercontent.com/92300148/197822878-7d8d2845-237e-4b4f-8b1a-362bc180f742.png)


save button when wanting to edit a post..
Screen shot 
