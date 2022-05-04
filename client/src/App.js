import './App.css';
import {Routes, Route} from 'react-router-dom';
import UserLogin from './components/LoginForm/UserLogin/UserLogin';
import AdminLogin from './components/LoginForm/AdminLogin/AdminLogin';
import Layout from './pages/Layout/Layout';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>} />
        <Route path="/login" element={<UserLogin/>} />
        <Route path="/admin/login" element={<AdminLogin/>} />
      </Routes>
    </div>
  );
}

export default App;
