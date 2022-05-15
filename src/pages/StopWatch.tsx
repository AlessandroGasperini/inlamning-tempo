import React from "react";

import useTimer from 'easytimer-react-hook';
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../Components/Header";


const StopWatch: React.FC = () => {

    const location: any = useLocation();

    const time = location.state;

    const [timer, isTargetAchieved] = useTimer({
        startValues: {
            hours: 0,
            minutes: 0,
            seconds: 0
        },
        target: { days: 10 },
        countdown: false,
    });


    function start() {
        timer.start();
    };

    function pause() {
        timer.pause();
    };

    function stop() {
        timer.stop();
    };


    function reset() {
        window.location.reload()
    };


    const [allLaps, setAllLaps]: Array<string> | any = useState([])

    function lap() {
        let newLap: any = timer.getTimeValues().toString()
        allLaps.push(newLap)
    };

    return (
        <section>

            <Header header={"Stop Watch Digital"} />
            <div>{timer.getTimeValues().toString()}</div>



            <ul>
                {allLaps.map((lap: string, id: number) => (
                    <p key={id}>{lap}</p>
                ))}
            </ul>

            <Link to={"/AnalogStopWatch"}>analog</Link>


            <button onClick={() => start()}>start</button>

            <button onClick={() => pause()}>pause</button>

            <button onClick={() => stop()}>stop</button>

            <button onClick={() => reset()}>reset</button>

            <button onClick={() => lap()}>lap</button>
        </section>

    )
};

export default StopWatch