import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    tasks:[],
    errorMessage:"",
    newTask:"",
    delId:0,
    quantity:0,amount:0
};

const productSlice = createSlice(
    {
        name:"product",
        initialState,
        reducers:{
            setNewTask: (state,action)=>{
                // state.amount=action.payload
                console.log(action.payload);
                state.newTask=action.payload;
                console.log(state.newTask);
            },
            setUpdatedTask: (state,action)=>{
                state.tasks= state.tasks.map((product)=>{
                    if(product.id === action.payload.id) {
                        product.product = action.payload.product;
                    }
                    return product;
                });
            },
            setDeleteId: (state,action) => {
                state.delId = action.payload.delId;
            },
            // deposit: (state,action)=>{
            //     state.deposit=action.payload
            //     state.bankbalance= state.bankbalance+action.payload
            //     console.log(state.bankbalance);
            // },
            // withdraw: (state,action)=>{
            //     state.withdraw=action.payload
            //     state.bankbalance=state.bankbalance-action.payload
            //     console.log(state.bankbalance);
            // },
            readProTask(state,action){
                console.log(state.tasks);
                console.log(action.payload)
                state.tasks=action.payload;
                console.log("tasks: ",state.tasks);
                state.errorMessage="";
            },
            createProTask(state,action){
                state.tasks=[...state.tasks,action.payload];
                state.newTask = "";
                state.errorMessage="";
            },
            updateProTask(state,action){
                state.errorMessage="";
            },
            deleteProTask(state,action){
                state.tasks = state.tasks.filter((product)=>(product.id!==state.delId));
                state.errorMessage="";
            },
            setErrorMessage(state,action){
                state.errorMessage = action.payload.errorMessage;
            },
        },
    }
);

export const {readProTask,createProTask,updateProTask,deleteProTask,setErrorMessage,setNewTask,setUpdatedTask,setDeleteId} = productSlice.actions;
export default productSlice.reducer;






