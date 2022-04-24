import './App.css';
import React from 'react';

function App() {
  const [users, setUsers] = React.useState([]);

  const funcaoAsync = async () => 
  { 
    const res = await fetch("https://reqres.in/api/users/"); 
    const json = await res.json(); 
    setUsers(json.data);   
  }; 

  funcaoAsync()

  return (
    <div className="flex">
      <div className="flex">
        {users.map( user => { return ( 
            <div class="card" key={user.id}> 
                <p> <strong> {user.first_name} </strong> </p> 
                <p> {user.email} </p> 
                <img key={user.avatar} src= {user.avatar} /> 
            </div> ); })}
      </div>
    </div>
  );
}

export default App;
