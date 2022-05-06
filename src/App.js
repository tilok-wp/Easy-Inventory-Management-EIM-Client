import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import NotfoundPage from './components/NotfoundPage/NotfoundPage';
import ManageItems from './components/ManageItems/ManageItems';
import AddItem from './components/AddItem/AddItem';
import MyItems from './components/MyItems/MyItems';
import Blogs from './components/Blogs/Blogs';
import InventoryItem from './components/InventoryItem/InventoryItem';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddBlogItem from './components/AddBlogItem/AddBlogItem';
import RequireAuth from './utility/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/manage-items' element={
          <RequireAuth><ManageItems></ManageItems></RequireAuth>
        }></Route>
        <Route path='/add-item' element={
          <RequireAuth><AddItem></AddItem></RequireAuth>
        }></Route>
        <Route path='/my-items' element={
          <RequireAuth><MyItems></MyItems></RequireAuth>
        }></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth><InventoryItem></InventoryItem></RequireAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/add-blog' element={<AddBlogItem></AddBlogItem>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotfoundPage></NotfoundPage>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
