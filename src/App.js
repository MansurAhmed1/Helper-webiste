
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import RequireAuth from './components/RequireAuth/RequireAuth';
import ChekOut from './components/Checkout/ChekOut';
import Blog from './components/Blog/Blog';
import AboutMe from './components/Aboutme/AboutMe';
import Error from './components/Error/Error';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={
          <RequireAuth>
            <Home></Home>
          </RequireAuth>
        }></Route>
        <Route path='register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/aboutme' element={
          <RequireAuth>
            <AboutMe></AboutMe>
          </RequireAuth>
        }></Route>
       <Route path='/checkout' element={
        <RequireAuth>
        <ChekOut></ChekOut>
        </RequireAuth>
        } >
       </Route>
       <Route path='/blog' element={
         <RequireAuth>
           <Blog></Blog>
         </RequireAuth>
       }></Route>
       <Route path='*' element={<Error></Error>}></Route>

      </Routes>
   <Footer></Footer>
    </div>
  );
}

export default App;
