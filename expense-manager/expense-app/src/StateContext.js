import React, { createContext, useState } from "react";
const UserContext = createContext();

const UserProvider = (props) => {
  const [user, setUser] = useState(null);
  const [userIncome, setUserIncome] = useState(0);
  const [userExpense, setUserExpense] = useState(0);
  const [userSaving, setUserSaving] = useState(0);
  // const [userEvents, setUserEvents] = useState([]);
  const [events, setEvents] = useState([]);
  return (
    <UserContext.Provider
      value={{
        value: [user, setUser],
        value2: [userIncome, setUserIncome],
        value3: [userExpense, setUserExpense],
        value4: [userSaving, setUserSaving],
        // value5: [userEvents, setUserEvents],
        value6: [events, setEvents],
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
