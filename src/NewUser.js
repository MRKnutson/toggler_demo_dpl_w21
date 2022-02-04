import {useState} from "react"
const NewUser = (props)=> {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const handleSubmit = (event) => {
    // by default we are refreshing the page here
    // we don't want to refresh page in single page app
    event.preventDefault();
    // get values from form
    console.log("firstName:", firstName);
    props.x({id: Math.random(), first_name: firstName, last_name: lastName, email: email})

  }
  return (
    <div className ="user-form">
      <h1>New User Form:</h1>
      <form onSubmit = {handleSubmit}>
        <p>First Name:</p>
        <input 
        value = {firstName} 
        onChange={(e)=>setFirstName(e.target.value)} 
        />
        <p>Last Name:</p>
        <input 
        value = {lastName}
        onChange = {(e)=>setLastName(e.target.value)}
        />
        <p>Email:</p>
        <input 
        value = {email}
        onChange = {(e)=>setEmail(e.target.value)}
        />
        <br />
        <button>Add user</button>
      </form>
    </div>
  );
};

export default NewUser;