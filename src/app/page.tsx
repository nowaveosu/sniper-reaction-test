"use client";

import Image from "next/image";
import bot from "../../public/bot.png";
import wall from "../../public/wall.png"
import scope from "../../public/scope.png"
import { useState, useRef } from "react";

export default function Home() {


    return(
        <div>
            <div>
                <Image src={bot} alt="bot image"/>
            </div>
            <button>start</button>
        </div>
        
    )
}