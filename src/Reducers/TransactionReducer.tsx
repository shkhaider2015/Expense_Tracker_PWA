import { ITransactionType, payloadType, Action } from "../Types/myTypes";



const TransactionReducer: React.Reducer<ITransactionType[], Action> = (state, action): ITransactionType[] => {
    console.log("Reducer : ", state)
    console.log("Action-->Type", action.type)
    switch (action.type) {
        case payloadType.add:
            {
                return state
            }
        case payloadType.delete:
            {
                return state;
            }
        case payloadType.change:
            {
                // let tmp:ITransactionType[];
                // console.log("State --> 1 ", state)
                // get("data")
                // .then(data => {
                //     state = data
                //     console.log("Success ---->", state)
                // })
                // .catch(err => console.log("Error Occur Reducer"))

                // console.log("State --> 2 ", state)
                // state.length = 0;
                // state.push.apply(state, action.payload);
                state = action.payload
                return state
            }
        default:
            {
                console.log("DEFAULT")
                return state;
            }
    }
}

export { TransactionReducer };