import { createContext } from 'react';
interface MyContextType {
    username: string;
    setUser: (username: string) => void;
    usersId: number;
    setUsersId: (usersId: number) => void;
  }
export const MyContext = createContext<MyContextType>({
    username: '', setUser: () => { },
    usersId: 0, setUsersId: () => { }
  });