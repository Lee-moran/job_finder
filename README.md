FINDER job seekers - An interactive image/job sharing app
==================================

<img width="1241" alt="Responsive" src="https://user-images.githubusercontent.com/92300148/198287057-df030d91-39b4-4d33-a7be-631e896880d9.png">

* * *

ABOUT THE WEBSITE:
------------------

* * * 

[Link to deployed Frontend site](https://finder-job.herokuapp.com/)
[GitHub Frontend](https://github.com/Lee-moran/job_finder)
[Deployed Backend](https://job-api-drf.herokuapp.com/)
[GitHub Backtend](https://github.com/Lee-moran/DRf_job_API)

_Finder_ is a public online blog-styled media platford where users can create a profile and post their images along with a title and content. Users can also view other users profiles, comment, like  them! This interactive platform is designed to provide a a rich online community as users interact with each others posts. Its idea is to give job seekers the oportunity to network and learn from with posfessional in a new way.

I wanted to mash a few site together to get an overall app. instagram > linkedIn > indeed > and apply some more functionality for the user.
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

* * *

## STRUCTURE:
HOMEPAGE 
- landing page, This is the page that initially loads when you first arrive at the site. Without LOGGED OUT
LOGO: link to home page.
NAVBAR:Home,about,signIn,signUp.
ABOUT: Giving consumers the options and info before creating an account.
SIGNUI/SIGNUP: Ability to create a profile, excisting user ability to signIn.

<img width="1209" alt="Screenshot 2022-10-20 at 15 30 39" src="https://user-images.githubusercontent.com/92300148/197834985-19601e25-1597-4b24-905e-7b182513658f.png">


* * *

#### LANDING PAGE:
Once logged in....
Only difference is in the Navbar: App name, AddPost, learn, search, Liked, about, Sign Out, and Profile link and avatar.
ADDPOST - gives loggedIn users the ability to create a post and share an image it to be like and viewed by others.
LEARN - gives loggedIn users access to professional resourse, learning techniques.
SEARCH - ability to search post by title or content.
LIKED - shows the pics you have liked.

![Screenshot 2022-10-25 at 16 48 49](https://user-images.githubusercontent.com/92300148/197834725-c608fbfc-b864-49b7-93eb-944a5fb857b3.png)


* * *

# User stories 
```
Navigation: 
As a user I can view a navbar from every page so that I can navigate easily between pages

Routing: 
- As a user I can navigate through pages quickly so that I can view content seamlessly without page refresh

Authentication: 
-Sign up: As a user I can create a new account so that I can access all the features for signed up users
- Sign in: As a user I can sign in to the app so that I can access functionality for logged in users
- Logged in Status: As a user I can tell if I am logged in or not so that I can log in if I need to
- Refreshing access tokens: As a user I can maintain my logged-in status until I choose to log out so that my user experience is not compromised

Navigation: 
- Conditional rendering - As a logged out user I can see sign in and sign up options so that I can sign in/sign up

Avatar: 
- As a user I can view user's avatars so that I can easily identify users of the application

Adding & Liking Posts
Create posts: 
- As a logged in user I can create posts so that I can share my images with the world!

View a post: 
- As a user I can view the details of a single post so that I can learn more about it

Like a post: 
- As a logged in user I can like a post so that I can show my support for the posts that interest me
```
## The Posts Page
```
View most recent posts: 
- As a user I can view all the most recent posts, ordered by most recently created first so that I am up to date with the newest content
- As a user, I can search for posts with keywords, so that I can find the posts and user profiles I am most interested in.

View liked posts: 
- As a logged in user I can view the posts I liked so that I can find the posts I enjoy the most
View posts of followed users: 
- As a logged in user I can view content filtered by users I follow so that I can keep up to date with what they are posting about

Infinite scroll: 
- As a user I can keep scrolling through the images on the site, that are loaded for me automatically so that I don't have to click on "next page" etc
```

* * *

## The Post Page
```
Post page: 
- As a user I can view the posts page so that I can read the comments about the post

Edit post: 
- As a post owner I can edit my post title and description so that I can make corrections or update my post after it was created

Create a comment: 
- As a logged in user I can add comments to a post so that I can share my thoughts about the post

Comment date: 
- As a user I can see how long ago a comment was made so that I know how old a comment is

View comments: 
- As a user I can read comments on posts so that I can read what other users think about the posts

Delete comments:
- As an owner of a comment I can delete my comment so that I can control removal of my comment from the application

Edit a comment: 
- As an owner of a comment I can edit my comment so that I can fix or update my existing comment
```
* * *

## The Profile Page
```
Profile page:
- As a user I can view other users profiles so that I can see their posts and learn more about them

Most followed profiles: 
- As a user I can see a list of the most followed profiles so that I can see which profiles are popular

User profile:
user stats: 
- As a user I can view statistics about a specific user: bio, number of posts, follows and users followed so that I can learn more about them

Follow/Unfollow a user:
- As a logged in user I can follow and unfollow other users so that I can see and remove posts by specific users in my posts feed

View all posts by a specific user: 
- As a user I can view all the posts by a specific user so that I can catch up on their latest posts, or decide I want to follow them

Edit profile: 
- As a logged in user I can edit my profile so that I can change my profile picture and bio
Update username and password: As a logged in user I can update my username and password so that I can change my display name and keep my profile secure
```
* * *

## Wirerframe 

<img width="934" alt="Screenshot 2022-10-25 at 17 46 48" src="https://user-images.githubusercontent.com/92300148/197834101-a572ab18-ac10-4c74-b10f-561ce9e30acf.png">


- [live wireframe](https://lucid.app/lucidspark/dc02b561-213c-47f7-ab9c-a84224c043a8/edit?viewport_loc=-1457%2C776%2C3812%2C1985%2C0_0&invitationId=inv_6a98988b-5fcb-431b-9a03-5955f1f332ba)

<img width="929" alt="Screenshot 2022-10-25 at 17 44 29" src="https://user-images.githubusercontent.com/92300148/197833763-bc9559d9-f902-493a-a0d4-5fc5688ae933.png">

* * *

## Fonts and Color scheme
Exo & Ubuntu are the primary fonts I wanted to use because there soft and complamentarty. Giving of a sense of peace. the stroke in these font work well together.


<img width="240" alt="Roboto" src="https://user-images.githubusercontent.com/92300148/197821882-9a871df6-6c0b-4de1-8d4c-e392f35bb547.png">

Roboto
As a fall back I used Roboto and sans serif  as the standard. Good idea to have a fall back so your content is viewable. [Roboto]("https://fonts.google.com/specimen/Roboto")

In terms of the color scheme I went with something slightly different. Wanting to incorperate greens and blues as there assicated with seeking jobs, money, growth..
contrasting and vibrant colors on a white canvas.

<img width="605" alt="color shades" src="https://user-images.githubusercontent.com/92300148/197821548-5e7681c8-25b1-449c-a772-cce546c1f60e.png">

* * *

## DIFFCULITIES & ERRORS
```
Had some major difficulties with this project, this is the third one ive made now and get a common problem across the board. CORS policy..(checked my code against the walkthrough and with tutor supposrt, checked Heroku and the urls etc. As you can tell the site is still incomplete thought i managed to slove the problem but keep running into errors relating to Dj-auth-user/registration/ etc  wasnt able to fully wrape my head around these areas.. Got help sometimes from tutor support managed to slove some errors but always came back short... restarted the project after some of the fontawsome icons wouldnt appear..  updated my kits etc.  As everything was working then suddenly didnt.. got as far as edit on one of the projects.

Im at a stage where im continuing on to trying and get a full operational site.
```
### ISSUES:
```
SignOut function not working - wont signOut a user.
When creating a post - press create, it doesnt seem to create (404 error).
PostPage - therefore doesnt display the post.. just the avatar default image.


CORS- resolve signIn and signUp - 
Main urls.py 
added to the back end replacing current..
ALLOWED_HOST = {*}
at the bottom of the page added
CORS_ALLOW_ALL_ORIGINS = True

FRONTEND - 
created a new variable linking to heroku, deployed app 
everytime a GET or POST method called i added (backend + '/posts/',
seemed to only resolve the signin and signup.
```

- [Front end ERRORS](https://github.com/Lee-moran/project5)
- [live workspace](https://leemoran-project5-sfywyd9g86w.ws-eu72.gitpod.io)

- [Backend - ERRORS](https://github.com/Lee-moran/API_DRF)
- [Backend live](https://leemoran-apidrf-eju5075fbk9.ws-eu72.gitpod.io)

# Manged to retrieve a functioning app.
Still some errors but this app is functioning alot better then the previous ones.

## Issues 
some of the styling isnt being applied or its just not working. eg Most Followed Profiles spacing.

![Screenshot 2022-10-25 at 16 48 25](https://user-images.githubusercontent.com/92300148/197822802-90cad2c4-d49b-404a-a8f6-5935c63d37ee.png)
- Resolved simple by add fullstop before the styling .p

Addpost - has an extra field to it 

![Screenshot 2022-10-25 at 16 48 35](https://user-images.githubusercontent.com/92300148/197822878-7d8d2845-237e-4b4f-8b1a-362bc180f742.png)

- Resolved by adding to App.module.css
- input[type=file] {
    display: none; }


Save button when wanting to edit a post.. doesnt seem to respond.

- <img width="458" alt="Screenshot 2022-10-28 at 17 48 36" src="https://user-images.githubusercontent.com/92300148/198690291-d97a3e75-9e87-4614-8c23-8ebca2502dac.png">



# Testing 
Lighthouse report

<img width="581" alt="Screenshot 2022-10-27 at 13 34 57" src="https://user-images.githubusercontent.com/92300148/198286431-34fe1e19-15b2-4ff5-8c2e-b4d117abb61a.png">


CSS Validation

<img width="1396" alt="css" src="https://user-images.githubusercontent.com/92300148/198286523-8dbc29d6-d03d-40f5-83db-1a76778c0bc6.png">


HTML Validation

<img width="1360" alt="HTML" src="https://user-images.githubusercontent.com/92300148/198286633-245eda7b-850b-4954-85fc-9474d61c637c.png">

# Improvments:
Improve the new pages in learn. to all have a list of all tips and info in an invinite scroll. Basically copie the post and posts pages to allow the user endless access to certian tips catorgies on offer. Alow Professional to add insider knowledge and create new topics to share.
Tailor it more towards jobs and those seeking to improve there network.

# Reference
code institute - moments project 
youtube 
react-bootsrap

## Frameworks, Libraries, Programs and Technologies Used
- Django 3.2: Framework used to add structure to the platform
- Django AllAuth used to provide enhanced user account functionality
- Django templating language used to insert data from the database into the sites pages
- Bootstrap: Framework used to add structure and responsiveness
- Favicon Generator: Used to create favicon used on the website
- GitHub: GitHub respository is used to store the project's code after being pushed from Gitpod
- Google Fonts: Google fonts are used to add fonts for aesthetic and UX purposes
- Git: Gitpod IDE was used for version control by utilizing the Gitpod terminal to commit and Push to GitHub
- AmIResponsive: Used to generate mockup image
- lucid.app: Used to generate wireframes