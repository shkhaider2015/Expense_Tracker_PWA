import React, { FunctionComponent } from 'react'
import { Paper, Typography } from "@material-ui/core";
import { IncomeAndExpense } from './IncomeAndExpanse';
import { History } from './History';
import { NewTransaction } from "./NewTransaction";

export const MyPaper: FunctionComponent = () => 
{
    return <Paper elevation={3} style={{ width : '40%', height : 'auto', paddingTop : '2%', paddingBottom : '2%' }} >
        <Typography variant="h3" style={{ textAlign : 'center' }} >Expence Tracker</Typography>
        <Typography style={{ marginTop : '5%', marginLeft : '10%', fontWeight : 'bold' }} >Your Balance <br /> &#36; 276 </Typography>
        <div style={{ marginLeft : '10%', marginRight : '10%' }} >
        <IncomeAndExpense />
        </div>
        <History />
        <NewTransaction />
    </Paper>

}