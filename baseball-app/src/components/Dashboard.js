import React from "react";

const Dashboard = props => {
    return (
        <div>
            <button onClick={props.updateStrikes}>Strike</button>
            <button onClick={props.updateBalls}>Ball</button>
            <button onClick={props.foulIsFoul}>Foul</button>
            <button onClick={props.onHit}>Hit</button>
        </div>
    );
}

export default Dashboard;