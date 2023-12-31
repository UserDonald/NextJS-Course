// import Todo from './components/Todo';
import { Route, Switch } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
};

// const App = () => {
//   return (
//     <div>
//       <h1>My Todos</h1>
//       <Todo text="Learn React" />
//       <Todo text="Master React" />
//       <Todo text="Explore React Course" />
//     </div>
//   );
// };

export default App;
