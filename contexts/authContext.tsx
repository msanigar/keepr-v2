import React, { createContext, useState, useEffect } from 'react';
import netlifyIdentity, { User } from 'netlify-identity-widget';

interface AppContextInterface {
  user: User | null;
  login: () => void;
  logout: () => void;
  authReady?: boolean;
}

export const AuthContext = createContext<AppContextInterface>({
  user: null,
  login: () => {},
  logout: () => {},
  authReady: false,
});

interface Props {
  children: JSX.Element[];
}

const AuthContextProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // on login
    netlifyIdentity.on('login', (user) => {
      setUser(user);
      netlifyIdentity.close();
    });

    netlifyIdentity.on('logout', () => {
      setUser(null);
    });

    netlifyIdentity.init();
  }, []);

  const login = () => {
    netlifyIdentity.open();
  };

  const logout = () => {
    netlifyIdentity.logout();
  };

  const context = {
    login,
    logout,
    user,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
