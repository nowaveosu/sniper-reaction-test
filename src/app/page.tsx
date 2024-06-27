
"use client";

import Image from "next/image";
import bot from "../../public/bot.png";
import { useState, useEffect } from "react";

export default function Home() {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const randomSec = getRandomSec();
    const timeoutId = setTimeout(() => { 
      setShowImage(true);
    }, +randomSec * 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  function getRandomSec() {
    return (Math.random() * 3).toFixed(2); 
  }

  return (
    <div>
      {showImage && (
        <Image
          src={bot}
          alt="Bot Image"
          className="w-20" 
        />
      )}
    </div>
  );
}
