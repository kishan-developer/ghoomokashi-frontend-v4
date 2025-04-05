import { useState, useEffect } from "react";

const ComingSoon = () => {
    const targetDate = new Date("2025-02-20T00:00:00").getTime();
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white text-center px-4">
            <div className="max-w-lg">
                <h1 className="text-4xl font-bold mb-4">Coming Soon </h1>
                <p className="text-lg mb-6">We're launching ghoomokashi.com. Stay tuned!</p>

                {/* Countdown Timer */}
                <div className="flex justify-center space-x-6 text-2xl font-semibold">
                    <div className="p-4 bg-gray-800 rounded-lg">
                        <span>{timeLeft.days}</span>
                        <p className="text-sm">Days</p>
                    </div>
                    <div className="p-4 bg-gray-800 rounded-lg">
                        <span>{timeLeft.hours}</span>
                        <p className="text-sm">Hours</p>
                    </div>
                    <div className="p-4 bg-gray-800 rounded-lg">
                        <span>{timeLeft.minutes}</span>
                        <p className="text-sm">Minutes</p>
                    </div>
                    <div className="p-4 bg-gray-800 rounded-lg">
                        <span>{timeLeft.seconds}</span>
                        <p className="text-sm">Seconds</p>
                    </div>
                </div>

                <p className="mt-6">Follow us for updates!</p>
            </div>
        </div>
    );
};

export default ComingSoon;
