import React, { useEffect, useState } from "react";
import './App.css';
import UserCount from "./details/useCount";
import UserName from "./details/userName";
import UserDetails from "./userDetails";

export const ContextAPI = React.createContext();

function App() {
  const [state, setState] = useState({
    data: [],
    name: '',
    count: 0,
    userNames:[]
  });

  useEffect(() => { getTableData(); }, []);
  const getTableData = async () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setState(state => ({ ...state, data })));
  };
  console.log("jkjkj", state)
  return (
    <ContextAPI.Provider value={[state, setState]}>
      <UserDetails />
      <UserName />
      <UserCount />
    </ContextAPI.Provider>
  );
}

export default App;


