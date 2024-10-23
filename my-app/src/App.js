
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Welcome from './components/Welcome/Welcome';
import CreateBankInfo from './components/CreateBankInfo';
import UpdateBankInfo from './components/UpdateBankInfo';
import BankInfos from './components/BankInfos';


function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path='/' element={<Welcome />}></Route>
          <Route path='/register' element={<Register />} ></Route>
          <Route path="/login" element={<Login />}> </Route>
          <Route path='/h' element={<BankInfos />}></Route>
          <Route path='/createAccount' element={<CreateBankInfo />}></Route>
          <Route path='/updateAccount' element={<UpdateBankInfo />}> </Route>

       </Routes>
    </BrowserRouter>
  );
}

export default App;
