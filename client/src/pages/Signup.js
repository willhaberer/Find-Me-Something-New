import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

import Auth from "../utils/auth";

import "../styles/Signup.css";

const Signup = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div id="container">
      <div>
        <h4 id="formHeader">Signup on FMSN</h4>
        {data ? (
          <p>
            Coming Soon: Success! You may now head{" "}
            <Link to="/profile">to your profile</Link>
          </p>
        ) : (
          <form>
            <input
              value={formState.email}
              name="email"
              onChange={handleChange}
              type="email"
              placeholder="email"
            />
            <input
              value={formState.username}
              name="username"
              onChange={handleChange}
              type="text"
              placeholder="username"
            />
            <input
              value={formState.password}
              name="password"
              onChange={handleChange}
              type="password"
              placeholder="Password"
            />
            <button id="btn" type="button" onClick={handleFormSubmit}>
              Submit
            </button>
          </form>
        )}

        {error && <div>{error.message}</div>}
      </div>
    </div>
  );
};

export default Signup;
