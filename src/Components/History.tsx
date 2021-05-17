import { Paper, Typography } from "@material-ui/core";
import { FunctionComponent } from "react";

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
        name: "Car",
        price: 1500
    },
    {
        name: "Dar",
        price: 2100
    },
]
export const History: FunctionComponent = () => 
{
    return <div>
        <Typography variant="h5" >History</Typography>
        <div style={{ paddingLeft : '8%', paddingRight : '8%' }} >
        {
            data.map(
                (obj, ind) => <Paper style={{ display : 'flex', flexDirection : 'row', justifyContent : 'space-between', marginTop : 10, padding : 10 }} >
                        <Typography> {obj.name} </Typography> 
                        <Typography> {obj.price} </Typography> 
                     </Paper>
            )
        }
        </div>
    </div>
}