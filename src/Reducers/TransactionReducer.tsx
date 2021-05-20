import { ITransactionType, AddAction } from "../Types/myTypes";

const TransactionReducer = (
    (state:ITransactionType[], action:AddAction) => {
    switch(action.type)
    {
        case "ADD":
            {
                return [action.payload, ...state]
            }
        default:
            return state;
    }
})

export  {TransactionReducer};