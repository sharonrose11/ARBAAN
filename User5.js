import Navbar from "../components/Navbar";

function User5() {
  
  return (
    <>
    <Navbar/>
   <h1 className="user">USER 5</h1>
   <form>
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
  </>
    
  );
}

export default User5;