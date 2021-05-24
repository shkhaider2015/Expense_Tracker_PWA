import React from 'react'
import { Paper, Typography } from "@material-ui/core";
import { FunctionComponent } from "react";
import { TransactionContext } from "../Reducers/TransactionContext";
import { ITransactionType } from '../Types/myTypes';
import CountUp from "react-countup";

export const IncomeAndExpense: FunctionComponent = () => {

    const {transactions} = React.useContext(TransactionContext)
    const [income, setIncom] = React.useState<number>(0);
    const [expanse, setExpanse] = React.useState<number>(0);
    const [total, setTotal] = React.useState<number>(0);

    const getIncom = (x:ITransactionType[]) => 
    {
        let income:number = 0;

        for(var i=0; i<x.length; i++)
        {
            if(x[i].price > 0)
            {
                income += x[i].price
            }
        }

        return income;
    }

    const getExpence = (x:ITransactionType[]) => 
    {
        let expance = 0;
        for(var i=0; i<x.length; i++)
        {
            if(x[i].price < 0)
            {
                expance += x[i].price
            }
        }
        return expance
    }

    React.useEffect(
        () => {
            setIncom(getIncom(transactions));
            setExpanse(getExpence(transactions));
            setTotal(getIncom(transactions) + getExpence(transactions));
            
        },
        [transactions]
    )

    return <div   >
        <Typography style={{ marginTop: '5%', marginLeft: '0%', fontWeight: 'normal' }} > <span style={{ fontWeight : 'bold' }} >Your Balance</span> <br /> &#36; {total} </Typography>
        <div style={{ display : 'flex', flexDirection : 'row', justifyContent: "space-around", marginTop : '1%' }} >

        <Paper style={{ display : 'flex', flexDirection : 'column', textAlign : 'center' }} >
            <div style={{ display : 'flex', flexDirection : 'column', paddingLeft : 40, paddingRight : 40, paddingTop : 30 }} >
            <Typography   >INCOME</Typography>
            <Typography style={{ marginTop : 10, marginBottom : 'auto', fontWeight : 'bold' }} >&#36; <CountUp end={income} duration={3} /> </Typography>
            </div>
            <div style={{ width : '100%', height : '3px', backgroundColor : 'red', marginTop : 30, borderBottomLeftRadius : 5, borderBottomRightRadius : 5 }} ></div>
        </Paper>
        
        <Paper style={{ display : 'flex', flexDirection : 'column', textAlign : 'center',  }} >
            <div style={{ display : 'flex', flexDirection : 'column', paddingLeft : 40, paddingRight : 40, paddingTop : 30 }} >
            <Typography   >EXPANSE</Typography>
            <Typography style={{ marginTop : 10, marginBottom : 'auto', fontWeight : 'bold' }} >&#36; <CountUp end={expanse} duration={3} /></Typography>
            </div>
            <div style={{ width : '100%', height : '3px', backgroundColor : 'green', marginTop : 30, borderBottomLeftRadius : 5, borderBottomRightRadius : 5 }} ></div>
        </Paper>

        </div>
    </div>
}