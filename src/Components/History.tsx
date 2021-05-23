import React from "react";
import { IconButton, Paper, Typography } from "@material-ui/core";
import { DeleteForeverRounded } from "@material-ui/icons";
import { FunctionComponent } from "react";
import { TransactionContext } from "../Reducers/TransactionContext";
import { ITransactionType } from "../Types/myTypes";

// const data: {name:string, price:number}[] = [
//     {
//         name: "Aar",
//         price: 1200
//     },
//     {
//         name: "Bar",
//         price: 900
//     },
//     {
//         name: "Dar",
//         price: 2100
//     },
// ]
export const History: FunctionComponent = () => {
    const { transactions, deleteTransaction } = React.useContext(TransactionContext);

    const handleDelete = (x:number) => {

        deleteTransaction(x);
    }


    return <div style={{ paddingLeft: '8%', paddingRight: '8%', marginTop: '5%' }} >
        <Typography style={{ fontWeight: 'bold' }} >History</Typography>
        <div style={{ marginTop: 5, overflowY: 'scroll', height: '150px' }}  >
            {
                transactions?.map(
                    (obj, ind) => <div key={ind} style={{ display: 'flex', flexDirection: 'row' }}  >
                        <Paper style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flexGrow: 4, marginTop: 10, padding: 10, marginLeft: 5, marginRight: 5 }} >
                            <Typography style={{ fontSize: '12px' }}  > {obj.entity} </Typography>
                            <Typography style={{ fontSize: '12px' }}  >&#36; {obj.price} </Typography>
                        </Paper>
                        <IconButton style={{ flexGrow: 0, marginTop: 10, marginRight: 5 }} color="secondary" aria-label="delete" onClick={() => handleDelete(ind)}>
                            <DeleteForeverRounded />
                        </IconButton>
                    </div>
                )
            }
        </div>
    </div>
}