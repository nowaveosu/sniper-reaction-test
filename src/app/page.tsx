"use client";

import Image from "next/image";
import bot from "../../public/bot.png";
import { useState } from "react";

export default function Home() {
  const [showImage, setShowImage] = useState(false);

  const handleStart = () => {
    const randomSec = getRandomSec();
    setTimeout(() => {
      setShowImage(true);
    }, +randomSec * 1000);
  };

  function getRandomSec() {
    return (Math.random() * 3).toFixed(2);
  }

  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleStart}>
        START
      </button>
      {showImage && (
        <Image
          src={bot}
          alt="Bot Image"
          className="w-20 mt-4" // 이미지 위에 margin 추가
        />
      )}
    </div>
  );
}