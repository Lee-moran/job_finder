import styles from  './App.module.css';
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container';
import { Route, Switch } from "react-router-dom";
import './api/axiosDefaults';
import SignUpForm from './pages/auth/SignUpForm';
import SignInForm from './pages/auth/SignInForm';
import PostCreateForm from './pages/posts/PostCreateForm';
import PostPage from './pages/posts/PostPage';
import PostsPage from './pages/posts/PostsPage';
import Learn from "./pages/extra/Learn";
import { useCurrentUser } from './contexts/CurrentUserContext';
import About from './pages/extra/About';
import PostEditForm from './pages/posts/PostEditForm';
import ProfilePage from './pages/profiles/ProfilePage';
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import CodeSkills from "./pages/extra/CodeSkills";
import CvSkills from './pages/extra/CvSkills';
import InterviewSkills from './pages/extra/InterviewSkills';
import NotFound from './components/NotFound';




function App() {

  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";


  return (
    <div className={styles.App}>
    <NavBar />
    <Container className={styles.Main}>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <PostsPage message="No results found. Adjust the search keyword." />
          )}
        />
        <Route
          exact
          path="/search"
          render={() => (
            <PostsPage
              message="No results found. Adjust the search keyword or follow a user."
              filter={`owner__followed__owner__profile=${profile_id}&`}
            />
          )}
        />
        <Route
          exact
          path="/liked"
          render={() => (
            <PostsPage
              message="No results found. Adjust the search keyword or like a post."
              filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}
            />
          )}
        />
              <Route exact path="/learn" render={() => <Learn/>}/>
              <Route exact path="/signin" render={() => <SignInForm />} />
              <Route exact path="/signup" render={() => <SignUpForm />} />
              <Route exact path="/posts/create" render={() => <PostCreateForm />} />
              <Route exact path="/posts/:id" render={() => <PostPage/>} />
              <Route exact path="/about" render={() => <About/> } />
              <Route exact path="/posts/:id/edit" render={() => <PostEditForm/>}/>
              <Route exact path="/profiles/:id" render={() => <ProfilePage/>}/>
              <Route exact path="/profiles/:id/edit/username" render={() => <UsernameForm />} />
              <Route exact path="/profiles/:id/edit/password" render={() => <UserPasswordForm />}/>
              <Route exact path="/profiles/:id/edit" render={() => <ProfileEditForm />}/>
              <Route exact path="/CodeSkills" render={() => <CodeSkills /> }/>
              <Route exact path="/CvSkills" render={() => <CvSkills/>} />
              <Route exact path="/InterviewSkills" render={() => <InterviewSkills/>} />
              <Route render={() => <NotFound/>} />
            </Switch>
          </Container>
        </div>
  );
}

export default App;