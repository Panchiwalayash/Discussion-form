import Login from './components/login/Login'
import Register from './components/register/Register'
import Home from './components/Home'
import Trending from './components/Trending';
import Navbar from './components/Navbar/Navbar';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Que_Element from './components/Que_Element';

function App() {
  const user = localStorage.getItem('user');
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={user ? <Home /> : <Login />}>
        </Route>
        <Route exact path='/question/:id' element={<Que_Element />}></Route>
        <Route exact path='/login' element={user ? <Navigate to="/" /> : <Login />}>

        </Route>
        <Route exact path='/register' element={user ? <Navigate to="/" /> : <Register />}>
        </Route>
        <Route exact path='/trending' element={<Trending />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
