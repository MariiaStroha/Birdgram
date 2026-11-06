import './App.css';
import axios from "axios";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState('');
  const[password, setPassword] = useState('');
  const[passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleClick = async (e) => {
    if(password !== passwordConfirmation) {
      // add a text under the form saying paswords do not match
    }
    e.preventdefault();

    axios.post('/api/sign-up', {
      username: username,
      password1: password,
      password2: passwordConfirmation
    }).then((response) => {
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
      alert(error);
    })
  }
  return (
    <form method="post" onSubmit={handleClick}>
      <input type="text" name="username" placeholder="Username" onChange={(e) => {setUsername(e.target.value)}}/>
      <input type="password" name="password"placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
      <input type="password" name="passwordConfirmation"placeholder="Confirm your password" onChange={(e) => {setPasswordConfirmation(e.target.value)}}/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
