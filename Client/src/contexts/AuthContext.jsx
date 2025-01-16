import { createContext, useState, useContext } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types'; 

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(() => {
    return localStorage.getItem('authTokens')
      ? JSON.parse(localStorage.getItem('authTokens'))
      : null;
  });

  const [user, setUser] = useState(() => {
    return localStorage.getItem('authTokens')
      ? JSON.parse(localStorage.getItem('authTokens')).user
      : null;
  });

  const login = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:8000/api/token/', {
        username,
        password,
      });
      const { access, refresh } = response.data;

      // Save tokens to localStorage
      localStorage.setItem('authTokens', JSON.stringify({ access, refresh }));
      setAuthTokens({ access, refresh });

      // Fetch user data if needed
      const userInfo = await axios.get('http://localhost:8000/api/user/', {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      });

      setUser(userInfo.data);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const logout = () => {
    localStorage.removeItem('authTokens');
    setAuthTokens(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, authTokens, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,  // children can be any renderable React node
  };