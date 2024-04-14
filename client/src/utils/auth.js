const TOKEN_KEY = 'auth-token';
const USER_TYPE_KEY = 'user-type';

export const login = (authData) => {
  localStorage.setItem(TOKEN_KEY, authData.token);
  localStorage.setItem(USER_TYPE_KEY, authData.userType);  
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_TYPE_KEY);
};

export const isLogged = () => {
  const token = localStorage.getItem(TOKEN_KEY);
  return !!token;
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const getUserType = () => {
  return localStorage.getItem(USER_TYPE_KEY);
};

export const setAuthHeaders = () => {
  const token = getToken();
  if (token) {
    return { Authorization: `Bearer ${token}` };
  }
  return {};
};
