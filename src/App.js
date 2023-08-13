import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Drawer from './Layouts/Drawer';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='md:hidden'>
          <Drawer />
        </div>
        <Routes>
          <Route path='/' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
