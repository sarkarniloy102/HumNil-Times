import React, { useEffect, useState } from "react";

const FloatingParticles = ({ numberOfParticles }) => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const tempParticles = [];
        for (let i = 0; i < numberOfParticles; i++) {
            tempParticles.push({
                id: i,
                size: Math.random() * 4 + 2, // 2px - 6px
                left: Math.random() * 100, // percentage
                duration: Math.random() * 10 + 5, // 5s - 15s
                delay: Math.random() * 5, // 0s - 5s
            });
        }
        setParticles(tempParticles);
    }, [numberOfParticles]);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {particles.map((p) => (
                <span
                    key={p.id}
                    className="absolute rounded-full bg-white opacity-80"
                    style={{
                        left: `${p.left}%`,
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        bottom: `-10px`,
                        animation: `floatUp ${p.duration}s linear ${p.delay}s infinite`,
                    }}
                />
            ))}

            {/* can write it in index.css/}
            {/* <style>
                {`
          @keyframes floatUp {
            0% { transform: translateY(0) scale(1); opacity: 1; }
            100% { transform: translateY(-120vh) scale(0.5); opacity: 0; }
          }
        `}
            </style> */}
        </div>
    );
};

export default FloatingParticles;
