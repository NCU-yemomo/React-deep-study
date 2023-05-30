import React from "react";
import useName from "../hooks/useName";
export default function UserName() {
  const { value: firstName, onChange: setFirstName } = useName("Ye");
  const { value: lastName, onChange: setLastName } = useName("momo");
  return (
    <div>
      <input className="first-name" type="text" onChange={setFirstName} value={firstName}></input>
      <input className="last-name" type="text" onChange={setLastName} value={lastName}></input>
      <div className="username">
        <p>{firstName}</p>
        <p>{lastName}</p>
      </div>
    </div>
  );
}
