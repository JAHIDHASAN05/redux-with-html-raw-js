const counterEL= document.getElementById('counter')
const increamentEL= document.getElementById('increament')
const decreamentEL= document.getElementById('decreament')


// let count= 0;

// increamentEL.addEventListener('click', ()=> {
//         count++;
//         counterEL.innerText= count;
// });

// decreamentEL.addEventListener('click', ()=> {
//         count--;
//         counterEL.innerText= count;

// });


const initialState={
        value:0
}


const counterReducer= (state= initialState, action)=>{

        if(action.type=== 'increament'){
                return {
                        ...state,
                        value :state.value+1
                }
        }
        else  if(action.type=== 'decreament'){
                return {
                        ...state,
                        value :state.value-1
                }
        }
        else{

                return {...state}
        }

}


const store = Redux.createStore(counterReducer);
const render=()=>{
        const state= store.getState();
        counterEL.innerText= state.value
}
render()

store.subscribe(render)


increamentEL.addEventListener('click', ()=>{
        store.dispatch({
                type : 'increament'
        })
})
decreamentEL.addEventListener('click', ()=>{
        store.dispatch({
                type : 'decreament'
        })
})