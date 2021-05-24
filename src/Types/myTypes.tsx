export enum payloadType  {add = "ADD", delete = "DELETE", change="CHANGE"}

export interface ITransactionType {
    entity:string,
    price:number,
    id : number
}

export interface IInitialTransactionType {
    entity : ITransactionType[]
}

export interface AddAction {
    type : payloadType.add,
    payload : ITransactionType
}
export interface deleteAction {
    type : payloadType.delete,
    payload : number
}
export interface CHANGE {
    type : payloadType.change,
    payload : ITransactionType[],
}

export type Action = AddAction | deleteAction | CHANGE

export interface valueType {
    transactions : ITransactionType[],
    changeOccur : () => void,
    
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
