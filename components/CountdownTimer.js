import { useState, useEffect } from 'react';

export default function CountdownTimer({ targetDate }) {

    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState({}); 

    useEffect(() => {
        // Mueve la lógica de cálculo aquí
        const updateTimer = () => {
            setTimeLeft(calculateTimeLeft());
        };

        updateTimer();
        const timer = setInterval(updateTimer, 1000);

        return () => clearInterval(timer);
    }, []);

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span key={interval}>
                {timeLeft[interval]} {interval}{" "}
            </span>
        );
    });

    return (
        
        <div>
            {timerComponents.length ? <p><span className="days"> {timeLeft.days} </span>  <b>:</b>  <span className="hours">{timeLeft.hours}</span> <b>:</b> <span className="minutes">{timeLeft.minutes}</span>  <b>:</b> <span className="seconds">{timeLeft.seconds}</span>  </p> : <p><span>Happy New Year!</span></p>}
        </div>
    );
};
