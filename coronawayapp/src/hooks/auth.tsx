import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../services/api';
import { AxiosResponse } from 'axios';

interface AuthState {
  token: string;
  userWithoutPassword: object;
}

interface SignInCredentials {
  cpfOrCnpj: string;
  password: string;
}

interface AuthContextData {
  user: object;
  loading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  tokenAuth: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);
  const [tokenAuth, setTokenAuth] = useState("");

  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      const [token, userWithoutPassword] = await AsyncStorage.multiGet([
        '@coronaway:token',
        '@coronaway:userWithoutPassword',
      ]);

      if (token[1] && userWithoutPassword[1]) {
        setData({ token: token[1], userWithoutPassword: JSON.parse(userWithoutPassword[1]) });
      }

      setLoading(false);
    }

    loadStoragedData();
  }, []);

  const signIn = useCallback(async ({ cpfOrCnpj, password }) => {
    let response;
    console.log('Auth:     ->   ', cpfOrCnpj, password);

    if (cpfOrCnpj.length === 11) {
      response = await api.post('/userSessions', {
        cpf: cpfOrCnpj,
        password,
      });
    } else {
      response = await api.post('/establishmentsSessions', {
        cnpj: cpfOrCnpj,
        password,
      });
    }

    const { token, userWithoutPassword } = response.data;
    console.log("token/userWithoutPassword -> ", token, " ", userWithoutPassword)
    setTokenAuth(token)
    console.log("token auth -> ", token)

    await AsyncStorage.multiSet([
      ['@coronaway:token', token],
      ['@coronaway:userWithoutPassword', JSON.stringify(userWithoutPassword)],
    ]);

    api.defaults.headers.authorization = `Bearer ${token}`
    setData({ token, userWithoutPassword });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@coronaway:userWithoutPassword', '@coronaway:token']);

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.userWithoutPassword, signIn, signOut, loading, tokenAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
