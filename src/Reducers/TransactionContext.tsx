import React from 'react'
import { ITransactionType, initialContextValue, AddAction } from "../Types/myTypes";
import { TransactionReducer } from "./TransactionReducer";

const initialTransactions:ITransactionType[] = [
    { entity: "Cash", price : 1200, id : 3 },
    { entity: "Fruits", price : 400, id : 2 },
    { entity: "Vagitables", price : 200, id : 1 },
    { entity: "Milk", price : 130, id : 0 },
]



export const TransactionContext = React.createContext<initialContextValue>({ transactions : [], addTransaction : (initialTransactions) => "", deleteTransaction : (initialTransactions) => "" });


export const TransactionProvider: React.FC = ({ children }) => 
{

    let [transactions, dispatch] = React.useReducer<React.Reducer<ITransactionType[], AddAction>>(TransactionReducer, initialTransactions );

    function addTransaction(transactionObject:ITransactionType)
    {
        dispatch({
            type : "ADD",
            payload : {
                entity : transactionObject.entity,
                price: transactionObject.price,
                id : transactionObject.id
            }
        })
    }

    function deleteTransaction(transactionObject:ITransactionType)
    {
        dispatch({
            type : "DELETE",
            payload : {
                entity : transactionObject.entity,
                price: transactionObject.price,
                id : transactionObject.id
            }
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