import React, { FunctionComponent } from 'react'
import { Paper, Typography } from "@material-ui/core";
import { IncomeAndExpense } from './IncomeAndExpanse';
import { History } from './History';

export const MyPaper: FunctionComponent = () => 
{
    return <Paper elevation={3} style={{ width : '40%', height : '90%' }} >
        <Typography variant="h3" style={{ textAlign : 'center', marginTop : '2%' }} >Expence Tracker</Typography>
        <Typography style={{ marginTop : '5%', marginLeft : '10%' }} >Your Balance <br /> 276 </Typography>
        <div style={{ marginLeft : '10%', marginRight : '10%' }} >
        <IncomeAndExpense />
        </div>
        <History />
    </Paper>

}