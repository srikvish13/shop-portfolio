
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/home/Homepage';
import About from './components/about/About';
import ShopProducts from './components/shopProducts/ShopProducts';

function App() { 
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path="/products" element={<ShopProducts/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
