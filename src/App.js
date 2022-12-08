import {Switch, Route, Redirect} from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import {useContext} from "react";
import authContext from "./store/auth-context";


function App() {
  const authCtx = useContext(authContext);

  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>

        <Route path='/auth'>
          {authCtx.isLoggedIn && <Redirect to={'/'}/>}
          {!authCtx.isLoggedIn && <AuthPage />}
        </Route>


        <Route path='/profile'>
          {!authCtx.isLoggedIn && <Redirect to={'/auth'}/>}
          {authCtx.isLoggedIn && <UserProfile/>}
        </Route>

        <Route path={'*'}>
          <Redirect to={'/'}/>
        </Route>

      </Switch>
    </Layout>
  );
}

export default App;
