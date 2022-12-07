FINDER job seekers - An interactive image/job sharing app
==================================

<img width="1241" alt="Responsive" src="https://user-images.githubusercontent.com/92300148/198287057-df030d91-39b4-4d33-a7be-631e896880d9.png">

* * *

ABOUT THE WEBSITE:
------------------

* * * 

[Link to deployed Frontend site Render Link](https://finder-gyqm.onrender.com)
[GitHub Frontend](https://github.com/Lee-moran/job_finder)
[Deployed Backend Render Link](https://job-api-ht3f.onrender.com)
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

## Deployment to Heroku
```
In your app
- Add the list of requirements by writing in the terminal "pip3 freeze --local > requirements.txt"
- Git add and git commit the changes made
Log into Heroku
- Log into Heroku or create a new account and log in
- top right-hand corner click "New" and choose the option Create new app if you are a new user, the "Create new app" button will appear in the middle of the screen
- Write the app name - it has to be unique, it cannot be the same as this app
- Choose Region - I am in Europe
- Click "Create App"
The page of your project opens
- Go to Resources Tab, Add-ons, search and add Heroku Postgres
- Choose "settings" from the menu at the top of the page
- Go to the section "Config Vars" and click the button "Reveal Config Vars".
- Add the below variables to the list
Database URL will be added automatically
Secret_key - is the Django secret key that can be generated here.
Go back to your code
- Procfile needs to be created in your app
web: gunicorn PROJ_NAME.wsgi

- In settings in your app add Heroku to ALLOWED_HOSTS
- Add and commit the changes in your code and push them to GitHub
Final step - deployment
- Next, go to "Deploy" in the menu bar at the top
- Go to the section "deployment method", and choose "GitHub"
- A new section will appear "Connect to GitHub" - Search for the repository to connect to
- Type the name of your repository and click "search"
- Once Heroku finds your repository - click "connect"
- Scroll down to the section "Automatic Deploys"
- Click "Enable automatic deploys" or choose "Deploy branch" and manually deploy
- Click "Deploy branch"
Once the program runs: You should see the message "the app was successfully deployed"
- Click the button "View"
The live link can be found here.


Since Heroku stoped its free service the project has been migrated and deployed through
ElephantSQL and Render

```



## Manual Testing  

Some of the styling wasnt being applied or its just not working. eg Most Followed Profiles spacing.
![Screenshot 2022-10-25 at 16 48 25](https://user-images.githubusercontent.com/92300148/197822802-90cad2c4-d49b-404a-a8f6-5935c63d37ee.png)

- Resolved simple by add fullstop before the styling .p

Addpost - has an extra field to it 

![Screenshot 2022-10-25 at 16 48 35](https://user-images.githubusercontent.com/92300148/197822878-7d8d2845-237e-4b4f-8b1a-362bc180f742.png)

- Resolved by adding to App.module.css
- input[type=file] {
    display: none; }

CORS policy issue 
- Resolved with the aid of tutor support.  “I've pushed my env.py file to the Repo, and subsequently yo Heroku.”
- Added all environment variables to RENDER
- Updated Client Origin Dev in RENDER

Add post extra input field issue
- Resolved by adding to App.module.css
- input[type=file] { display: none; }

500 server error:
- Resolved with the aid of tutor support. All database migrations for both the Django project & apps needed to be cleared & remigrated. The precise steps for this have been documented in the README for the deployed backend API.

CRUD functionality has been tested for each of the following: Posts | Articles | Events | Comments | Likes | Follow | Profile
- Likes & Follow may only be created & deleted
- The profile may only be updated
- The location field is not being stored/updated 
- All nav links open to the correct page. 
- All external links open to a new browser window.
Resolved Added target=”_blank”
 
- Pages intended for logged-in users only will redirect logged-out users back to the home page.
- Users attempting to edit the content that they did not publish are redirected back to the home page.
- Users are able to create a new account.
- Users with an existing account are able to log in.
- Each user has the ability to log out.

Backend issues with migration 
- Deleted all migration from each app except __Init__.py
Resolved re run all migrations 

Follow btn 
- 400() not sending the right data to the API.
- ElephantSQL some rows weren't transferred when transferring Heroku Postgres data to ElephantSQL
- In the backend removed dB.sqlite3 from gitignore and file
- add/commit/push
- Put dB.sqlite3 back into gitignore
- add/commit/push again
- Reset ElephantSQL 
- Ran migrations backend
- Create a new superuser 
- Reconnect Database to ElephantSQL

Env.py
- DEV variable in your env.py, you can comment that out
- DATABASE_URL in there as well (copying and pasting that from your elephantsql dashboard).
- run migrations again, and create a new superuser.

Reconnect to Render
- 'clear build cache and deploy'
- Environment variables in render need updating 
- Removed ‘secret files' from the render




PostEditForm Location field 
Resolved 
```
useEffect(() => {
     const handleMount = async () => {
       try {
         const { data } = await axiosReq.get(`/posts/${id}/`);
         const { title, content, **location**, image, is_owner } = data;
          is_owner ? setPostData({ title, content, **location**, image }) : history.push("/");
       } catch (err) {
       }
     };

```
## React
```
Add to frameworks, libraries, and programs used 
React-Bootstrap: The styling library that has aided the layout of the site, and which was introduced to us during the course of the program.

```

## Components
Several components have been implemented within this project that has been reused throughout the project:
- axiosDefault.js: for ease of communication with the backend API.
- Asset.js: to supply the loading spinner & user avatar throughout the site.
- DropdownMenu.js: to allow users to edit/delete their Articles, Events & Posts.
- - CurrentUserContext.js: confirm the user logged-in status to determine what functionality is available to that user.
- ProfileDataContext.js: provide un/follow ability to other users across PopProf & ProfPage components.
- ToggleCollapse.js: whilst this component has only been applied to the NavBarMini, it could in theory be applied to additional dropdown menus installed on the site in the future to allow for the automatic collapse of an element upon mouse click.
- useRedirect.js: redirects a user to another page if they are not authorized to be on the page they are trying to access.
- utils.js: supplies functionality to all of the components that utilize the Infinite Scroll.



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