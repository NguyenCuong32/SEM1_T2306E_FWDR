
import { BrowserRouter,Routes, Route, Link } from "react-router-dom";
import './App.css';
import Table from "./baithi/table"
import User from "./baithi/User"
import Home from './baithi/home';


function App() {
  
   
          
  return (
    <div className="App">  
    <BrowserRouter>
    
     
     

        <header style={{margin:"20px"}}>
            <Link to="/" className="home">Home</Link>
            <Link to='use' className="User">User</Link>
            <Link to="Table" className="Table">Table</Link>
          
         </header>
      
        <div style={{minHeight: "calc(100vh - 200px)",paddingBottom:"100px"}}> 
         <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Table' element={<Table />} /> 
          <Route path='use' element={<User />} /> 
          </Routes>
         </div> 
        
     
        <footer>
          <div style={{fontWeight:"500", marginLeft:"20px"}}>Adress:No 8,  Tôn Thất Thuyết</div>
          <div style={{marginRight:"20px"}}>
          <Link to='useInformation' className="Zalo">Zalo</Link>
          <Link to="product" className="facebook">facebook</Link>
          </div>
        </footer>
      
    </BrowserRouter>
       
    </div>
      
  );
}

export default App;
