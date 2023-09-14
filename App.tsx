import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SignIn from './components/SingIn';
import Profile from './components/Profile';
import UserPosts from './components/UserPosts';
import { AppState } from './types/AppState';
import { Post } from './types/PostType';
import { RootStackParamList } from './types/RootStackParamList';

const Tab = createMaterialTopTabNavigator<RootStackParamList>();

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  const handleLogin = (successfulLogin: boolean) => {
    setLoggedIn(successfulLogin);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <NavigationContainer
      onStateChange={(state) => {
        const { index, routes } = state!;
        const currentRoute = routes[index];

        if (loggedIn && currentRoute.name === 'Выход') {
          handleLogout();
        }
      }}>
      <Tab.Navigator>
        {!loggedIn && (
          <Tab.Screen
            name='Вход'
            component={(props) => <SignIn {...props} onLogin={handleLogin} />}
          />
        )}
        {loggedIn && (
          <>
            <Tab.Screen name='Профиль' component={Profile} />
            <Tab.Screen
              name='Посты'
              component={(props) => (
                <UserPosts
                  {...props}
                  onCreatePost={(newPosts) => setPosts(newPosts)}
                />
              )}
            />
            <Tab.Screen name='Выход' component={() => null} />
          </>
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
