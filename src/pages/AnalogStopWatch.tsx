import React from "react";
import { Link, useLocation } from "react-router-dom";
import sekund from "../assets/img/sekund.png"
import clock from "../assets/img/clock.png"
import timpekare from "../assets/img/timpekare.png"
import useTimer from 'easytimer-react-hook';
import { useState } from "react";
import { useEffect } from "react";
import Header from "../Components/Header";

// interface allTimes {
//     hours: number,
//     minutes: number,
//     seconds: number,
//     targetDays: number,
//     targetHours: number,
//     targetMinutes: number,
//     targetSeconds: number,
//     countdown: boolean,
//     updateWhenTargetAchieved: boolean
// }

const AnalogStopWatch: React.FC = () => {

    const [timer, isTargetAchieved] = useTimer({ target: { days: 10 } });
    const [sec, setSec] = useState<string>("noRunSeconds")
    const [hours, setHours] = useState<string>("noRunMinutes")


    function start() {
        timer.start();
        setSec("sekundpekare")
        setHours("timpekare")
    };

    function pause() {
        timer.pause();
        setSec("pauseSecond")
        setHours("pauseHour")
    };


    function reset() {
        timer.reset();
        window.location.reload()
    };


    useEffect(() => {
        if (timer.getTimeValues().toString() === "00:00:00") {
            setSec("pauseSecond")
            setHours("pauseHour")

        }
    }, [timer.getTimeValues().toString()])


    const [allLaps, setAllLaps]: Array<string> | any = useState([])

    function lap() {
        let newLap: any = timer.getTimeValues().toString()
        allLaps.push(newLap)
    };


    return (
        <section>
            <Header header={"Stop watch Analog"} />
            <section className="clockSection">
                <img className="clock" src={clock} alt="" />
                <img className={sec} src={sekund} alt="" />
                <img className={hours} src={timpekare} alt="" />
                <div className="timer">{timer.getTimeValues().toString()}</div>

            </section>

            <ul>
                {allLaps.map((lap: string, id: number) => (
                    <p key={id}>{lap}</p>
                ))}
            </ul>

            <Link to={"/StopWatch"}>degital</Link>

            <button onClick={() => start()}>start</button>

            <button onClick={() => pause()}>stop</button>

            <button onClick={() => reset()}>reset</button>

            <button onClick={() => lap()}>lap</button>

        </section>

    )
};

export default AnalogStopWatch