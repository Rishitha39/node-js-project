import './App.css';
import Home from './Components/Home';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom';
import AddEdit from './Components/AddEdit';
import View from './Components/View';
function App() {
  return (
    <div className="App">
      <ToastContainer position='top-center'/>
      <Router>
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/addedit' element={<AddEdit/>}></Route>
        <Route path='/update/:id' element={<AddEdit/>}></Route>
        <Route path='/view/:id' element={<View/>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
