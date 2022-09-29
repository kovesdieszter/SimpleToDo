import {Task} from "../classes/Task";

type props = {item: Task};

const CardForTask = ({item}: props) => {
    return (
        <div className="card">
            <h1>{item.title}</h1>
            <h3>{item.details}</h3>
            <h4>{item.urgentType}</h4>
                <button>Delete</button>
        </div>
    )
}


export default CardForTask;