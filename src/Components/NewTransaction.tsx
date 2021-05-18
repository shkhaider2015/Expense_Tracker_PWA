import { Button, TextField, Typography } from "@material-ui/core";
import { FunctionComponent } from "react";


export const NewTransaction : FunctionComponent = () => {
    return <div style={{ display : 'flex', flexDirection : 'column', paddingLeft : '8%', paddingRight : '8%', marginTop : '5%' }} >
        <Typography style={{ fontWeight : 'bold' }} >Add New Transaction</Typography>
        <TextField style={{ marginTop : 10 }} variant="outlined" label="Enter Description" type="text" />
        <TextField style={{ marginTop : 10 }} variant="outlined" label="Enter Amount" type="number" />
        <Button style={{ width : '100%', marginTop : 10 }} variant="contained" color="primary" >Add</Button>
    </div>
}