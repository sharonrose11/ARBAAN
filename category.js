import Navbar from "../components/Navbar";
import "../components/AboutUsStyles.css";

function User2() {
  return (
  <>
    <Navbar/>
   <h1 className="user">POST CATEGORIES</h1>
  
   
<main class="main-container">
       
 
       <div class="main-cards">
       <center>
<table>
  <tr>
  <div class="card">
           <div class="card-inner">
             <p class="text-primary">POSTS</p>
             <span class="material-icons-outlined text-blue">inventory_2</span>
           </div>
           <span class="text-primary font-weight-bold">400</span>
         </div>
  </tr>
  <tr>
  <div class="card">
           <div class="card-inner">
             <p class="text-primary">COMMENTS</p>
             <span class="material-icons-outlined text-orange">add_shopping_cart</span>
           </div>
           <span class="text-primary font-weight-bold">77</span>
         </div>
  </tr>
  <tr>
  <div class="card">
           <div class="card-inner">
             <p class="text-primary">TODO LIST</p>
           </div>
           <span class="text-primary font-weight-bold">410</span>
         </div>
  </tr>
</table>
        
</center>

        

       </div>

     
     </main>


 
  </>
  );
}

export default User2;