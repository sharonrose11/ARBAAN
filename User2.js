import Navbar from "../components/Navbar";
import "../components/AboutUsStyles.css";
import { PieChart } from 'react-minimal-pie-chart';

function User2() {
  return (
  <>
    <Navbar/>
   <h1 className="user">USER 2</h1>


      <main class="main-container">
       
        <div class="charts">

<div class="charts-card">
  <p class="chart-title">SHARON ROSE</p>
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
            <span class="text-primary font-weight-bold">249</span>
          </div>

          <div class="card">
            <div class="card-inner">
              <p class="text-primary">COMMENTS</p>
              <span class="material-icons-outlined text-orange">add_shopping_cart</span>
            </div>
            <span class="text-primary font-weight-bold">83</span>
          </div>

          <div class="card">
            <div class="card-inner">
              <p class="text-primary">TODO LIST</p>
              <span class="material-icons-outlined text-red">notification_important</span>
            </div>
            <span class="text-primary font-weight-bold">4</span>
          </div>

        </div>

      
      </main>
 
  </>
  );
}

export default User2;