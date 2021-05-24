import React from 'react'
import { Button, TextField, Typography } from "@material-ui/core";
import { FunctionComponent } from "react";
import { TransactionContext } from "../Reducers/TransactionContext";
import { ITransactionType } from '../Types/myTypes';
import { update } from "idb-keyval";


const labelOffset = -6;
const focused = true;
const height = 44;

export const NewTransaction : FunctionComponent = () => {

    const {changeOccur} = React.useContext(TransactionContext);
    const [entity, setEntity] = React.useState<string>("");
    const [amount, setAmount] = React.useState<number>(0)

    // React.useEffect(
    //     () => {
    //         changeOccur()
    //     },
    //     []
    // )

    const handleSubmit = () =>
    {
        console.log(`Entity : ${entity} and Price : ${amount}`)
        if(entity === "" || amount === 0)
        {
            return;
        }

        const obj:ITransactionType = {
            entity : entity,
            price : amount,
            id : Math.random()
        }

        // get("data")
        // .then(data => update<ITransactionType[]>("data", (val) => [obj, ...val?] ))
        // .catch( err => console.error(err)
        // )

        // update<ITransactionType[]>("data", (val) => [obj, ...val?] )
        // .then(() => console.log("Update Successfully"))
        // .catch(err => console.log("Error occur : ", err))

        update<ITransactionType[]>("data", (val) => val ? [obj, ...val] : [obj])
        .then(() => {
            console.log("Update Success !!")
            changeOccur()
        })
        .catch(() => console.log("Update failure !!"))


        
        
        // addTransaction(obj);
        setAmount(0); setEntity("");
    }


    return <div style={{ display : 'flex', flexDirection : 'column', paddingLeft : '8%', paddingRight : '8%', marginTop : '5%' }} >
        <Typography
         style={{ fontWeight : 'bold' }} >
             Add New Transaction
        </Typography>
        
        <TextField
         style={{ marginTop : 15, height }}
         InputLabelProps={{ style : { height, ...(focused && { top: `${labelOffset}px` }),}  }} 
         inputProps={{ style : { height, padding : '0 14px'} }} 
         value={entity}
         onChange={(e) => setEntity(e.target.value)}
         variant="outlined" 
         label="Enter Entity" 
         type="text" />

        <TextField 
         style={{ marginTop : 15, height }} 
         InputLabelProps={{ style : { height, ...(focused && { top: `${labelOffset}px` }),}  }} 
         inputProps={{ style : { height, padding : '0 14px'} }} 
         value={amount === 0 ? "" : amount}
         onChange={(e) => setAmount(Number(e.target.value)) }
         variant="outlined" 
         label="Enter Amount" 
         type="number" />
        
        <Button
         style={{ width : '100%', marginTop : 10 }}   
         variant="contained" 
         color="primary" 
         onClick={handleSubmit} >
             Add
        </Button>
    </div>
}