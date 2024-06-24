import { createContext, useState } from "react";
const UserContext = createContext(undefined);

export default UserContext;
export const Store = ({ children }) => {
  const [data, setData] = useState([
    { id: 1, name: "len", age: 24 },
    { id: 2, name: "Max", age: 25 },
    { id: 3, name: "Max3", age: 25 },
  ]);

  return (
    <UserContext.Provider value={[data, setData]}>
      {children}
    </UserContext.Provider>
  );
};
