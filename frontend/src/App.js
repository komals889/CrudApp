import logo from './logo.svg';
 
import {BrowserRouter, Route,  Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signip from './components/Signip';
import Indexpage from './components/Indexpage';
import Admin from './components/Admin';
function App() {
  return (
    <BrowserRouter>
        <Navbar/>
       <Routes>
        <Route path='/' element={<Login/>} exact/>
        <Route path='/signUp' element={<Signip/>} exact/>
        <Route path='/indexpage' element={<Indexpage/>} exact/>
        <Route path='/admin' element={<Admin/>} exact/>
       </Routes>
       
    </BrowserRouter>
  );
}

export default App;
