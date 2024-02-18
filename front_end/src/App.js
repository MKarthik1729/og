import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="" exact element={<Home />} />
          <Route path="login" exact element={<Login />} />
          <Route path="register" exact element={<Register />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
