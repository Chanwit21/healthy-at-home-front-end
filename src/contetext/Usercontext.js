import { createContext, useContext, useReducer } from 'react';
import { removeToken, setToken } from '../service/localStorage';
import { user as initUser } from '../service/localStorage';
import jwtDecode from 'jwt-decode';

const UserContext = createContext();

const INITIAL_STATE = {
  user: initUser,
  token: '',
};

const REDUCER = (state, action) => {
  switch (action.type) {
    case 'LOGIN': {
      const token = action.payload.token;
      setToken(token);
      const user = jwtDecode(token);
      return { ...state, user: user, token };
    }
    case 'LOGOUT': {
      removeToken();
      return { user: null, token: '' };
    }
    default:
      return state;
  }
};

const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(REDUCER, INITIAL_STATE);
  return <UserContext.Provider value={{ state, dispatch }}>{children}</UserContext.Provider>;
};

const useUserContext = () => {
  const context = useContext(UserContext);

  if (context) {
    return context;
  } else {
    throw Error('useUserContext must use in UserContextProvider');
  }
};

export { UserContextProvider, useUserContext };
