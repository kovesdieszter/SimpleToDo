import {Task} from "../classes/Task";
import '../Card.css';
import {UrgentType} from "../enums/UrgentType";
import {Button} from "@mui/material";

type props = {
    item: Task,
    finishTask(fnTask: string):void};

const CardForTask = ({item, finishTask}: props) => {

    const color = () => {
        let bcColor = "";
        switch (item.urgentType) {
            case UrgentType.TODAY:
                bcColor = 'rgb(255, 0, 0, .3)';
                break;
            case UrgentType.WEEK:
                bcColor = 'rgb(249, 105, 14, .3)';
                break;
            case UrgentType.MONTH:
                bcColor = 'rgb(255, 255, 0, .3)';
                break;
            default:
                bcColor = 'rgba(51, 170, 51, .3)';
                break;
        }
        return bcColor;
    }
    console.log(color);


    return (
        <div className="card" style={{"backgroundColor": color()}}>
            <h3 className={"cardTitle"}>{item.title}</h3>
            <p className={"cardDetails"}>{item.details}</p>
            <div className={"buttonDiv"}>
                <Button className={"cardButton"} onClick={() => {
                    finishTask(item.title)
                }}> Finish </Button>
            </div>
        </div>
    )
}


export default CardForTask;