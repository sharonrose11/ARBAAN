import Navbar from "../components/Navbar";
import "../components/AboutUsStyles.css";
function User1() {
  return (
    
      <>
    <Navbar/>
   <h1 className="user">USER 1</h1>
   <main class="main-container">
       
       <div class="charts">

<div class="charts-card">
 <p class="chart-title">MAYA S</p>
 <div id="bar-chart"></div>
</div>

</div>
<h1>DASHBOARD</h1>
       <div class="main-cards">

         <div class="card">
           <div class="card-inner">
             <p class="text-primary">POSTS</p>
             <span class="material-icons-outlined text-blue">inventory_2</span>
           </div>
           <span class="text-primary font-weight-bold">400</span>
         </div>

         <div class="card">
           <div class="card-inner">
             <p class="text-primary">COMMENTS</p>
             <span class="material-icons-outlined text-orange">add_shopping_cart</span>
           </div>
           <span class="text-primary font-weight-bold">77</span>
         </div>

         <div class="card">
           <div class="card-inner">
             <p class="text-primary">TODO LIST</p>
             <span class="material-icons-outlined text-red">notification_important</span>
           </div>
           <span class="text-primary font-weight-bold">410</span>
         </div>

       </div>

     
     </main>
  </>

  );
}

export default User1;