import { useState } from "react";
import AddUser from "./components/Users/Adduser";
import UserList from "./components/Users/Userslist";

const ADD_expence = [
  {
    id:1,
    name: "patowary",
    age: 21,
  },
  {
    id:2,
    name: "fahim",
    age: 15,
  },
];

function App() {
  const [usersList, steUsersList] = useState(ADD_expence);

    const addUserHandler =(uName, uAge)=>{
      steUsersList((prevUsersList)=>{
        return [...prevUsersList, {id:Math.random(), name: uName, age:uAge}];
      });
    };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList  users={usersList}/>
    </div>
  );
}

export default App;
