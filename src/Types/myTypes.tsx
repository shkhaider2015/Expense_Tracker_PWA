
export interface ITransactionType {
    entity:string,
    price:number,
    id : number
}

export interface IInitialTransactionType {
    entity : ITransactionType[]
}

export interface AddAction {
    type : string,
    payload : ITransactionType
}
export interface deleteAction {
    type : string,
    payload : number,
    id : number
}

export type Action = AddAction | deleteAction

export interface valueType {
    transactions : ITransactionType[],
    addTransaction : (transactionObject:ITransactionType) => void,
    deleteTransaction : (transactionObject:ITransactionType) => void
    
}

export interface defaultValue {
    transactions : null,
    addTransaction : null
    
}

export type initialContextValue = valueType 

export type ReducerType= {
    State : ITransactionType[],
    Action : AddAction | deleteAction
} 

export type Reducer<State, Action> = 
  (state: State, action: Action) => State;

export enum payloadType  {add = "ADD", delete = "DELETE"}