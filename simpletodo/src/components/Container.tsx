import {UrgentType} from "../enums/UrgentType";
import {Button, Card, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import React, {useState} from "react";
import {Task} from "../classes/Task";
import CardForTask from "./CardForTask";

const MainContainer = () => {

    const [title, setTitle] = useState<string>("");
    const [details, setDetails] = useState<string>("");
    const [urgentType, setUrgentType] = useState<UrgentType>(UrgentType.TODAY);
    const [tasks, setTasks] = useState<Task[]>([]);

    function handleClick(): void {
        // @ts-ignore
        let newTask: Task = new Task(title, details, urgentType);
        // @ts-ignore
        setTasks([...tasks, newTask]);
        setTitle("");
        setDetails("");
        setUrgentType(UrgentType.TODAY);
    }

    const cards = tasks.map( (element) => {
            return (
               <CardForTask item={element}/>
            )
        }
    )

    // @ts-ignore
    return (
        <>
            <div className={"mainCard"}>
                <div className={"form"}>
                    <div className={"simple"} id={"titleText"}>
                        <TextField id="standard-basic"
                                   label="Title"
                                   variant="standard"
                                   value={title}
                                   onChange={(event) => {
                                       setTitle(event.target.value);
                                   }}/>
                    </div>
                    <div className={"simple"}>
                        <TextField className={"details"}
                                   id="standard-basic detailsText" label="Details"
                                   variant="standard"
                                   value={details}
                                   onChange={(event) => {
                                       setDetails(event.target.value);
                                   }}/>
                    </div>
                    <div className={"simple"}>
                        <FormControl style={{"width": "200px"}}>
                            <InputLabel id="selectOption">Urgency</InputLabel>
                            <Select labelId="selectOption" label="Label" value={urgentType} onChange={(event) => {
                                // @ts-ignore
                                setUrgentType(event.target.value);
                            }}>
                                {Object.keys(UrgentType).map((element: string, index) => (
                                    <MenuItem className={"menuItem"} id={"menuItem"} centerRipple key={index}
                                              value={element}>
                                        {UrgentType[element]}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    <div className={"simple"}>
                        <Button className={"addButton"} variant="contained" onClick={handleClick}>
                            Add new task
                        </Button>
                    </div>
                </div>
            </div>
            <div className={"cardContainer"}>{cards}</div>
        </>
    )
}

export default MainContainer;


