import './App.css';
import Header from './components/Header/Header'
import {Route, Routes} from 'react-router-dom'
//import ProductList from './components/ProductList/ProductList'
import ConfirmList from './components/ConfirmList/ConfirmList';
import Main from './components/Main/Main'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes> 
        <Route  index element={<Main/>} /> 
        <Route  path="/confirm" element={<ConfirmList  addedItem="addedItem" />} /> 
      </Routes>
    </div>
  );
}

export default App;