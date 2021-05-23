import React, { useEffect } from "react";
import { IconButton, Paper, Typography } from "@material-ui/core";
import { DeleteForeverRounded } from "@material-ui/icons";
import { FunctionComponent } from "react";
import { TransactionContext } from "../Reducers/TransactionContext";
import { get } from "idb-keyval";
import { ITransactionType } from "../Types/myTypes";



export const History: FunctionComponent = () => {
    const { deleteTransaction } = React.useContext(TransactionContext);
    const [data, setData] = React.useState<ITransactionType[]>([])

    const handleDelete = (x:number) => {

        const obj = data.filter((obj, ind) => obj.id === x)

        deleteTransaction(obj[0]);
    }

    useEffect(
        () => {
            get("data")
            .then(data => setData(data))
            .catch(err => console.log(err))
        },
        [data]
    )

    return <div style={{ paddingLeft: '8%', paddingRight: '8%', marginTop: '5%' }} >
        <Typography style={{ fontWeight: 'bold' }} >History</Typography>
        <div style={{ marginTop: 5, overflowY: 'scroll', height: '150px' }}  >
            
            {

                data?.map(
                    (obj, ind) => <div key={obj.id} style={{ display: 'flex', flexDirection: 'row' }}  >
                        <Paper style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flexGrow: 4, marginTop: 10, padding: 10, marginLeft: 5, marginRight: 5 }} >
                            <Typography style={{ fontSize: '12px' }}  > {obj.entity} </Typography>
                            <Typography style={{ fontSize: '12px' }}  >&#36; {obj.price} </Typography>
                        </Paper>
                        <IconButton style={{ flexGrow: 0, marginTop: 10, marginRight: 5 }} color="secondary" aria-label="delete" onClick={() => handleDelete(obj.id)}>
                            <DeleteForeverRounded />
                        </IconButton>
                    </div>
                )
            }
        </div>
    </div>
}