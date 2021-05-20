import { stat } from 'fs';
import React from 'react'
import { ITransactionType, IInitialTransactionType, valueType, initialContextValue } from "../Types/myTypes";
import { TransactionReducer } from "./TransactionReducer";

const initialTransactions:ITransactionType[] = [
    { entity: "Cash", price : 1200 },
    { entity: "Fruits", price : 400 },
    { entity: "Vagitables", price : 200 },
    { entity: "Milk", price : 130 },
]

export const TransactionContext = React.createContext<initialContextValue>(null);

export const TransactionProvider: React.FC = ({ children }) => 
{
    // let [tt, setTT] = React.useState<ITransactionType[]>(initialTransactions)
    let [state, dispatch] = React.useReducer(TransactionReducer, initialTransactions);

    function addTransaction(transactionObject:ITransactionType)
    {
        dispatch({
            type : "ADD",
            payload : {
                entity : transactionObject.entity,
                price: transactionObject.price
            }
        })
    }

    
    
    return(
        <TransactionContext.Provider
        value={{
            transactions : state,
            addTransaction : addTransaction
        }}
        >
            { children }

        </TransactionContext.Provider>
    )


}