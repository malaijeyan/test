import {takeEvery,call,put} from "redux-saga/effects";
import axios from "axios";
import { readProTask, createProTask, updateProTask, deleteProTask, setErrorMessage } from "./productSlice";
// import {createTodoTask, updateTodoTask, deleteTodoTask, setErrorMessage } from "../backup/project/productSlice";


const url= "http://localhost:4000/lists";

let callAPI = async({url,method,data})=>{
    return await axios({url,method,data,});
}

export function* createProductSaga(action){
    try{
        let {data} = yield call(()=>callAPI({url:url, method:"POST",data:action.postData}));
        console.log(data);
        yield put(createProTask(data));
    }
    catch(e){
        yield put(setErrorMessage(e.message));
    }
}
export function* readProductSaga(action){
    try{
        let {data} = yield call(()=>callAPI({url:url}));
        console.log(data);
        yield put(readProTask(data));
    }
    catch(e){
        yield put(setErrorMessage(e.message));
    }
}
export function* updateProductSaga(action){
    try{
        let {data} = yield call(()=>callAPI({url:`${url}/${action.putData.id}`,method:"PUT",data:action.putData}));
        console.log(data);
        yield put(updateProTask(data));
    }
    catch(e){
        yield put(setErrorMessage(e.message));
    }
}
export function* deleteProductSaga(action){
    try{
        let {data} = yield call(()=>callAPI({url:`${url}/${action.delData.id}`,method:"DELETE"}));
        console.log(data);
        yield put(deleteProTask(data));
    }
    catch(e){
        yield put(setErrorMessage(e.message));
    }
}
export default function* rootSaga(){
    yield takeEvery("CREATE_Product_SAGA",createProductSaga);
    yield takeEvery("READ_Product_SAGA",readProductSaga);
    yield takeEvery("UPDATE_Product_SAGA",updateProductSaga);
    yield takeEvery("DELETE_Product_SAGA",deleteProductSaga);
}