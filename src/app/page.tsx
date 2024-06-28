"use client";

import Image from "next/image";
import bot from "../../public/bot.png";
import { useState, useRef } from "react";

export default function Home() {
  const [showImage, setShowImage] = useState(false);
  const [elapsedTime, setElapsedTime] = useState<number | null>(null);
  const startTimeRef = useRef<number>(0);

  const handleStart = () => {
    setShowImage(true);
    startTimeRef.current = Date.now(); 
    setRandomTimeout();
  };

  const handleImageClick = () => {
    const endTime = Date.now(); 
    setElapsedTime(endTime - startTimeRef.current); 
    setShowImage(false);
    setRandomTimeout();
  };

  const setRandomTimeout = () => {
    const randomSec = getRandomSec();
    setTimeout(() => {
      setShowImage(true);
      startTimeRef.current = Date.now(); 
    }, +randomSec * 1000);
  };

  function getRandomSec() {
    return (Math.random() * 10).toFixed(2);
  }

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleStart}
      >
        START
      </button>
      {showImage && (
        <Image
          src={bot}
          alt="Bot Image"
          className="w-20 mt-4 cursor-pointer"
          onClick={handleImageClick}
        />
      )}
      {elapsedTime !== null && (
        <p className="mt-2">Elapsed Time: {elapsedTime} ms</p>
      )}
    </div>
  );
}