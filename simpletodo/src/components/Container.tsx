import {UrgentType} from "../enums/UrgentType";
import {Button, FormControl, MenuItem,  TextField} from "@mui/material";
import React, {useEffect, useState} from "react";
import {Task} from "../classes/Task";
import CardForTask from "./CardForTask";
import { v4 as uuidV4 } from 'uuid';

const MainContainer = () => {

    const [title, setTitle] = useState<string>("");
    const [details, setDetails] = useState<string>("");
    const [urgentType, setUrgentType] = useState<UrgentType>(UrgentType.TODAY);
    const [tasks, setTasks] = useState<Task[]>(loadTasks);


    function handleClick(): void {
        // @ts-ignore
        let newTask: Task = new Task(uuidV4(),title, details, urgentType);
        // @ts-ignore
        setTasks([...tasks, newTask]);
        setTitle("");
        setDetails("");
        setUrgentType(UrgentType.TODAY);
    }

    const cards = tasks.map((element) => <CardForTask item={element} finishTask={finishTask}/> );

    function saveTasks() {
        localStorage.setItem("TASKS", JSON.stringify({tasks}))
    }

    useEffect(() => {
        saveTasks();
    }, [handleClick])

    function loadTasks(): Task[] {
        const taskJSON = localStorage.getItem("TASKS");
        if (taskJSON == null) return [];
        return JSON.parse(taskJSON).tasks;
    }

    function finishTask(finishedTask: string): void {
        setTasks(tasks.filter( (task) => {
            return task.id !== finishedTask;
        }))
    }


    return (
        <>
            <div className={"mainCard"}>
                <form className={"form"}>
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
                        <FormControl sx={{ m: 1, minWidth: 150 }} style={{"width": "200px"}}>
                            <TextField id={"selectOption"} label={"Urgency"} select value={urgentType} onChange={(event) => {
                                // @ts-ignore
                                setUrgentType(event.target.value);
                            }}>
                                {Object.keys(UrgentType).map((element: string, index) => (
                                    <MenuItem className={"menuItem"} id={"menuItem"} centerRipple key={index}
                                              value={element}>
                                        {UrgentType[element]}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </FormControl>
                    </div>
                    <div className={"simple"}>
                        <Button className={"addButton"} variant="contained" type={"submit"} onClick={handleClick} >
                            Add new task
                        </Button>
                    </div>
                </form>
            </div>
            <div className={"cardContainer"}>{cards}</div>
        </>
    )
}

export default MainContainer;


