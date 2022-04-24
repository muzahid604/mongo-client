import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './componetnt/Home/Home';
import AddUser from './componetnt/AddUser/AddUser';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/adduser' element={<AddUser></AddUser>}></Route>
      </Routes>
    </div>
  );
}

export default App;
