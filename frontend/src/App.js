import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/customers/home'
import AddItems from './components/items/addItems';
import Header from './components/navigations/header';
import EditItems from './components/items/editItems';

function App() {
  return (


    <Router>
        <Header/>
        {/* <Route path="/" element={<Header/>}/> */}

      <Routes>

       <Route exact path="/" element={<Home/>} />
       <Route exact path="/add" element={<AddItems/>} />
       <Route exact path="/edit" element={<EditItems/>} />
     
       </Routes> 
     </Router>

    
  );
}

export default App;