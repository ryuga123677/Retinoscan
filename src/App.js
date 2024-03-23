import './App.css';
import Navbar from './components/navbar';
import Navbar2 from './components/navbar2';
import Content from './components/content';

function App() {
  return (
    <div>
       <Navbar/>
       <Navbar2/>
       <div className='text-heading'>
         <center>
             <h1>Empowering Healthcare with<br/><span className=''>Artificial Intelligence</span></h1>
         </center>
       </div>
       <Content/>
   
    </div>
  );
}

export default App;
