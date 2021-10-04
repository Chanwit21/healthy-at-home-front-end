import jwtDecode from 'jwt-decode';
const TOKENNAME = 'TOKEN';

const getToken = () => {
  return localStorage.getItem(TOKENNAME);
};

const setToken = (token) => {
  localStorage.setItem(TOKENNAME, token);
  return;
};

const removeToken = () => {
  localStorage.removeItem(TOKENNAME);
};

const user = getToken() ? jwtDecode(getToken()) : null;

export { getToken, setToken, removeToken, user };
