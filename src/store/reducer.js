const defaultState={
    inputValue:"",
    list:[]
}

export default (state = defaultState,action)=>{
    let newState;
    switch(action.type){
        case 'change_input_value':
            newState = JSON.parse(JSON.stringify(state));
            newState.inputValue = action.value;
            return newState;
        case 'add_item':
            newState = JSON.parse(JSON.stringify(state));
            newState.list.push(newState.inputValue);
            newState.inputValue = "";
            return newState;
        case 'remove_item':
            newState = JSON.parse(JSON.stringify(state));
            newState.list.splice(action.index,1);
            return newState;
        default:
            return defaultState
    }
}