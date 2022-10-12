import {Task} from "../classes/Task";
import '../Card.css';
import {Button} from "@mui/material";


type props = {
    item: Task,
    finishTask(fnTask: string):void};


const CardForTask = ({item, finishTask}: props) => {
    const backgroundColors = {
        TODAY: 'rgb(255, 0, 0, .3)',
        WEEK: 'rgb(249, 105, 14, .3)',
        MONTH: 'rgb(255, 255, 0, .3)',
        YEAR: 'rgba(51, 170, 51, .3)'
    }

    function setBackgroundColor() {
        return backgroundColors[item.urgentType];
    }

    return (
        <div className="card" style={{"backgroundColor": setBackgroundColor()}}>
            <h3 className="cardTitle">{item.title}</h3>
            <p className="cardDetails">{item.details}</p>
            <div className="buttonDiv">
                <Button className="cardButton" onClick={() => {
                    finishTask(item.id)
                }}> Finish </Button>
            </div>
        </div>
    )
}


export default CardForTask;
