import { useDispatch,useSelector } from "react-redux";
import {setNewTask, setUpdatedTask, setDeleteId} from "./productSlice"
// import "./Todo.css";
const Product =() => {
    const {tasks, errorMessage, newTask} = useSelector((store)=>store.product);
    const dispatch = useDispatch();
    return (
        <div className="app">
            <h2>Product Tasks</h2>
            {/* <h3>CRUD using ReactSaga</h3> */}
            <div className="pdt"></div>
                <input
                 type="text"
                value={newTask}
                onChange={(e) => {
                    dispatch(setNewTask(e.target.value));
                }}
                ></input>
                <button onClick={() => {
                const newId = Math.max(...tasks.map((product) => product.id));
                dispatch(
                    {type: "CREATE_Product_SAGA",
                    postData:
                    {
                        id: Number(newId) + 1,
                        product:newTask,
                    }
                });
                }}>create</button>
                <button onClick={() => dispatch({type:"READ_Product_SAGA"})}>Read</button>
                <h2>{errorMessage && errorMessage}</h2>
                <ul>
                    {tasks.map(
                        (curTask) => (
                        <li key={curTask.id}>
                            <input type="text"
                            value={curTask.product}
                            onChange={(e)=>{
                                dispatch(setUpdatedTask({id: curTask.id,product:e.target.value}));
                            }}></input>
                            <button
                            onClick={()=>{
                                dispatch(
                                    {
                                    type:"UPDATE_Product_SAGA",
                                    putData:{
                                        id:curTask.id,
                                        product: curTask.product,
                                        price: curTask.price
                                    }
                                });
                            }} >
                            Update
                            </button>
                            <button onClick={()=>{
                    dispatch(setDeleteId({delId: curTask.id}));
                    dispatch({ type:"DELETE_Product_SAGA",
                    delData: {
                        id:curTask.id}})
                            }}>
                            Delete
                            </button>
                    </li>
                    ))};
                    </ul>
                    </div>
                );
                }
export default Product;

// {/* <button onClick={()=>{dispatch(deposit(Number(amount)))}}> Deposit</button>
            // <button onClick={()=>{dispatch(withdraw(amount))}}>Withdraw </button>
            // // <div>BankBalance:{bankbalance}</div> */}
