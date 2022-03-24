import {useState} from 'react';
import './App.css';

function App() {

  const [user, setUser] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const submit = e => {
    e.preventDefault();
    setSubmitted(!submitted)
  } 



  return (
    <div className="App">
      <form onSubmit={submit}>
        <input 
        type='text'
        name="user[username]"
        value={user.name}
        onChange={e => setUser({...user, username: e.target.value})}
        placeholder="User Name"/> <br/>
        <input
        type='email'
        name="user[email]"
        value={user.email}
        onChange={e => setUser({...user, email: e.target.value})}
        placeholder="User Email"/> <br/>
        <input
        type='password' 
        name="user[password]"
        value={user.password}
        onChange={e => setUser({...user, password: e.target.value})}
        placeholder="Password"/> <br/>
        <input
        type='password'
        name="user[passwordrepeat]"
        value={user.passwordrepeat}
        onChange={e => setUser({...user, passwordrepeat: e.target.value})}
        placeholder="Repeat Password"/> <br/>

        <button>Submit</button>
        
      </form>

      {
          submitted &&
          <section>
            <h1>Your Information</h1>
            <ul>
              <li>Username: {user.username} </li>
              <li>Email: {user.email} </li>
              <li>Password: {user.password} </li>
              <li>Password Repeat: {user.passwordrepeat} </li>
            </ul>
          </section>
        }

    </div>
  );
}

export default App;
