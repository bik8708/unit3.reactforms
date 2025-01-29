import React, { useState } from "react";

function SignUpForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitting");
    try {
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <>
      <h2>Sign up Form</h2>
      {error?.message && <p>Error Signing Up</p>}
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username: </p>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          <p>Password:</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button style={{ display: "block" }}>Submit</button>
      </form>
    </>
  );
}

export default SignUpForm;
