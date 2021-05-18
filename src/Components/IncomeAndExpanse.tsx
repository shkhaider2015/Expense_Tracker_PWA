import { Paper, Typography } from "@material-ui/core";
import { FunctionComponent } from "react";


export const IncomeAndExpense: FunctionComponent = () => {
    return <Paper elevation={1} style={{ display : 'flex', flexDirection : 'row', justifyContent: "space-around" }} >
        <div style={{ display : 'flex', flexDirection : 'column', textAlign : 'center' }} >
            <Typography   >Income</Typography>
            <Typography style={{ marginTop : 'auto', marginBottom : 'auto' }} >&#36; 567</Typography>
        </div>
        <div style={{ height: '60px',  border : '1px solid black' }} ></div>
        <div style={{ display : 'flex', flexDirection : 'column', textAlign : 'center' }} >
        <Typography   >Expense</Typography>
            <Typography style={{ marginTop : 'auto', marginBottom : 'auto' }} >&#36; 765</Typography>
        </div>
    </Paper>
}