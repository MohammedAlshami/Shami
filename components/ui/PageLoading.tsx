"use client";

import React, { useState, useEffect } from "react";

export default function LoadingAnimation({ isVisible, setIsVisible }) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const duration = 10000; // 7 seconds
    const intervalTime = 70; // Update every 70ms
    const totalUpdates = duration / intervalTime;

    const interval = setInterval(() => {
      setPercentage((prevPercentage) => {
        const newPercentage = prevPercentage + 100 / totalUpdates;
        if (newPercentage >= 100) {
          clearInterval(interval);
          setIsVisible(false);
          return 100;
        }
        return newPercentage;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-yellow-200 overflow-hidden relative">
      <div className="background absolute inset-0 z-[-1] overflow-hidden before:bg-blue-200"></div>
      <div className="content text-center z-10 relative">
        <div className="percentage text-7xl font-bold text-yellow-300 mb-2">
          {Math.floor(percentage)}%
        </div>
        <div className="progress-container w-72 h-2 bg-yellow-700 rounded-lg overflow-hidden relative mx-auto my-2">
          <div
            className="progress-bar h-full bg-yellow-300 w-0 transition-all duration-100 ease-in-out z-[1000000000000000000000000000]"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <div className="loading-text text-4xl mt-2 text-yellow-300">
          LOADING...
        </div>
      </div>
      <style jsx>{`
        @keyframes fill {
          from {
            top: 100%;
            transform: translateX(-50%) rotate(0deg);
          }
          to {
            top: -10%;
            transform: translateX(-50%) rotate(360deg);
          }
        }
        .background:before {
          content: "" !important;
          position: absolute !important; 
          width: 200% !important;
          height: 200% !important;
          border-radius: 40% !important;
          left: 50% !important;
          transform: translateX(-50%);
          animation: fill 7s ease-out infinite !important;
          background-color: rgb(191, 219, 254) !important;
        }
      `}</style>
    </div>
  );
}
