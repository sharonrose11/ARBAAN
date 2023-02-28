import "./styles.css";
import { Route, Routes } from "react-router-dom";
import User1 from "./routes/User1";
import User2 from "./routes/User2";
import User3 from "./routes/User3";
import User4 from "./routes/User4";
import User5 from "./routes/User5";
import Category from "./routes/category";
import Navbar from "./components/Navbar";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/user1" element={<User1/>}/>
        <Route path="/user2" element={<User2/>}/>
        <Route path="/user3" element={<User3/>}/>
        <Route path="/user4" element={<User4/>}/>
        <Route path="/user5" element={<User5/>}/>
        <Route path="/category" element={<Category/>}/>
      </Routes>
      <Navbar/> 
    </div>
  );
}