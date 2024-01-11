import  {Counter}  from './features/counter/Counter'
import './App.css';
import Home from './pages/Home'
import LoginPage from './pages/LoginPage';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import SignupPage from './pages/SignupPage';
import Cart from './features/cart/Cart';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetail from './features/product/components/ProductDetails';
import ProductDetailPage from './pages/ProductDetailPage';
import Protected from './features/auth/components/Protected';
import { fetchItemsByUserIdAsync } from './features/cart/cartSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoggedInUser } from './features/auth/authSlice';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Protected>
      <Home></Home>
      </Protected>),
      
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/cart",
    element: (<Protected><CartPage></CartPage></Protected>),
  },
  {
    path: "/checkout",
    element: <Protected><Checkout></Checkout></Protected>,
  },
  {
    path: "/product-detail/:id",
    element: (<Protected>
      <ProductDetailPage></ProductDetailPage>

    </Protected>),
  },
]);

function App() {

  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  useEffect(()=>{
    if(user) {
      dispatch(fetchItemsByUserIdAsync(user.id))
      
          }
    
  },[dispatch, user])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
