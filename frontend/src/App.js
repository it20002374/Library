import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/customers/home'
import AddItems from './components/items/addItems';
import Header from './components/navigations/header';
import EditItems from './components/items/editItems';
import Category from './components/customers/category';
import StaffHome from './components/staff/staffHome';

function App() {
  return (


    <Router>
        <Header/>

      <Routes>

       <Route exact path="/" element={<Home/>} />
       <Route exact path="/add" element={<AddItems/>} />
       <Route exact path="/edit" element={<EditItems/>} />
       <Route exact path="/category" element={<Category/>} />
       <Route exact path="/shome" element={<StaffHome/>} />
     
       </Routes> 
     </Router>

    
  );
}

export default App;