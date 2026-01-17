import { useEffect, useState } from "react";
import UnlockedCapsule from "../Unlocked/Unlocked";
import "./Locked.css";
import Navbar from "../Navbar2/Navbar2";
import { useNavigate } from "react-router-dom";


export default function LockedCapsule({ unlockAt }) {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const isUnlocked = timeLeft.total <= 0;
    const navigate = useNavigate()
      const handleEvent=()=>{
      navigate('/dashboard')
    }

    useEffect(() => {
        if (isUnlocked) return;

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [isUnlocked]);

    function calculateTimeLeft() {
        const total = new Date(unlockAt) - new Date();

        if (total <= 0) {
            return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
            total,
            days: Math.floor(total / (1000 * 60 * 60 * 24)),
            hours: Math.floor((total / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((total / (1000 * 60)) % 60),
            seconds: Math.floor((total / 1000) % 60),
        };
    }

    function formatDate(date) {
        return new Date(date).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    }

    // 🔓 Once unlocked → delegate to separate component
    if (isUnlocked) {
        return <UnlockedCapsule />;
    }

    return (
        <>
            <Navbar />
            <div className="back-link" onClick={handleEvent}>← Back to Dashboard</div>
            <div className="locked_background">
                <h2 className="capsule-title">Letter to my future self</h2>
                <div className="capsule-card">
                    <div className="lock-icon">🔒</div>

                    <p className="unlock-text">
                        This Capsule will Unlock on <br />
                        <strong>{formatDate(unlockAt)}</strong>
                    </p>

                    <div className="divider" />

                    <p className="remaining-text">
                        Time remaining until unlock
                    </p>

                    <div className="timer">
                        {["Days", "Hours", "Minutes", "Seconds"].map((label, i) => (
                            <div className="time-box" key={label}>
                                <div className="time-value">
                                    {[timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds][i]}
                                </div>
                                <span>{label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
