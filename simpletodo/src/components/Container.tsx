import {UrgentType} from "../enums/UrgentType";
import {Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";

export const MainContainer = () => {

    return (
        <div className={"mainCard"}>
            Welcome here in my ToDo Application!
            <div className={"mainCardChild"}>
            <div className={"form"}>
                <br></br>
                <TextField className={"simple"} id="standard-basic" label="Title" variant="standard" /> <p></p>
                <TextField className={"simple"} id="standard-basic" label="Details" variant="standard"  /><p></p>
                <FormControl className={"simple"} style={{"width": "200px"}}>
                <InputLabel id="selectOption">Urgency</InputLabel>
                <Select labelId="selectOption" label="Label">
                    {Object.keys(UrgentType).map((element, index) => (
                        <MenuItem className={"menuItem"} centerRipple key={index} value={element} >
                            {UrgentType[element]}
                        </MenuItem>
                    ))}
                </Select>
                </FormControl>
                <Button className={"simple"}>Add</Button>
            </div>
            </div>
        </div>
    )
}


