import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { FunctionComponent } from "react";
import { TransactionContext } from "../Reducers/TransactionContext";

const data: {name:string, price:number}[] = [
    {
        name: "Aar",
        price: 1200
    },
    {
        name: "Bar",
        price: 900
    },
    {
        name: "Dar",
        price: 2100
    },
]
export const History: FunctionComponent = () => 
{
    const {transactions, addTransaction} = React.useContext(TransactionContext);
    return <div style={{ paddingLeft : '8%', paddingRight : '8%', marginTop : '5%' }} >
        <Typography style={{ fontWeight : 'bold' }} >History</Typography>
        <div style={{ marginTop : 5, overflowY : 'scroll', height : '150px' }}  >
        {
            transactions?.map(
                (obj, ind) => <Paper style={{ display : 'flex', flexDirection : 'row', justifyContent : 'space-between', marginTop : 10, padding : 10, marginLeft : 5, marginRight : 5 }} >
                        <Typography style={{ fontSize : '12px' }}  > {obj.entity} </Typography> 
                        <Typography style={{ fontSize : '12px' }}  >&#36; {obj.price} </Typography> 
                     </Paper>
            )
        }
        </div>
    </div>
}