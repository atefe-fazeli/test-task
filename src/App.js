
import { Route, Routes } from 'react-router-dom';
import '../src/components/Styles.css'
import Home from './components/Home';
import Register from './components/Register';
import SignIn from './components/SignIn';
import logo from '../src/images/logo.png'

function App() {
  return (
    <div >
      <div className='mainheader'>
        <img src={logo} alt='logo'></img>
        <h1>Rutilea</h1>
      </div>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Home/>}  />
      </Routes>
    </div>
  );
}

export default App;
