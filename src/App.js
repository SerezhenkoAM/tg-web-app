import './App.css';
import Header from './components/Header/Header'
import {Route, Routes} from 'react-router-dom'
import ProductList from './components/ProductList/ProductList'
function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route  index element={<ProductList />} /> 
      </Routes>
    </div>
  );
}

export default App;
//<ProductList />