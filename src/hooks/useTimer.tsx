import { useState, useEffect } from "react";

const useTimer = (initialTime: number) => {
    const [timeLeft, setTimeLeft] = useState(initialTime);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => Math.max(prevTime - 1, 0));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return timeLeft;
};

export default useTimer;