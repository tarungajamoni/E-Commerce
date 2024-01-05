import  Counter  from './features/counter/Counter'
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
      
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/singup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/cart",
    element: <CartPage></CartPage>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
