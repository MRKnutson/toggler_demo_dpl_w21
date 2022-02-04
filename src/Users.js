import { useState, useEffect } from "react"
import axios from 'axios'
import NewUser from "./NewUser";
const Users = (props) => {
  const [users, setUsers] = useState([]);
  // when component mounts(i.e., renders to DOM)
  // want to grab data from reqres site
  // the empty array makes this (function we passed it) run only on mount
  // useEffect(callback(function),[] (empty array))
 
  useEffect(()=>{
    // do stuff when component mounts
    console.log("mounted");
    getUsers();
  }, []);

  const addUser = (user)=>{
    // STEP 1 add user (from Form) to DB: skip for now
    // STEP 2 is update the UI
    let newUsersArray = [user,...users];
    setUsers(newUsersArray);
  };
  const deleteUser = (id) => {
    console.log(id)
    // TODO: API call todelete user from database
    // remove user from the UI
    let filteredUsers = users.filter(u=>u.id !== id);
    setUsers(filteredUsers)
  };

  const getUsers = async () =>{
    // this is where we need to do API call (using axios)
    // this actually pauses code and waits for API call to finish
    let response = await axios.get("https://reqres.in/api/users");
    console.log(response.data.data);
    setUsers(response.data.data);
  };

  const renderUsers = () => {
    if(users.length === 0) {
      return <p>No Users</p>
    }
    return users.map(user=>{
      return (
        <div key = {user.id} className="user-container">
          <h1>{user.first_name} {user.last_name}</h1>
          <p>{user.email}</p>
          <button onClick = {()=> deleteUser(user.id)}>Delete User</button>
        </div>
      );
    });
  };
  return(
    <div className = "users">
      <p>users here</p>
      {/* <button>new user</button> */}
      <NewUser x={addUser}/>
      <div className="users-list">
      {renderUsers()}
      </div>
    </div>
  );
};

export default Users;