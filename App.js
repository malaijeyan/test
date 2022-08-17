import { BrowserRouter, Link, Route, Routes, NavLink } from 'react-router-dom';
import {createContext, useState} from "react"; 
import Cart from './Cart';
import './App.css';
import Home from './Home';
import OrderPage from './OrderPage';
import Product from './Product';
export const appContext = createContext("");

function App(){
  const initialCart=[];
  const [cart, setCart] = useState(initialCart);
  return(
  <BrowserRouter>
  <appContext.Provider value={{addToCart:cart,setAddToCart:(addCart)=>{setCart(addCart);
  console.log(cart);},
  }}>
 
  <div className="app">
  <ul className="line">
  <div className="nav">
 
  <NavLink to="/" activeClassName="active" className="link" to="/">Home</NavLink></div>

  {/* <Link className="link" to="/">{""}Home</Link> <br></br>   */}
  <Link className="link" to="order">{""}Order</Link><br></br>
  <Link className="link" to="product">Product</Link><br></br>
  <Link className="link" to="cart">Cart</Link>
  
  </ul>
  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/order" element={<OrderPage/>}/>
  <Route path="/product" element={<Product/>}/>
  <Route path="/cart" element={<Cart/>}/>
  </Routes>
  </div>
   </appContext.Provider>
   </BrowserRouter>
   );
 }
 export default App;


// import './App.css';
// import Home from './Home';
// import Category from './Category';
// import Product from './Product';
// import Order from './Order';
// import Aboutus from './Aboutus';
// import Contactus from './Contactus';
// import Pagenotfound from './Pagenotfound';
// import User from './User';

// import { BrowserRouter, Link, Route, Routes, NavLink } from 'react-router-dom';
// import {createContext, useState} from "react";

//  export const appContext = createContext("");


//  export default function App(){
//     const [useName, setUseName] = useState ("");
//     return(
//         <BrowserRouter>
//         <appContext.Provider value={{loginUser:useName}}>
//             <div className="app">
//             <div>
//                 <input type="text" value={useName} onChange={(e)=>setUseName(e.target.value)}></input>
//             </div>
//                 <ul>
//                     <li>
//                         <NavLink to="/" activeClassName="active" className="link" to="/">Home</NavLink>
//                     </li>
//                     <li>
//                         <Link className="link" to="category">Category</Link>
//                     </li>
//                     <li>
//                         <Link className="link" to="product">Product</Link>
//                     </li>
//                     <li>
//                         <Link className="link" to="order">Order</Link>
//                     </li>
//                     <li>
//                         <Link className="link" to="aboutus">Aboutus</Link>
//                     </li>
                    
//                 </ul>
//                 <Routes>
//                     <Route path="/" element={<Home/>}/>
//                     <Route path="/category" element={<Category/>}/>
//                     <Route path="/product" element={<Product/>}/>
//                     <Route path="/order" element={<Order/>}/>
//                     <Route path="/aboutus"  element={<Aboutus/>}/>
                        
//                          <Route path="/contactus" element={<Contactus/>}/>

//                     <Route path="*" element={<Pagenotfound/>}/>
//                     <Route path="user/:id" element={<User/>}/>
//                 </Routes>
//             </div>
//             </appContext.Provider>
//         </BrowserRouter>
//     );
// }
// export default App;



//  import './App.css';
// // import Bank from './Bank';
// // import Todo from '../backup/day12/Todo';
// import Todo from './Todo';
// function App(){
//     return(<div className="app">
//   Day 18-React Hooks
//        <Todo/>
//    </div>)
// }
//  export default App; 

// import AddToCart from './AddToCart';
// import './App.css';
//  import Todo from '../backup/day20/Todo';
// import Product from './project/Product';
// import OrderPage from './OrderPage';
//  function App(){
    // return(<div className="app">
     {/* <Product/> */}
    //  <OrderPage/>
     {/* <AddToCart/> */}
   {/* </div>); */}
//  }
//  export default App; 
 //  import './App.css';
//  import Addquantity from './Addquantity';
//  function App(){
//     return(
//         <div className="app">
//             <Addquantity />
//         </div>
//     );
//  }
//  export default App;


// import './App.css';
//import ConditionalRender from './day13/ConditionalRender';
//import Welcome from './Welcome';
//import List from './List';

// import Contactus from './Contactus';
// import Bank from './Bank';
// import Count from './Count';
// function App()
// {
//  return(<div className="app">

// <Contactus />
//  </div>);
 
 
// }
  
// export default App;
// import './App.css';
// import Create from '../backup/day10/Create';

// // import Contactus from './Contactus';
// function App(){
//     return(<div className="app">
//         <Create />
//     </div>);
    
// }
// export default App;

