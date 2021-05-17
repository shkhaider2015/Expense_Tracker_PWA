import { Paper, Typography } from "@material-ui/core";
import { FunctionComponent } from "react";


export const IncomeAndExpense: FunctionComponent = () => {
    return <Paper elevation={1} style={{ display : 'flex', flexDirection : 'row', justifyContent: "space-around" }} >
        <div style={{ display : 'flex', flexDirection : 'column', textAlign : 'center' }} >
            <Typography variant="h6" style={{ fontWeight : 'bold' }}  >Income</Typography>
            <Typography style={{ marginTop : 'auto', marginBottom : 'auto' }} >567</Typography>
        </div>
        <div style={{ height: '80px',  border : '1px solid black' }} ></div>
        <div style={{ display : 'flex', flexDirection : 'column', textAlign : 'center' }} >
        <Typography variant="h6" style={{ fontWeight : 'bold' }}  >Expense</Typography>
            <Typography style={{ marginTop : 'auto', marginBottom : 'auto' }} >765</Typography>
        </div>
    </Paper>
}