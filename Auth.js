
// Create a wrapper function for communicating with the API
// const registerUser = async (name,email,password,contact) => {
//   var myHeaders = new Headers();
//   myHeaders.append("Content-Type", "application/json");

//   var raw = JSON.stringify({
//     "name": name,
//     "email": email,
//     "password": password,
//     "contact": contact
//   });

//   var requestOptions = {
//     method: 'POST',
//     headers: myHeaders,
//     body: raw,
//     redirect: 'follow'
//   };

//   fetch("https://fast-mesa-43934.herokuapp.com/api/user/register", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));
// }





import React, { useContext, useEffect, useMemo, useReducer, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = React.createContext();

const AUTHENTICATED = 'AUTHENTICATED';
const ACCESS_TOKEN_KEY = 'access_token';
const USER_NAME='username';

// Create a wrapper function for communicating with the API
const registerUser = async (name, email, password, contact) => {
  await AsyncStorage.setItem(USER_NAME, name);
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "name": name,
    "email": email,
    "password": password,
    "contact": contact
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://fast-mesa-43934.herokuapp.com/api/user/register", requestOptions)
    .then(response => response.text())
    .then((result) => {
      console.log(result);
      AsyncStorage.setItem(ACCESS_TOKEN_KEY, result);
    })
    .catch(error => console.log('error', error));
}

const currentUser = async (token) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `${token}`);

  var raw = "";

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://fast-mesa-43934.herokuapp.com/api/user/me", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

const loginUser = (email, password) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "email": email,
    "password": password
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://fast-mesa-43934.herokuapp.com/api/user/login", requestOptions)
    .then(response => response.text())
    .then((result) => {
      console.log(result);
      AsyncStorage.setItem(ACCESS_TOKEN_KEY, result);
    })
    .catch(error => console.log('error', error));
}

// The app container, should handle the state of a user being authenticated or not
export const AuthContainer = (props) => {
  const [authState, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        // Handle the AUTHENTICATED action and set the state to be authenticated
        case AUTHENTICATED:
          return {
            ...state,
            authenticated: true,
            
          };
        default:
          throw new Error(`${action.type} is not a valid action type`);
      }
    },
    {
      authenticated: false,
      initialized: false,
    },
  );

  // Memoize this facade since it shouldn't be recreated every render
  const facade = useMemo(
    () => ({
      register: async (name, email, password, contact) => {
        try {
          const token = await registerUser(name, email, password, contact);

          // console.log(token);
          console.log("Hello");
          // await AsyncStorage.setItem(ACCESS_TOKEN_KEY, token);
          // console.log("HelloAfter");

          dispatch({ type: AUTHENTICATED });
        } catch (error) {
          console.error(error);
        }
      },

      // First we're trying to fetch a token from encrypted storage here
      // Then we try to get the user associated with that token and resume the session
      resume: async () => {
        try {
          const token = await AsyncStorage.getItem(ACCESS_TOKEN_KEY);
          console.log("HelloToken");
          console.log(token);

          // When no token is found, don't try to fetch the user
          if (!token) {
            return;
          }

          await currentUser(token);

          // dispatch({ type: AUTHENTICATED });
        } catch (error) {
          console.error(error);
        }
      },
      signIn: async (email, password) => {
        try {
          const token = await loginUser(email, password);

          // console.log(token);
          console.log("Hello");
          // await AsyncStorage.setItem(ACCESS_TOKEN_KEY, token);
          // console.log("HelloAfter");

          dispatch({ type: AUTHENTICATED });
        } catch (error) {
          console.error(error);
        }
      },

    }),
    [],
  );

  // This will trigger when the app is mounted for the first time
  useEffect(() => {
    facade.resume();
  });

  // This uses a render prop to pass the authState to the containers children
  return (
    <AuthContext.Provider value={facade}>
      {props.children(authState)}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);