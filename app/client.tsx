"use client";

import { useEffect, useState } from "react";

export default function AnimatedText() {
  const [state, setState] = useState<string>("logo");

  useEffect(() => {
    console.log("Trigger animation");
    const animateText = setTimeout(() => {
      setState("text");
    }, 2250);
    const animateExit = setTimeout(() => {
      setState("exit");
    }, 4500);
    return () => {
      clearTimeout(animateText);
      clearTimeout(animateExit);
    };
  }, []);

  return <p>{state}</p>
}