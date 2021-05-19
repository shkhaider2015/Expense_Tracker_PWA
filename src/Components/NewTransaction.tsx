import { Button, TextField, Typography } from "@material-ui/core";
import { FunctionComponent } from "react";


const labelOffset = -6;
const focused = true;
const height = 44;

export const NewTransaction : FunctionComponent = () => {
    return <div style={{ display : 'flex', flexDirection : 'column', paddingLeft : '8%', paddingRight : '8%', marginTop : '5%' }} >
        <Typography style={{ fontWeight : 'bold' }} >Add New Transaction</Typography>
        <TextField style={{ marginTop : 15, height }} InputLabelProps={{ style : { height, ...(focused && { top: `${labelOffset}px` }),}  }} inputProps={{ style : { height, padding : '0 14px'} }} variant="outlined" label="Enter Description" type="text" />
        <TextField style={{ marginTop : 15, height }} InputLabelProps={{ style : { height, ...(focused && { top: `${labelOffset}px` }),}  }} inputProps={{ style : { height, padding : '0 14px'} }} variant="outlined" label="Enter Amount" type="number" />
        <Button style={{ width : '100%', marginTop : 10 }}   variant="contained" color="primary" >Add</Button>
    </div>
}