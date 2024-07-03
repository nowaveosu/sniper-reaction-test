"use client";

import Image from "next/image";
import bot from "../../public/bot.png";
import wall from "../../public/wall.png"
import scope from "../../public/scope.png"
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
    const minSec = 5;
    const maxSec = 10;
    return (Math.random() * (maxSec - minSec) + minSec).toFixed(2); 
  }

  return (
    <div className="flex flex-col items-center justify-start h-screen"> 
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8"
        onClick={handleStart}
      >
        START
      </button>
      <Image 
            src={wall}
            alt="Wall Image"
            className="w-20 absolute top-20 left-52 z-30" 
      />
      <Image 
            src={scope}
            alt="Scope Image"
            className="w-52 absolute top-20 left-52 z-40" 
      />
      {showImage && (
        <div
        className="w-20 mt-4 cursor-pointer"
        onClick={handleImageClick}
        onContextMenu={(e) => e.preventDefault()} 
        onDragStart={(e) => e.preventDefault()} 
      >

        <Image
          src={bot}
          alt="Bot Image"
          className="w-full relative z-20" 
        />
      </div>
      )}
      {elapsedTime !== null && (
        <p className="mt-2">Elapsed Time: {elapsedTime} ms</p>
      )}
    </div>
  );
}