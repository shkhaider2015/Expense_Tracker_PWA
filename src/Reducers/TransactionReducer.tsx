import { ITransactionType, AddAction, payloadType } from "../Types/myTypes";
import { set } from "idb-keyval";



const TransactionReducer:React.Reducer<ITransactionType[], AddAction> = (state, action):ITransactionType[] => {
    console.log("Reducer : ", state)
        console.log("Action-->Type", action.type)
    switch(action.type)
    {
        case payloadType.add:
            {
                let gg:ITransactionType[] = [action.payload, ...state];
                set("data", gg)
                return gg
            }
        case payloadType.delete:
            {
                let gg:ITransactionType[] = state.filter((obj, ind) => obj.id !== action.payload.id);
                set("data", gg)
                return gg;
            }
        default:
            {
                console.log("DEFAULT")
                return state;
            }
    }
}

export  {TransactionReducer};