import React, { Component } from 'react'; 

export class Timer extends Component {
    render() {
        return (
            <div>
               <h1>Timer: </h1>
               <button>Start</button>
               <button>Reset</button>
               <button>Pause</button>
                </div>
        );
    }
}

export default Timer;