import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import './app.css'
import Home from './components/pages/Home'

function App() {
  return (
    <>
      <Topbar/>
     <div className="container">
       <Sidebar/>
      
       <Home/>
       
    
       </div>
       
    
     
    </>
  );
}

export default App;
