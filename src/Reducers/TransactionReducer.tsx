import { ITransactionType, AddAction, deleteAction, Action, Reducer, ReducerType } from "../Types/myTypes";

const TransactionReducerr = ( (state:ITransactionType[], action:AddAction) => {
        console.log("Reducer : ", state)
        console.log("Action Type", action.type)
    switch(action.type)
    {
        case "ADD":
            {
                return [action.payload, ...state]
            }
        case "DELETE":
            {
                let ss = state.filter(transaction => transaction !== action.payload)
                console.log("After : ", ss)
                return [action.payload, ...state];
            }
        default:
            return state;
    }
})



const TransactionReducer = (state:ITransactionType[], action:Action):ITransactionType[] => {
    console.log("Reducer : ", state)
        console.log("Action-->Type", action.type)
    switch(action.type)
    {
        case "ADD":
            {
                console.log("ADD : -> ", action.payload)
                state.unshift(action.payload )
                return state
            }
        case "DELETE":
            {
                console.log("DELETE : -> ", action.payload)
                state.splice(action.payload, 1)
                return state;
            }
        default:
            {
                console.log("DEFAULT")
                return state;
            }
    }
}

export  {TransactionReducer};