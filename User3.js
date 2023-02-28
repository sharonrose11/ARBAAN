import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
function User3() {
  return (
    <>
    <Navbar/>
   <h1 className="user">USER 3</h1>


   <main class="main-container">
       
       <div class="charts">

<div class="charts-card">
 <p class="chart-title">NAVIS</p>
 <div id="bar-chart"></div>
</div>

</div>
<h1>DASHBOARD</h1>
       <div class="main-cards">

     <Link to={"/category"}>    <div class="card">
           <div class="card-inner">
             <p class="text-primary">POSTS</p>
             <span class="material-icons-outlined text-blue">inventory_2</span>
           </div>
           <span class="text-primary font-weight-bold">24</span>
         </div></Link>

         <div class="card">
           <div class="card-inner">
             <p class="text-primary">COMMENTS</p>
             <span class="material-icons-outlined text-orange">add_shopping_cart</span>
           </div>
           <span class="text-primary font-weight-bold">7</span>
         </div>

         <div class="card">
           <div class="card-inner">
             <p class="text-primary">TODO LIST</p>
             <span class="material-icons-outlined text-red">notification_important</span>
           </div>
           <span class="text-primary font-weight-bold">40</span>
         </div>

       </div>

     
     </main>
  </>

  );
}

export default User3;