import React, {useState} from "react"
import house from "./images/house.jpg"

function Home({user, setUser}) {

  const [signupUsername, setSignupUsername] = useState("")
  const [signupPassword, setSignupPassword] = useState("")
  
  
  const handleSignup = (e) => {
      e.preventDefault()
          fetch("/signup", {
          method: "POST",
          headers: {"Content-Type" : "application/json"},
          body: JSON.stringify({signupUsername, signupPassword})
      })
          .then(resp => resp.json())
          .then(data => setUser(data))
  }

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")


  const handleSubmit = (e) => {
      e.preventDefault()
          fetch("/login", {
          method: "POST",
          headers: {"Content-Type" : "application/json"},
          body: JSON.stringify({username, password})
      })
          .then(resp => resp.json())
          .then(data => {setUser(data)
            setUsername("")
            setPassword("")})
  }

  function handleLogout ()  {
      fetch("/logout", {
      method: "DELETE",
      
      
      })
      setUser(null)
        console.log("got it")
  }


    return (
      
      <div class="homepage">
        <p></p>
        <p>Existing users can login and signoff here.</p>
        <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    autoComplete="off"
                    value={username}
                    onChange = {(e) => setUsername(e.target.value)}
                    />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange = {(e) => setPassword(e.target.value)}
                />
                <button variant="fill" color="primary" type="submit">Login</button>
                
                <button variant="fill" color="red" onClick={handleLogout}>Logout</button>
        </form>
          
          
        <h1>Shady Acres Retirement Home</h1> 
        <img src={house} alt=""></img>
        <h3>Shady Acres is non-HIPAA compliant facility that would have genuine legal troubles using this application in a real-world environment, so this application is just for demonstration purposes.</h3> 
        <p></p>
        <p>If you do not have an account, you can sign up here. You must use a unique username!</p>
        <form onSubmit={handleSignup}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="signupUsername"
                    autoComplete="off"
                    value={signupUsername}
                    onChange = {(e) => setSignupUsername(e.target.value)}
                    />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="signupPassword"
                    autoComplete="current-password"
                    value={signupPassword}
                    onChange = {(e) => setSignupPassword(e.target.value)}
                />
                <button variant="fill" color="primary" type="submit">Create
                </button>
        </form>

      </div>

    );
  }

export default Home;



