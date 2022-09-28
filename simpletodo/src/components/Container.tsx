import {UrgentType} from "../enums/UrgentType";
import {Button, FormControl, InputLabel, MenuItem, Select, TextField}
    from "@mui/material";


export const MainContainer = () => {
    return (
        <div className={"mainCard"}>
            <div className={"form"}>
                <div className={"simple"}>
                    <TextField id="standard-basic" label="Title" variant="standard"/> <p></p>
                </div>
                <div className={"simple"}>
                    <TextField className={"simple details"} id="standard-basic" label="Details" variant="standard"/>
                    <p></p>
                </div>
                <div className={"simple"}>
                    <FormControl style={{"width": "200px"}}>
                        <InputLabel id="selectOption">Urgency</InputLabel>
                        <Select labelId="selectOption" label="Label">
                            {Object.keys(UrgentType).map((element, index) => (
                                <MenuItem className={"menuItem"} centerRipple key={index} value={element}>
                                    {UrgentType[element]}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <div className={"simple"}>
                    <Button className={"addButton"} variant="contained">Add new task</Button>
                </div>
            </div>
        </div>
    )
}


