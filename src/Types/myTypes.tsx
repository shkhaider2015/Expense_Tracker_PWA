import { type } from "os";

export interface ITransactionType {
    entity:string,
    price:number
}

export interface IInitialTransactionType {
    entity : ITransactionType[]
}

export interface AddAction {
    type : string,
    payload : ITransactionType
}

export interface valueType {
    transactions : ITransactionType[],
    addTransaction : (transactionObject:ITransactionType) => void
    
}

export type initialContextValue = valueType | null