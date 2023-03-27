import {Routes,Route} from "react-router-dom"
import './App.css';
import Home from './pages/Home';
import UserInfo from './pages/UserInfo';

function App() {

  return (
   <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/userinfo/:id" element={<UserInfo/>} />
      </Routes>
    </div>
  );
}

export default App;
