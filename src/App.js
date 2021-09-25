import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import './app.css'
import Home from './components/pages/Home'
import Chart from './components/charts/Chart';

function App() {
  return (
    <>
      <Topbar/>
     <div className="container">
       <Sidebar/>
       <div className="home">
       <Home/>
       <Chart/>
       </div>
       </div>
       
    
     
    </>
  );
}

export default App;
