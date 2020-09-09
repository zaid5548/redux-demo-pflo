/*const redux=require('redux');   //store
const createStore=redux.createStore;  // Create Store

const Buy_Book='Buy_Book';  //action name

const initialState={
    numberOfBooks:10
}

//action creater:wrapping the action in a single function
function buy_Book(){  // action calling and iitialize
    // action 
    return {
        type:Buy_Book,
        info:'My First Redux Code'
    }
}

const Reducer=(state=initialState,action)=>{              //Reducer  
    switch(action.type){
        case 'Buy_Book':return{
            ...state,
            numberOfBooks:state.numberOfBooks-1
        }
        default: return state;
    }
}


// store Initial and Update
const store=createStore(Reducer); //create store
console.log('Initial State',store.getState());
const unsubscribe=store.subscribe(()=>{
    console.log('Upload State value',store.getState())
});
store.dispatch(buy_Book());
store.dispatch(buy_Book());
store.dispatch(buy_Book());
unsubscribe();*/


/*
// Multiple Action

const redux=require('redux');   //store
const createStore=redux.createStore;  // Create Store

const Buy_Book='Buy_Book';  //action name

const initialState={
    numberOfBooks:10,
    numberOfPens:15
}

//action creater:wrapping the action in a single function
function buy_Book(){  // action calling and iitialize
    return {
        type:'Buy_Book',
        payload:'My First Redux Code'
    }
}
function buy_Pen(){  // action calling and iitialize
    return {
        type:'Buy_Pen',
        payload:'My Second Redux Code'
    }
}

const Reducer=(state=initialState,action)=>{              //Reducer  
    switch(action.type){
        case 'Buy_Book':return{
            ...state,
            numberOfBooks:state.numberOfBooks-1
        }
        case 'Buy_Pen':return{
            ...state,
            numberOfPens:state.numberOfPens-1
        }
        default: return state;
    }
}


// store Initial and Update
const store=createStore(Reducer); //create store
console.log('Initial State',store.getState());
const unsubscribe=store.subscribe(()=>{
    console.log('Upload State value',store.getState())
});
store.dispatch(buy_Book());
store.dispatch(buy_Book());
store.dispatch(buy_Book());
store.dispatch(buy_Pen());
store.dispatch(buy_Pen());
store.dispatch(buy_Pen());
store.dispatch(buy_Pen());
store.dispatch(buy_Pen());
unsubscribe();*/



/*
// Multiple reducers || Combine Reducers

const redux=require('redux');   //store
const createStore=redux.createStore;  // Create Store
const combineReducers=redux.combineReducers;  //create combine reducers
// all three const create with 
// const {redux,createStore,combineReducers}=require('redux);

const Buy_Book='Buy_Book';  //action name

const initialStateBook={
    numberOfBooks:10}
const initialStatePen={
    numberOfPens:15
}

//action creater:wrapping the action in a single function
function buy_Book(){  // action calling and iitialize
    return {
        type:'Buy_Book',
        payload:'My First Redux Code'
    }
}
function buy_Pen(){  // action calling and iitialize
    return {
        type:'Buy_Pen',
        payload:'My Second Redux Code'
    }
}

const BookReducer=(state=initialStateBook,action)=>{              //Reducer  
    switch(action.type){
        case 'Buy_Book':return{
            ...state,
            numberOfBooks:state.numberOfBooks-1
        }
        default: return state;
    }
}
const PenReducer=(state=initialStatePen,action)=>{              //Reducer  
    switch(action.type){
       
        case 'Buy_Pen':return{
            ...state,
            numberOfPens:state.numberOfPens-2
        }
        default: return state;
    }
}


const reducer=combineReducers({
    book:BookReducer,
    pen:PenReducer
});

// store Initial and Update
const store=createStore(reducer); //create store
console.log('Initial State',store.getState());
const unsubscribe=store.subscribe(()=>{
    console.log('Upload State value',store.getState())
});
store.dispatch(buy_Book());
store.dispatch(buy_Book());
store.dispatch(buy_Book());
store.dispatch(buy_Pen());
store.dispatch(buy_Pen());
store.dispatch(buy_Pen());
unsubscribe();*/





// Redux Middeware

const redux=require('redux');   //store
const createStore=redux.createStore;  // Create Store
const combineReducers=redux.combineReducers;  //create combine reducers
// import middleware
const applyMiddleware=redux.applyMiddleware;


const Buy_Book='Buy_Book';  //action name

const initialStateBook={
    numberOfBooks:10}
const initialStatePen={
    numberOfPens:15
}

//action creater:wrapping the action in a single function
function buy_Book(){  // action calling and iitialize
    return {
        type:'Buy_Book',
        payload:'My First Redux Code'
    }
}
function buy_Pen(){  // action calling and iitialize
    return {
        type:'Buy_Pen',
        payload:'My Second Redux Code'
    }
}

const BookReducer=(state=initialStateBook,action)=>{              //Reducer  
    switch(action.type){
        case 'Buy_Book':return{
            ...state,
            numberOfBooks:state.numberOfBooks-1
        }
        default: return state;
    }
}
const PenReducer=(state=initialStatePen,action)=>{              //Reducer  
    switch(action.type){
       
        case 'Buy_Pen':return{
            ...state,
            numberOfPens:state.numberOfPens-2
        }
        default: return state;
    }
}


const reducer=combineReducers({
    book:BookReducer,
    pen:PenReducer
});

const logger=store=>{
    return next=>{
        return action=>{
            const result=next(action);
            console.log("middleware log",result);
            return result;
        }
    }
}

// store Initial and Update
const store=createStore(reducer,applyMiddleware(logger)); //create store
console.log('Initial State',store.getState());
const unsubscribe=store.subscribe(()=>{
    console.log('Upload State value',store.getState())
});
store.dispatch(buy_Book());
store.dispatch(buy_Book());
store.dispatch(buy_Book());
store.dispatch(buy_Pen());
store.dispatch(buy_Pen());
store.dispatch(buy_Pen());
unsubscribe();
