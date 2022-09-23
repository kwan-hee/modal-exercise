import { useState } from 'react';
import './App.css';
import AddUser from './component/Users/AddUser';
import UserList from './component/Users/UserList';

function App() {
   const [userList, setUserList] = useState([])
  
   const addUserHandler = (uName, uAge) =>{
    setUserList((prevUsersList)=>{
      return [ ...prevUsersList,  {name:uName, age:uAge , id :Math.random.toString() }]
    })
   }
  return (
  <div>
    <AddUser onAddUser={addUserHandler}/>
    <UserList users={userList}/>
  </div>
  )
}

export default App;
