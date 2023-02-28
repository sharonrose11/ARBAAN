import Navbar from "../components/Navbar";
import React, { useState } from "react";
import "../components/AboutUsStyles.css";

 function User4() {
  const [enteredText, setEnteredText] = useState("");
  const [submittedText, setSubmittedText] = useState(null);
  const textChangeHandler = (i) => {
    setEnteredText(i.target.value);
    //console.log(i.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setSubmittedText(enteredText);
    setEnteredText("");
  };

  return (
    <div className="formuser">
      <h1>Get user input</h1>
      <form onSubmit={submitHandler}>
      
      
      <center>
      <table>
        <tr>
          <td><label for="name">Name : </label></td>
          <td><input type="text" required/></td>
        </tr>
        <tr>
          <td><label for="post">Posts : </label></td>
          <td> <input type="number" placeholder="POST" required/></td>
        </tr>
        <tr>
          <td><label for="comment">Comments : </label></td>
          <td>  <input type="number" placeholder="COMMENTS" required/></td>
        </tr>
        <tr>
          <td><label for="todo">Todo List : </label></td>
          <td>  <input type="text" placeholder="todo list" required/></td>
        </tr>
      </table>
    </center>
      </form>

      {submittedText && (<p>You just typed: {submittedText}</p>)}
    </div>
  );
}
export default User4;