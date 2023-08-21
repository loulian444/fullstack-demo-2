import { useState } from "react";
import { Link } from "react-router-dom";

const RegisterForm = ({ token, setToken }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const registerHandler = async (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      try {
        const result = await fetch(`/auth/register`, {
          method: `POST`,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ firstName, lastName, username, password }),
        });

        const data = await result.json();

        if (data.token) {
          setToken(data.token);
        } else {
          alert(`registration failed!!`);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert(`password does not match!!!`);
    }
  };

  return (
    <>
      {token ? (
        <>
        <h1>Successfully Registered!</h1>
        <Link to={`/`}>Log In</Link>
        </>
      ) : (
        <>
          <h1>Register</h1>
          <form onSubmit={registerHandler}>
            <label>
              First Name:{" "}
              <input
                type="text"
                name="firstName"
                onChange={(event) => setFirstName(event.target.value)}
                required
              />
            </label>
            <br />
            <label>
              Last Name:{" "}
              <input
                type="text"
                name="lastName"
                onChange={(event) => setLastName(event.target.value)}
                required
              />
            </label>
            <br />
            <label>
              Username:{" "}
              <input
                type="text"
                name="username"
                onChange={(event) => setUsername(event.target.value)}
                required
              />
            </label>
            <br />
            <label>
              Password:{" "}
              <input
                type="password"
                name="password"
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </label>
            <br />
            <label>
              Confirm Password:{" "}
              <input
                type="password"
                name="confirmPassword"
                onChange={(event) => setConfirmPassword(event.target.value)}
                required
              />
            </label>
            <br />
            <button>Submit</button>
          </form>
        </>
      )}
    </>
  );
};

export default RegisterForm;
