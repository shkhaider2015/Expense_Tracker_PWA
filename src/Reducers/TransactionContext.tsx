import React, { Dispatch } from 'react'
import { ITransactionType, initialContextValue, ReducerType, AddAction, deleteAction, Action, payloadType, IInitialTransactionType } from "../Types/myTypes";
import { TransactionReducer } from "./TransactionReducer";

const initialTransactions:ITransactionType[] = [
    { entity: "Cash", price : 1200 },
    { entity: "Fruits", price : 400 },
    { entity: "Vagitables", price : 200 },
    { entity: "Milk", price : 130 },
]
const initValue:number = 0

const initFun = (iT:ITransactionType[]) => 
{
    return {
        type : 'ADD',
        payload : iT
    }
} 

export const TransactionContext = React.createContext<initialContextValue>({ transactions : [], addTransaction : (initialTransactions) => "", deleteTransaction : (initValue) => "" });

// export const TransactionContext = React.createContext<{ state : ITransactionType[] , dispatch : React.Dispatch<Action> }>({ state : initialTransactions, dispatch : () => undefined });


export const TransactionProvider: React.FC = ({ children }) => 
{
    // let [tt, setTT] = React.useState<ITransactionType[]>(initialTransactions)
    let [transactions, dispatch] = React.useReducer(TransactionReducer, initialTransactions );

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

    function deleteTransaction(index:number)
    {
        dispatch({
            type : "DELETE",
            payload : index
        })
    }

    
    
    return(
        <TransactionContext.Provider
        value={{
            transactions,
            addTransaction,
            deleteTransaction
        }}
        >
            { children }

        </TransactionContext.Provider>
    )


}