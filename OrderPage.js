import {useEffect, useState, useContext} from "react";
// import Addquantity from "./Addquantity";
import { appContext } from "./App";
// import Cart from "./Cart";

const Order=()=>{
    const [name, setName] = useState(""); 
    const [tasks, setTasks] = useState([]);
    // const [products, setProducts] = useState([]);
    const appCtx = useContext(appContext);
    function readTask() {
        fetch("http://localhost:4000/lists")
        .then((response) => response.json())
        .then((data) =>setTasks(data.filter((tasks)=>tasks.product.includes(name))))
        .catch((error)=>{console.error(error);})
         
    };
    // useEffect(()=>{readTask(tasks)},[name]);
    console.log(tasks);
    // function readProduct(){
    //     fetch("http://localhost:4000/lists")
    //     .then((response) => response.json())
    //     .then((data)=>{setProducts(data);})
    //     .catch((error)=>{console.error(error);})
    //     .then((data) =>setProducts(data.filter((product)=>product.product.includes(name))));
    // }
    const addQty=(id,qty)=>{
        const newProducts = [...tasks];
        newProducts.map((newProduct)=>{if(newProduct.id === id){
            newProduct.quantity = qty+1;
            newProduct.amount = newProduct.price * newProduct.quantity;
        }
    return newProduct;
});
setTasks(newProducts);
};
const minusQty = (id,qty)=>{
    const newProducts = [...tasks];
    newProducts.map((newProduct)=>{if(newProduct.id === id){
        newProduct.quantity = qty-1;
        newProduct.amount = newProduct.price * newProduct.quantity;
    }
    return newProduct;
});
setTasks(newProducts);
};
const cartAdd = (tasks)=>{
    let newCart = [];
    if (appCtx.addToCart.length === 0) {
        appCtx.setAddToCart([
            {
                id:tasks.id,
                product:tasks.product,
                price:tasks.price,
                quantity:tasks.quantity,
                amount:tasks.amount,
            },
        ]);
    }
    else{
        if(appCtx.addToCart.some((cartProduct)=> cartProduct.id === tasks.id)){
            newCart= appCtx.addToCart.map((cart)=>{
                if(cart.id === tasks.id){
                    return{
                        ...cart,
                        quantity:tasks.quantity,
                        amount:tasks.amount,
                    };
                }
                return cart;
            });
        }else{
            newCart = [
                ...appCtx.addToCart,
                {
                id:tasks.id,
                product:tasks.product,
                price:tasks.price,
                quantity:tasks.quantity,
                amount:tasks.amount,
                },
            ];
        }
        appCtx.setAddToCart(newCart);
    }
};
return(<div className="odr">
        <h2>ORDER PAGE</h2>
        <label>search</label> 
        <input type="text" value={ name } onChange={(e)=>setName(e.target.value)}></input><br></br>
        <h2>{name}</h2>
        <button onClick={()=>{readTask()}}>READ</button> 
        <ul>
            {tasks.map((tasks)=>(<li key={tasks.id}>
                <div className="product">
                    <div className="name">
                        <label>{tasks.product}</label>
                    </div>
                    <div className="price">
                        <label>Price:</label>
                        <label>{tasks.price.toLocaleString("en-IN",{style:"currency",currency:"INR",})}</label>
                    </div>
                    <div className="qty">
                        <label>Quantity:</label>
                        <button className="add" onClick={()=>addQty(tasks.id,tasks.quantity)}>+</button>
                        <label>{tasks.quantity}</label>
                        <button className="sub" onClick={()=>minusQty(tasks.id,tasks.quantity)}
                            disabled={tasks.quantity?false:true}
                        >-</button>
                    </div>
                    <div className="Amt">
                        <label>Amount:</label>
                        <label>{tasks.amount.toLocaleString("en-IN",{style:"currency",currency:"INR",})}</label>
                    </div>
                    <button onClick={()=>cartAdd(tasks)}
                        disabled={tasks.quantity?false:true}
                    >ADD TO CART</button>
                </div>
            </li>))}
        </ul>
        {/* {appCtx.addToCart.length>0 && <Cart/>} */}
        </div>);
}
export default Order;

                      
        // <input type="text" value={ name } onChange={(e)=>setName(e.target.value)}></input><br></br>
        // <h2>{name}</h2>

        // <h3>LIST OF PRODUCTS</h3>        
        // <ul>{tasks.map(
        //     (product)=>(<li key={product.id}>{product.product}{product.price}<br></br>
        //     <div className="aqty">
        // <Addquantity/>
        // </div>
        // <button onClick={()=>addToCart(product)}>Add to cart</button>
        // </li>))}
        // </ul>
    // const [name, setName] = useState(""); 
    // const [tasks, setTasks] = useState([]);
    // const [price,setPrice] = useState('');
    // const appCtx=useContext(appContext);
    
    // const [amount,setAmount] = useState(0);
    // function readTask() {
    //     fetch("http://localhost:4000/lists")
    //     .then((response) => response.json())
    //     .then((data) =>setTasks(data.filter((product)=>product.product.includes(name))));
         
    // };
    // useEffect(()=>{console.log("Use Effect Is Called")},[]);
    // useEffect(()=>{console.log(name)},[name]);
    // useEffect(()=>{console.log(tasks)},[tasks]);
    // useEffect(()=>{readTask(tasks)},[name]);
    // console.log(tasks);
    // const addToCart=(product)=>{
    //     console.log("inside add to cart");
    //     console.log(product);
    //     appCtx.setAddToCart([product]);
    //     console.log(appCtx.addToCart);

    // }
    
    
//     return(<div className="odr">
//         <h2>ORDER PAGE</h2>
//         <label>search</label> 
                      
//         <input type="text" value={ name } onChange={(e)=>setName(e.target.value)}></input><br></br>
//         <h2>{name}</h2>

//         <h3>LIST OF PRODUCTS</h3>        
//         <ul>{tasks.map(
//             (product)=>(<li key={product.id}>{product.product}{product.price}<br></br>
//             <div className="aqty">
//         <Addquantity/>
//         </div>
//         <button onClick={()=>addToCart(product)}>Add to cart</button>
//         </li>))}
//         </ul>
//         </div>);
// }
// export default Order;


//  <label>price</label> 
        //  <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)}></input>  
        //  <button onClick={()=>{readTask()}}>Read</button>

        // {product.price}{product.product}
        