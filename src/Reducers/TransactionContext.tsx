import { get } from 'idb-keyval';
import React from 'react'
import { ITransactionType, initialContextValue, payloadType, Action } from "../Types/myTypes";
import { TransactionReducer } from "./TransactionReducer";

const initialTransactions:ITransactionType[] = []



export const TransactionContext = React.createContext<initialContextValue>({ transactions : [], changeOccur : () => "" });


export const TransactionProvider: React.FC = ({ children }) => 
{

    let [transactions, dispatch] = React.useReducer<React.Reducer<ITransactionType[], Action>>(TransactionReducer, initialTransactions );

    // function addTransaction(transactionObject:ITransactionType)
    // {
    //     dispatch({
    //         type : payloadType.add,
    //         payload : {
    //             entity : transactionObject.entity,
    //             price: transactionObject.price,
    //             id : transactionObject.id
    //         }
    //     })
    // }

    // function deleteTransaction()
    // {
    //     dispatch({
    //         type : payloadType.delete,
    //         payload : 0,
    //     })
    // }

    function changeOccur () 
    {  
        get("data")
        .then(data => {
            dispatch({
                type : payloadType.change,
                payload : data,
            })
        })
        .catch(err => console.error("Error fetch : ", err))

        // dispatch({
        //     type : "CHANGE",
        //     payload : {
        //         entity : "",
        //         price: 0,
        //         id : 0
        //     }
        // })

    }

    
    
    return(
        <TransactionContext.Provider
        value={{
            transactions,
            changeOccur
        }}
        >
            { children }

        </TransactionContext.Provider>
    )


}