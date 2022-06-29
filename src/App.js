import './App.css';
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter basename="comento-shop">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
