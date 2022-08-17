import { useState } from "react";
import AddUser from "./components/Users/Adduser";
import UserList from "./components/Users/Userslist";


function App() {
  const [allData, steAllData] = useState();


  return (
    <div>
      <AddUser />
      <UserList />
    </div>
  );
}

export default App;
