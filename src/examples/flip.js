import React, { useState } from "react";
import FlipComponent from "../components/flip-component/flip-component";

function FlipExample(props) {
  const [isFlip, toggleIsFlip] = useState(false);
  const onClick = () => {
    toggleIsFlip(!isFlip);
  };
  return (
    <div>
      <div>
        <FlipComponent
          className={"custom-flip-container"}
          comp1={<Login />}
          comp2={<Comp2 />}
          isFlip={isFlip}
          flipVertical={false}
        />
      </div>
      <button onClick={onClick}>Flip</button>
    </div>
  );
}

export default FlipExample;

const Login = () => (
  <div className="login-component">
    <div>
      <h3>Login</h3>
      <form
        onSubmit={(evt) => {
          console.log(evt);
        }}
      >
        <label>
          username <input placeholder="username" type="text" />
        </label>
        <br />
        <label>
          password <input placeholder="password" type="password" />
        </label>
        <br />
        <input type="submit" />
      </form>
    </div>
  </div>
);
const Comp2 = () => (
  <div className="signup-component">
    <div>
      <h3>Sign Up</h3>
      <form
        onSubmit={(evt) => {
          console.log(evt);
        }}
      >
        <label>
          Name <input placeholder="Enter Name" type="text" />
        </label>
        <br />
        <label>
          Email <input placeholder="Enter Email" type="email" />
        </label>
        <br />
        <label>
          username <input placeholder="username" type="text" />
        </label>
        <br />
        <label>
          password <input placeholder="password" type="password" />
        </label>
        <br />
        <input type="submit" />
      </form>
    </div>
  </div>
);
