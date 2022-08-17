import {useEffect, useState} from "react";
import Addquantity from "./Addquantity";

const Order=()=>{
    const [name, setName] = useState(""); 
    const [tasks, setTasks] = useState([]);
    const [price,setPrice] = useState('');
    
    
    // const [amount,setAmount] = useState(0);
    function readTask() {
        fetch("http://localhost:4000/lists")
        .then((response) => response.json())
        .then((data) =>setTasks(data.filter((product)=>product.product.includes(name))));
         
    };
    // useEffect(()=>{console.log("Use Effect Is Called")},[]);
    // useEffect(()=>{console.log(name)},[name]);
    // useEffect(()=>{console.log(tasks)},[tasks]);
    useEffect(()=>{readTask(tasks)},[name]);
    console.log(tasks);
    
    
    return(<div className="odr">
        <h2>ORDER PAGE</h2>
        <label>search</label> 
                      
        <input type="text" value={ name } onChange={(e)=>setName(e.target.value)}></input><br></br>
        <h2>{name}</h2>

        <h3>LIST OF PRODUCTS</h3>        
        <ul>{tasks.map(
            (product)=>(<li key={product.id}>{product.product}<br></br>
            </li>))}
        </ul>
        {/* <ul>{tasks.map(
            (product)=>(<li key={product.id}>{product.price}</li>))}</ul> */}
        <label>Amount:</label>
        {/* amount=quantity*price; */}
        {/* <input ></input> */}
        
        {/* <input type="text"></input>     */}
        <div className="aqty">
        <Addquantity/>
        </div>
        <button>Add to cart</button>
        </div>);
}
export default Order;


//  <label>price</label> 
        //  <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)}></input>  
        //  <button onClick={()=>{readTask()}}>Read</button>

        // {product.price}{product.product}
        